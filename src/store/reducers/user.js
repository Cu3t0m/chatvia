import * as actionTypes from "../constants/user";

const initialState = {
  userData: null,
  userId: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_USER_DATA:
      return {
        ...state,
        userData: payload,
        userId: payload.uid,
      };

    default:
      return state;
  }
};

export default reducer;
