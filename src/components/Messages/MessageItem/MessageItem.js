import React from "react";
import NameIcon from "../../Chats/NameIcon/NameIcon";
import { format } from "date-fns";
import classNames from "classnames";

const MessageItem = ({
  message,
  showInfo,
  author,
  authorId,
  createdAt,
  userId,
}) => {
  return (
    <li
      className={classNames({
        right: authorId === userId,
        left: authorId !== userId,
      })}
    >
      <div
        className={classNames("conversation-list", {
          "conversation-list__mb0": !showInfo,
        })}
      >
        <div
          className={classNames("chat-avatar", {
            "chat-avatar__hidden": !showInfo,
          })}
        >
          <NameIcon name={author} />
        </div>

        <div className="user-chat-content">
          <div className="ctext-wrap">
            <div className="ctext-wrap-content">
              <p className="mb-0">{message}</p>
              <p className="chat-time mb-0">
                <i className="ri-time-line align-middle"></i>{" "}
                <span className="align-middle">
                  {format(new Date(createdAt), "HH:mm:ss")}
                </span>
              </p>
            </div>
          </div>
          <div
            className={classNames("conversation-name", {
              "conversation-name__hidden": !showInfo,
            })}
          >
            {author}
          </div>
        </div>
      </div>
    </li>
  );
};

export default MessageItem;
