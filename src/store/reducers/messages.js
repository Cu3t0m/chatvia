import * as actionTypes from "../constants/messages";

const initialState = {
  messages: [],
  loading: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_MESSAGES:
      return {
        ...state,
        messages: payload,
        loading: false,
      };
    case actionTypes.LOADING_MESSAGES:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
};

export default reducer;
