import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAs_X27yULe2rhXim_3Hn-2yRimdnaIrNg",
  authDomain: "chatvia-c984b.firebaseapp.com",
  databaseURL: "https://chatvia-c984b-default-rtdb.firebaseio.com",
  projectId: "chatvia-c984b",
  storageBucket: "chatvia-c984b.appspot.com",
  messagingSenderId: "834684422664",
  appId: "1:834684422664:web:e8e5a35a3d917630681fbd",
};

firebase.initializeApp(firebaseConfig);

export const listnerChatsOn = (chatId) => {
  return firebase.database().ref(`chats/${chatId}`);
};

export const messagesRef = (messageId) => {
  return firebase.database().ref(`messages/${messageId}`);
};

export const updateInfoInChat = (chatId, userId, message, count) => {
  const updatedInfo = {
    updateAt: Date.now(),
    lastMessage: message,
    sendNewMessageCounter: ++count,
  };

  return firebase
    .database()
    .ref(`chats/${userId}/${chatId}`)
    .update(updatedInfo);
};

export const updateInfoInPartnerChat = (chatId, partnerId, message, count) => {
  const updatedInfo = {
    updateAt: Date.now(),
    lastMessage: message,
    unreadMessageCount: ++count,
    sendNewMessageCounter: 0,
  };

  return firebase
    .database()
    .ref(`chats/${partnerId}/${chatId}`)
    .update(updatedInfo);
};

export const msgCounterReset = (partnerId, chatId) => {
  const updatedInfo = {
    sendNewMessageCounter: 0,
  };

  return firebase
    .database()
    .ref(`chats/${partnerId}/${chatId}`)
    .update(updatedInfo);
};

export const typeMessage = (partnerId, chatId, status) => {
  const updatedInfo = {
    typing: status,
  };

  return firebase
    .database()
    .ref(`chats/${partnerId}/${chatId}`)
    .update(updatedInfo);
};

export default firebase;
