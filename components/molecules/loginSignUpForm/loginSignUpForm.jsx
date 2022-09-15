import React, { useState } from "react";
import Input from "../../atoms/input/input";
import styles from "./loginSignUpForm.module.css";
import Image from "next/image";
import PasswordImg from "../../../assests/icons/lock.svg";
import hiddenEye from "../../../assests/icons/hiddenEye.svg";
import eye from "../../../assests/icons/eye.svg";
import facebookIcon from "../../../assests/icons/facebook.svg";
import appleIcon from "../../../assests/icons/apple.svg";
import googleIcon from "../../../assests/icons/google.svg";
import Button from "../../atoms/button/button";
import { useRouter } from "next/router";
import userPool from "../../../userPool";
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import CustomLoader from "../../atoms/customLoader/customLoader";
import { validationObj } from "../../../utils/validation";
import { useAppContext } from "../../../context";
import { setLoaderState, updateIsAuthorised } from "../../../context/actions";

const LoginSignUpForm = ({ isSignUp = false, isEmail = true }) => {
  const [isLoaderVisible, setisLoaderVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);
  const { state, dispatch } = useAppContext();

  const onInputChange = (e) => {
    setFormData({ ...formData, ...{ [e.key]: e.value } });
    setIsError(e.isError);
  };

  const handleSubmit = () => {
    const { email, password } = formData;

    const user = new CognitoUser({ Username: email, Pool: userPool });
    dispatch(setLoaderState(true));

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        sessionStorage.setItem("AccessToken", result.accessToken.jwtToken);
        dispatch(setLoaderState(false));
        router.push("/home");
        dispatch(updateIsAuthorised(true));
      },
      onFailure: (error) => {
        dispatch(setLoaderState(false));

      },
      newPasswordRequired: (data) => {
        dispatch(setLoaderState(false));
      },
    });
  };
  return (
    <div className={styles.form_sec}>
      {isLoaderVisible && <CustomLoader />}
      <div className={styles.emailInputWrapper}>
        <Input
          name={isEmail ? "email" : "phone"}
          className={styles.emailInput}
          placeHolder={isEmail ? "Email" : "Phone"}
          type={isEmail ? "email" : "number"}
          onBlurHandler={onInputChange}
          valdationDetails={
            isEmail ? validationObj.EMAIL : validationObj.PHONENO
          }
          errorClassName={styles.errorMsgPass}
        />
      </div>
      {!isSignUp && (
        <>
          <div className={styles.passwordInputWrapper}>
            <Image className={styles.lockIcon} src={PasswordImg} alt={"lock"} />
            <Input
              name={"password"}
              className={styles.passwordInput}
              errorClassName={styles.errorMsgPass}
              type={isHidden ? "password" : "text"}
              placeHolder={"Password"}
              pattern="[a-z0-9]{1,15}"
              onBlurHandler={onInputChange}
              valdationDetails={validationObj.PASSWORD}
              // value="Test@123"
            />

            <Image
              className={styles.eyeIcon}
              src={isHidden ? hiddenEye : eye}
              alt={"lock"}
              onClick={() => setIsHidden(!isHidden)}
            />
          </div>
          <div className={styles.forgetPassword_wrap}>
            <p>
              Forget password?
              <a href="#" className={styles.reset_text}>
                Reset it
              </a>
            </p>
          </div>
        </>
      )}

      <Button
        className={styles.loginbtn}
        onClickHandler={handleSubmit}
        text={isSignUp ? "Sign up" : "Log In"}
        disabled={!isError}
      />
      <p className={styles.orSection}>
        <span>or</span>
      </p>
      <Button
        className={`${styles.socialbtn} ${styles.socialBlue}`}
        text={
          <span>
            <Image
              className={styles.socialIcon}
              src={facebookIcon}
              alt={"facebook"}
            />{" "}
            Continue with Facebook
          </span>
        }
      />
      <Button
        className={`${styles.socialbtn} ${styles.socialLightBlue}`}
        text={
          <span>
            <Image
              className={styles.socialIcon}
              src={googleIcon}
              alt={"google"}
            />{" "}
            Continue with Google
          </span>
        }
      />
      <Button
        className={`${styles.socialbtn} ${styles.socialBlack}`}
        text={
          <span>
            <Image
              className={styles.socialIcon}
              src={appleIcon}
              alt={"apple"}
            />{" "}
            Continue with Apple
          </span>
        }
      />
    </div>
  );
};

export default LoginSignUpForm;
