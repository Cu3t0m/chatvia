import { toast } from "react-toastify";
import { messagesApi } from "../../utils/api/messages";
import { objectToArr } from "../../utils/helpers/objectToArray";
import * as actionTypes from "../constants/messages";

export const createMessageRoom = (id) => {
  messagesApi.createMessageRoom(id);
};

export const setLoading = (bool) => {
  return {
    type: actionTypes.LOADING_MESSAGES,
    payload: bool,
  };
};

export const getMessagesSuccess = (messages) => {
  return {
    type: actionTypes.GET_MESSAGES,
    payload: messages,
  };
};

export const getMessages = (id) => (dispatch) => {
  dispatch(setLoading(true));
  messagesApi
    .getMessages(id)
    .then((res) => {
      const fetchedMessages = [];
      objectToArr(fetchedMessages, res.data);
      dispatch(
        getMessagesSuccess(fetchedMessages.slice(0, fetchedMessages.length - 1))
      );
    })
    .catch((err) => {
      toast.error(err.message);
      dispatch(setLoading(false));
    });
};

export const addNewMessage = (postData, chatId) => (dispatch) => {
  messagesApi
    .addMessage(postData, chatId)
    .catch((err) => toast.error(err.message));
};
