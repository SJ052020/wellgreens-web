export const validationObj = {
  EMAIL: {
    isRequired: true,
    regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    requiredErrMessage: "Email is Required",
    patternErrMessage: "Email is not valid",
  },
  PHONENO: {
    isRequired: true,
    regex: /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,
    requiredErrMessage: "Phone No is Required",
    patternErrMessage: "Phone No is not valid",
  },
  PASSWORD: {
    isRequired: true,
    regex:/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    requiredErrMessage: "Password is Required",
    patternErrMessage:
      "Must contain at least one number and one uppercase and lowercase letter",
  },
};
