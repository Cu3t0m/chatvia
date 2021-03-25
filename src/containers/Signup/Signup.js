import React from "react";
import { connect } from "react-redux";
import AuthFooter from "../../components/Auth/AuthFooter/AuthFooter";
import AuthHeader from "../../components/Auth/AuthHeader/AuthHeader";
import SignupForm from "../../components/Auth/SignupForm/SignupForm";
import { signup } from "../../store/actions/auth";

const Signup = ({ signup }) => {
  return (
    <>
      <AuthHeader title="Sign up" description="Get your Chatvia account now." />
      <SignupForm signup={signup} />
      <AuthFooter
        label="Already have an account"
        labelTitle="Signin"
        path="/signin"
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signup: (postData, history) => dispatch(signup(postData, history)),
});

export default connect(null, mapDispatchToProps)(Signup);
