import React from "react";
import logo from "../../assets/img/logo.svg";

const Logotype = () => {
  return (
    <div className="logo">
      <span className="logo-sm">
        <img src={logo} alt="" height="30" />
      </span>
    </div>
  );
};

export default Logotype;
