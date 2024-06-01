import * as Yup from "yup";

export const signupValidationSchema = Yup.object({
  username: Yup.string().required("Username Required"),
  email: Yup.string().email("Invalid email address").required("Email Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
