import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { loginFormikConfig } from "../../formik/formikConfig";
import Button1 from "../generalComponents/Button1";
import Box from "../generalComponents/Box";
import FormField from "../generalComponents/generalErrorMessage/FormField";
import ButtonGradient from "../../assets/svg/ButtonGradient";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLoginSubmit = async (values, actions) => {
    try {
      console.log("Submitting form");
      await loginFormikConfig.onSubmit(values);
      console.log("Form submitted successfully");

      if (values.username === "user" && values.password === "admin") {
        console.log("Navigating to /dashboard");
        navigate("/home");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <Box className="max-w-md w-full bg-gray-800">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Login
        </h1>
        <Formik {...loginFormikConfig} onSubmit={handleLoginSubmit}>
          {({ errors, touched, isValid }) => (
            <Form>
              <FormField
                name="username"
                label="Username"
                type="text"
                placeholder="Enter your Username"
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
              <div className="flex items-center justify-center mt-[1rem]">
                <Button1
                  type="submit"
                  className={`text-white ${
                    !isValid ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  disabled={!isValid}
                >
                  Sign In
                </Button1>
              </div>
              {error && (
                <div className="text-red-500 text-sm mt-2">{error}</div>
              )}
              <div className="mt-4 text-center">
                <span className="text-white text-sm">
                  Don't have an account?{" "}
                </span>
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Signup Here
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

export default Login;
