export const loginInitialValues = {
  username: "",
  password: "",
};

export const loginValidate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username Required";
  }

  if (!values.password) {
    errors.password = "Password Required";
  }

  return errors;
};

export const loginOnSubmit = async (values) => {
  console.log("Form data", values);
};

export const loginFormikConfig = {
  initialValues: loginInitialValues,
  validate: loginValidate,
  onSubmit: loginOnSubmit, // Add onSubmit function here
};
