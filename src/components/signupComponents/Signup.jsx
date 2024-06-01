import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { signupFormikConfig } from "../../formik/SignupFormConfig";
import Box from "../generalComponents/Box";
import Button1 from "../generalComponents/Button1";
import FormField from "../generalComponents/generalErrorMessage/FormField";
import ButtonGradient from "../../assets/svg/ButtonGradient";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <Box className="max-w-md w-full bg-gray-800">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Sign Up
        </h1>
        <Formik
          {...signupFormikConfig}
          onSubmit={(values) => {
            console.log("Submitting form:", values);
            console.log("Form is valid, navigating to login");
            navigate("/login");
          }}
        >
          {({ errors, touched, isValid }) => (
            <Form>
              <FormField
                name="username"
                label="Username"
                type="text"
                placeholder="Enter your username"
                errors={errors}
                touched={touched}
              />
              <FormField
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                errors={errors}
                touched={touched}
              />
              <FormField
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                errors={errors}
                touched={touched}
              />
              <FormField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                errors={errors}
                touched={touched}
              />
              <div className="flex items-center justify-center mt-[1rem]">
                <Button1
                  type="submit"
                  className={`text-white ${
                    !isValid ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  disabled={!isValid}
                >
                  Sign Up
                </Button1>
              </div>
              <div className="mt-4 text-center">
                <span className="text-white text-sm">
                  Already have an account?{" "}
                </span>
                <Link to="/login" className="text-blue-500 hover:underline">
                  Log in Here
                </Link>
              </div>
            </Form>
          )}
        </Formik>
        <ButtonGradient />
      </Box>
    </div>
  );
};

export default Signup;
