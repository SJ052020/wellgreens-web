import React, { useState } from 'react'
import styles from './input.module.css'

const Input = ({
  type,
  inputValue,
  onBlurHandler,
  className,
  name,
  placeHolder,
  valdationDetails,
  errorClassName
}) => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onInputChange = ({ target: { value: val } }) => {
    if (val) {
      setIsError(false);
      if (valdationDetails.regex) {
        const regTest = RegExp(valdationDetails.regex);
        if (!regTest.test(val)) {
          setIsError(true);
          setErrorMessage(valdationDetails.patternErrMessage);
        }
      } else {
        setIsError(false);
      }
    } else {
      setIsError(true);
      setErrorMessage(valdationDetails.requiredErrMessage);
    }
  };
  const onInputBlur = ({ target: { value: val, name: key } }) => {
    if (val) {
      onBlurHandler({ key, value: val, isError: !isError });
    } else {
      setErrorMessage(valdationDetails.requiredErrMessage);
      setIsError(true);
    }
  };
  return (
    <>
        <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.labelHidden}>{name}</label>
      <input
      
        id={name}
        name={name}
        className={className}
        type={type}
        value={inputValue}
        onChange={onInputChange}
        onBlur={onInputBlur}
        placeholder={placeHolder}
      />
         </div>
         {isError && <p className={errorClassName}>{errorMessage}</p>}
    </>


  );
};

export default Input;