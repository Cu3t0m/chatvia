import React from "react";
import PartnerHeader from "../PartnerHeader/PartnerHeader";
import Messages from "../Messages/Messages";
import MessagesForm from "../MessagesForm/MessagesForm";

const MessagesContent = () => {
  return (
    <div className="user-chat w-100 relative">
      <div className="d-lg-flex">
        <div className="w-100">
          <PartnerHeader />
          <Messages />
          <MessagesForm />
        </div>
      </div>
    </div>
  );
};

export default MessagesContent;
