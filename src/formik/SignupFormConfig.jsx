import { signupValidationSchema } from "../signupvalidation/SignupValidationSchema";

export const signupInitialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const signupOnSubmit = (values) => {
  console.log("Form data", values);
};

export const signupFormikConfig = {
  initialValues: signupInitialValues,
  validationSchema: signupValidationSchema,
  onSubmit: signupOnSubmit,
};
