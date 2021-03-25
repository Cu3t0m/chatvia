import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./hoc/privateRoute";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";

const App = ({ isAuth }) => {
  return (
    <div className="main-wrap">
      <Route exact path="/" render={() => <Redirect to="/im" />} />
      <Route
        exact
        path={["/signin", "/signup"]}
        render={() => (isAuth ? <Redirect to="/im" /> : <Auth />)}
      />
      <PrivateRoute exact path="/im" component={Home} />
      <ToastContainer
        position="bottom-center"
        closeOnClick
        autoClose={2000}
        hideProgressBar={true}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(App);
