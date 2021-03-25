import Popover from "antd/lib/popover";
import React from "react";
import NameIcon from "../../Chats/NameIcon/NameIcon";

const UserDropdown = ({ name, logout }) => {
  const content = (
    <div className="dropdown-item" onClick={logout}>
      Log out <i className="ri-logout-circle-r-line float-right text-muted"></i>
    </div>
  );
  return (
    <div className="nav side-menu-nav justify-content-center">
      <div className="nav-item btn-group dropup profile-user-dropdown">
        <Popover content={content} placement="topLeft" trigger="click">
          <div className="nav-link dropdown-toggle user-dropdown">
            <NameIcon name={name} />
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default UserDropdown;
