import React from "react";
import { Field, ErrorMessage } from "formik";

const FormField = ({ name, label, type, placeholder, errors, touched }) => (
  <div className="mt-4">
    <label className="block text-white text-sm font-bold mb-2">{label}</label>
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        errors[name] && touched[name] ? "border-red-500" : ""
      }`}
    />
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-xs mt-1"
    />
  </div>
);

export default FormField;
