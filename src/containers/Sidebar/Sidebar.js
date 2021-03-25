import React from "react";
import { connect } from "react-redux";
import Logotype from "../../components/Logotype/Logotype";
import UserDropdown from "../../components/Sidebar/UserDropdown/UserDropdown";
import { logout } from "../../store/actions/auth";

const Sidebar = ({ user, logout }) => {
  return (
    <div className="side-menu flex-lg-column mr-lg-1">
      <div className="navbar-brand-box">
        <Logotype />
      </div>

      {user && (
        <div className="flex-lg-column d-none d-lg-block">
          <UserDropdown name={user.name} logout={logout} />
        </div>
      )}
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    user: state.user.userData,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
