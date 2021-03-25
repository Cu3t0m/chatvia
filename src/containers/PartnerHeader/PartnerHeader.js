import React from "react";
import { connect } from "react-redux";
import PartnerMessagesInfo from "../../components/Messages/PartnerMessagesInfo/PartnerMessagesInfo";

const PartnerHeader = ({ chats, currentChatId, userId }) => {
  const selectedUser = chats.find((chat) => chat.id === currentChatId);

  return (
    <>
      {currentChatId !== "" && (
        <div className="p-3 p-lg-4 border-bottom">
          <div className="row align-items-center">
            <PartnerMessagesInfo selectedUser={selectedUser} userId={userId} />
          </div>
        </div>
      )}
    </>
  );
};

export const mapStateToProps = (state) => {
  return {
    chats: state.chats.chats,
    currentChatId: state.chats.currentChatId,
    userId: state.user.userId,
  };
};

export default connect(mapStateToProps)(PartnerHeader);
