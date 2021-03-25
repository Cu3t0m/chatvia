import { toast } from "react-toastify";
import { chatsApi } from "../../utils/api/chats";
import { createMessageRoom } from "./messages";
import { objectToArr } from "../../utils/helpers/objectToArray";
import * as actionTypes from "../constants/chats";

export const setLoading = (items) => ({
  type: actionTypes.LOADING_CHATS,
  payload: items,
});

export const getChatItemsSuccess = (items) => ({
  type: actionTypes.GET_CHAT_ITEMS,
  payload: items,
});

export const getChatItems = () => (dispatch) => {
  chatsApi
    .getChats()
    .then((res) => {
      const fetchedChats = [];
      objectToArr(fetchedChats, res.data);
      dispatch(getChatItemsSuccess(fetchedChats));
    })
    .catch((err) => {
      toast.error(err.message);
    });
};

export const createChatSuccess = (chat) => ({
  type: actionTypes.CREATE_NEW_CHAT,
  payload: chat,
});

export const createUserPartnerChat = (partnerUid, partnerName, currentUser) => {
  chatsApi
    .createUserPartnerChat(partnerUid, partnerName, currentUser)
    .catch((err) => console.log(err.message));
};

export const createChat = (partnerUid, partnerName, currentUser) => (
  dispatch
) => {
  chatsApi
    .createChat(partnerUid, partnerName, currentUser)
    .then((res) => {
      dispatch(createChatSuccess(res.data));
      createMessageRoom(res.data.id);
    })
    .then(() => {
      createUserPartnerChat(partnerUid, partnerName, currentUser);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setCurrentChatId = (id) => {
  return {
    type: actionTypes.SET_CURRENT_CHAT_ID,
    payload: id,
  };
};

export const readMessages = (authorId, chatId) => (dispatch) => {
  chatsApi.readMessages(authorId, chatId);
};
