import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { messageSchema } from "../../utils/helpers/validate";
import { connect } from "react-redux";
import { addNewMessage } from "../../store/actions/messages";
import {
  updateInfoInChat,
  updateInfoInPartnerChat,
  typeMessage,
} from "../../utils/firebase/firebase";
import MessageSmiles from "../../components/Messages/MessageSmiles/MessageSmiles";

const MessagesForm = ({
  currentUser,
  addNewMessage,
  currentChatId,
  chats,
  userId,
}) => {
  const [emoji, setEmoji] = useState("");
  const [msg, setMsg] = useState("");

  const msgHandler = (e) => {
    if (e.target.value.length >= 1) {
      typeMessage(selectedUserId, currentChatId, true);
    } else {
      typeMessage(selectedUserId, currentChatId, false);
    }
    setMsg(e.target.value);
  };

  const resetFormHandler = () => {
    setMsg("");
    setEmoji("");
  };

  let initialValues = null;
  if (currentUser) {
    initialValues = {
      author: currentUser.name,
      authorId: userId,
      message: emoji,
    };
  }

  const selectedUser = chats.find((chat) => chat.id === currentChatId);

  let selectedUserId;
  if (currentChatId !== "") {
    selectedUserId =
      selectedUser.author === userId
        ? selectedUser.partner
        : selectedUser.author;
  }

  let messagesCount = 0;
  if (selectedUser) {
    messagesCount = selectedUser.sendNewMessageCounter;
  }

  return (
    <>
      {currentChatId !== "" && (
        <div className="p-3 p-lg-4 border-top mb-0">
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={messageSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              addNewMessage(values, currentChatId);
              updateInfoInChat(
                currentChatId,
                userId,
                values.message,
                messagesCount
              );
              updateInfoInPartnerChat(
                currentChatId,
                selectedUserId,
                values.message,
                messagesCount
              );
              typeMessage(selectedUserId, currentChatId, false);
              resetFormHandler();
              resetForm({});
              setSubmitting(false);
            }}
          >
            {({ handleChange }) => (
              <Form className="row no-gutters" autoComplete="off">
                <div className="col">
                  <div>
                    <Field
                      className="form-control bg-soft-light border-light form-control"
                      type="text"
                      name="message"
                      placeholder="Enter Message..."
                      onChange={(e) => {
                        msgHandler(e);
                        handleChange(e);
                      }}
                      onBlur={() =>
                        typeMessage(selectedUserId, currentChatId, false)
                      }
                    />
                  </div>
                </div>

                <div className="col-auto">
                  <div className="chat-input-links ml-md-2">
                    <div className="list-inline mb-0">
                      <MessageSmiles setEmoji={setEmoji} msg={msg} />

                      <div className="list-inline-item">
                        <button
                          type="submit"
                          className="btn btn-primary font-size-16 btn-lg chat-send waves-effect waves-light"
                        >
                          <i className="ri-send-plane-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export const mapStateToProps = (state) => {
  return {
    currentUser: state.user.userData,
    currentChatId: state.chats.currentChatId,
    chats: state.chats.chats,
    userId: state.user.userId,
    messages: state.messages.messages,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: (postData, chatId) =>
      dispatch(addNewMessage(postData, chatId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesForm);
