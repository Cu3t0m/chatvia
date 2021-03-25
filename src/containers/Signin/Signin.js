import React from "react";
import { connect } from "react-redux";
import AuthFooter from "../../components/Auth/AuthFooter/AuthFooter";
import AuthHeader from "../../components/Auth/AuthHeader/AuthHeader";
import SigninForm from "../../components/Auth/SigninForm/SigninForm";
import { signin } from "../../store/actions/auth";

const Signin = ({ currentEmail, signin }) => {
  return (
    <>
      <AuthHeader
        title="Sign in"
        description="Sign in to continue to Chatvia."
      />
      <SigninForm currentEmail={currentEmail} signin={signin} />
      <AuthFooter
        label="Don't have an account ?"
        labelTitle="Signup now"
        path="/signup"
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  currentEmail: state.auth.currentEmail,
});

const mapDispatchToProps = (dispatch) => ({
  signin: (postData) => dispatch(signin(postData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
