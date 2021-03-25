import React from "react";
import logo from "../../../assets/img/logo-auth.png";

const AuthHeader = ({ title, description }) => {
  return (
    <div className="text-center mb-4">
      <div className="auth-logo auth-logo-wrap mb-5 d-block">
        <img className="logo logo-dark" src={logo} alt="" />
      </div>
      <h4>{title}</h4>
      <p className="text-muted mb-4">{description}</p>
    </div>
  );
};

export default AuthHeader;
