import * as actionTypes from "../constants/chats";

const initialState = {
  chats: [],
  currentChatId: "",
  loading: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_CHAT_ITEMS:
      return {
        ...state,
        chats: payload,
        loading: false,
      };
    case actionTypes.SET_CURRENT_CHAT_ID:
      return {
        ...state,
        currentChatId: payload,
      };
    case actionTypes.LOADING_CHATS:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
};

export default reducer;
