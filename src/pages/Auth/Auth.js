import React from "react";
import { Route } from "react-router-dom";
import Signin from "../../containers/Signin/Signin";
import Signup from "../../containers/Signup/Signup";

const Auth = () => {
  return (
    <div className="account-pages my-5 pt-sm-5">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
