import React from "react";

const Box = ({ children, className = "" }) => {
  return (
    <div className={`p-4 bg-gray-100 rounded shadow ${className}`}>
      {children}
    </div>
  );
};

export default Box;
