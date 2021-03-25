import * as actionTypes from "../constants/users";

const initialState = {
  usersList: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_SEARCH_USERS:
      return {
        ...state,
        usersList: payload,
      };

    default:
      return state;
  }
};

export default reducer;
