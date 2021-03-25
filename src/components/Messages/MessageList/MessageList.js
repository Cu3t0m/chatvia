import React from "react";
import Empty from "antd/lib/empty";
import Spin from "antd/lib/spin";
import MessageItem from "../MessageItem/MessageItem";

const MessageList = ({ messages, blockRef, loading, userId }) => {
  return (
    <ul
      ref={blockRef}
      className="list-unstyled message-list-content mb-0 p-lg-4 p-3"
    >
      {!loading && messages.length > 0 ? (
        messages.map((message, i) => {
          let showInfo = false;
          if (i === messages.length - 1) {
            showInfo = true;
          } else {
            const nextName = messages[i + 1].author;
            if (message.author !== nextName) {
              showInfo = true;
            }
          }
          return (
            <MessageItem
              key={message.id}
              showInfo={showInfo}
              userId={userId}
              {...message}
            />
          );
        })
      ) : !loading && messages.length === 0 ? (
        <div className="loader-wrapper">
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="You have no messages"
          />
        </div>
      ) : (
        <div className="loader-wrapper">
          <Spin size="large" />
        </div>
      )}
    </ul>
  );
};

export default MessageList;
