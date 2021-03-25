import React from "react";
import NameIcon from "../../../Chats/NameIcon/NameIcon";

const PartnerMessagesName = ({ author, partnerName, authorName, userId }) => {
  const userName = author === userId ? partnerName : authorName;
  return (
    <div className="col-sm-4 col-8">
      <div className="media align-items-center">
        <div className="mr-3">
          <NameIcon name={userName} />
        </div>
        <div className="media-body overflow-hidden">
          <h5 className="font-size-16 mb-0 text-truncate">
            <strong className="text-reset user-profile-show">{userName}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PartnerMessagesName;
