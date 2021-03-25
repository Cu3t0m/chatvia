import axios from "../../axios";

const userId = localStorage.getItem("uidChatv");

export const chatsApi = {
  getChats: () => axios.get(`chats/${userId}.json`),
  createChat: (partnerUid, partnerName, currentUser) => {
    let chatId = null;
    if (currentUser.uid < partnerUid) {
      chatId = currentUser.uid + "_" + partnerUid;
    } else {
      chatId = partnerUid + "_" + currentUser.uid;
    }

    return axios.patch(`chats/${currentUser.uid}/${chatId}.json`, {
      authorName: currentUser.name,
      author: currentUser.uid,
      partnerName: partnerName,
      partner: partnerUid,
      updateAt: Date.now(),
      id: chatId,
      unreadMessageCount: 0,
      sendNewMessageCounter: 0,
    });
  },
  createUserPartnerChat: (partnerUid, partnerName, currentUser) => {
    let chatId = null;
    if (currentUser.uid < partnerUid) {
      chatId = currentUser.uid + "_" + partnerUid;
    } else {
      chatId = partnerUid + "_" + currentUser.uid;
    }

    return axios.patch(`chats/${partnerUid}/${chatId}.json`, {
      authorName: currentUser.name,
      author: currentUser.uid,
      partnerName: partnerName,
      partner: partnerUid,
      updateAt: Date.now(),
      id: chatId,
      unreadMessageCount: 0,
      sendNewMessageCounter: 0,
    });
  },
  readMessages: (authorId, chatId) =>
    axios.patch(`chats/${authorId}/${chatId}.json`, {
      unreadMessageCount: 0,
      sendNewMessageCounter: 0,
    }),
};
