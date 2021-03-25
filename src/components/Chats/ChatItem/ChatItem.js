import React, { useEffect } from "react";
import classNames from "classnames";
import { format } from "date-fns";
import { isToday } from "date-fns";
import NameIcon from "../NameIcon/NameIcon";
import { msgCounterReset } from "../../../utils/firebase/firebase";

const ChatItem = ({
  id,
  author,
  partner,
  authorName,
  partnerName,
  name,
  isSearching,
  createChat,
  currentUser,
  updateAt,
  setCurrentChatId,
  lastMessage,
  unreadMessageCount,
  readMessages,
  currentChatId,
  typing,
  handleCancel,
}) => {
  let userName = "";
  let authorId = "";
  if (!isSearching && author === currentUser) {
    userName = partnerName;
    authorId = partner;
  } else if (!isSearching && author !== currentUser) {
    userName = authorName;
    authorId = author;
  } else {
    userName = name;
  }

  const createChathandler = (id, name, currentUser) => {
    createChat(id, name, currentUser);
    handleCancel();
  };

  const chatHandler = (userId, id, partnerId) => {
    readMessages(userId, id);
    msgCounterReset(partnerId, id);
    setCurrentChatId(id);
  };

  useEffect(() => {
    if (!isSearching && currentChatId === id) {
      return () => msgCounterReset(authorId, id);
    }
  }, [currentChatId, authorId, id, isSearching]);

  return (
    <li
      className={classNames({ active: currentChatId === id, typing: typing })}
    >
      <div
        onClick={
          isSearching
            ? () => createChathandler(id, name, currentUser)
            : () => chatHandler(currentUser, id, authorId)
        }
      >
        <div className="chat-single-wrap">
          <div className={classNames("media", { "searching-mb": isSearching })}>
            <div className="chat-user-img online align-self-center mr-3">
              <NameIcon name={userName} />
            </div>
            <div className="media-body overflow-hidden">
              <h5 className="text-truncate font-size-15 mb-1">{userName}</h5>
              {!isSearching && (
                <>
                  {!typing ? (
                    <p className="chat-user-message text-truncate mb-0">
                      {lastMessage}
                    </p>
                  ) : (
                    <p className="chat-user-message text-truncate mb-0">
                      typing
                      <span className="animate-typing">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </span>
                    </p>
                  )}
                </>
              )}
            </div>
            {!isSearching && (
              <div className="font-size-11">
                {isToday(new Date(updateAt))
                  ? format(new Date(updateAt), "HH:mm")
                  : format(new Date(updateAt), "dd/MM/yy")}
              </div>
            )}
            <div
              className={classNames("unread-message", {
                show: unreadMessageCount !== 0 && currentChatId !== id,
              })}
            >
              <span className="badge badge-soft-danger badge-pill">
                {unreadMessageCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ChatItem;
