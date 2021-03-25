import React from "react";
import { Link } from "react-router-dom";

const AuthFooter = ({ label, labelTitle, path }) => {
  return (
    <div className="mt-5 text-center">
      <p>
        {label}
        <Link to={path} className="font-weight-medium text-primary">
          {" "}
          {labelTitle}
        </Link>
      </p>
    </div>
  );
};

export default AuthFooter;
