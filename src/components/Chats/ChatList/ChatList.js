import React from "react";
import ChatItem from "../ChatItem/ChatItem";
import orderBy from "lodash/orderBy";
import Empty from "antd/lib/empty";

const ChatList = ({
  chats,
  setCurrentChatId,
  loading,
  currentUser,
  readMessages,
  currentChatId,
}) => {
  return (
    <div className="chat-message-list" data-simplebar="init">
      {!loading && chats && (
        <div className="simplebar-content">
          {!loading && chats.length <= 0 ? (
            <Empty description="You have no chats" />
          ) : (
            <ul className="list-unstyled chat-list chat-user-list">
              {orderBy(chats, ["updateAt"], ["desc"]).map((user) => (
                <ChatItem
                  key={user.id}
                  setCurrentChatId={setCurrentChatId}
                  currentUser={currentUser}
                  readMessages={readMessages}
                  currentChatId={currentChatId}
                  {...user}
                />
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatList;
