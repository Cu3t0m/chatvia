import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getMessagesSuccess, setLoading } from "../../store/actions/messages";
import MessageList from "../../components/Messages/MessageList/MessageList";
import { messagesRef } from "../../utils/firebase/firebase";
import Empty from "antd/lib/empty";

const Messages = ({
  currentChatId,
  getMessages,
  messages,
  loading,
  setLoading,
  userId,
}) => {
  const messageInitBottom = useRef(null);

  useEffect(() => {
    if (currentChatId) {
      setLoading(true);
      messagesRef(currentChatId).on("value", (snapshot) => {
        if (!snapshot.exists()) return;
        const fetchedSnapshot = [];

        for (let key in snapshot.val()) {
          fetchedSnapshot.push({
            ...snapshot.val()[key],
            id: key,
          });
        }

        getMessages(fetchedSnapshot.slice(0, fetchedSnapshot.length - 1));
      });

      return () => messagesRef(currentChatId).off();
    }
  }, [getMessages, currentChatId, setLoading]);

  useEffect(() => {
    if (currentChatId && messages.length > 0) {
      messageInitBottom.current.scrollTop =
        messageInitBottom.current.scrollHeight;
    }
  }, [currentChatId, messages.length]);

  return (
    <div className="chat-conversation  messages-content">
      {currentChatId !== "" ? (
        <MessageList
          messages={messages}
          loading={loading}
          blockRef={messageInitBottom}
          userId={userId}
        />
      ) : (
        <div className="loader-wrapper">
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Please select a chat to start messaging"
          />
        </div>
      )}
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    currentChatId: state.chats.currentChatId,
    messages: state.messages.messages,
    loading: state.messages.loading,
    userId: state.user.userId,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: (message) => dispatch(getMessagesSuccess(message)),
    setLoading: (bool) => dispatch(setLoading(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
