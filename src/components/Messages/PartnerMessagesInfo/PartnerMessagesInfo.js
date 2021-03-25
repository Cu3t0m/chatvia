import React from "react";
import PartnerMessagesName from "../MessageItem/PartnerMessagesName/PartnerMessagesName";

const PartnerMessagesInfo = ({ selectedUser, userId }) => {
  return (
    <>
      <PartnerMessagesName userId={userId} {...selectedUser} />

      {/* <div className="col-sm-8 col-4">
        <ul className="list-inline user-chat-nav text-right mb-0">
          <li className="list-inline-item">
            <div className="dropdown">
              <button
                className="btn nav-btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ri-search-line"></i>
              </button>
              <div className="dropdown-menu p-0 dropdown-menu-right dropdown-menu-md">
                <div className="search-box p-2">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder="Search.."
                  />
                </div>
              </div>
            </div>
          </li>

          <li className="list-inline-item d-none d-lg-inline-block">
            <button type="button" className="btn nav-btn user-profile-show">
              <i className="ri-user-2-line"></i>
            </button>
          </li>

          <li className="list-inline-item">
            <div className="dropdown">
              <button
                className="btn nav-btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ri-more-fill"></i>
              </button>
            </div>
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default PartnerMessagesInfo;
