import { token } from "../../utils/helpers/constants";
import * as actionTypes from "../constants/auth";

const initialState = {
  currentEmail: "",
  isAuth: token !== null ? true : false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CURRENT_SIGNUP_EMAIL:
      return {
        ...state,
        currentEmail: payload,
      };
    case actionTypes.SET_IS_AUTH:
      return {
        ...state,
        isAuth: payload,
      };

    default:
      return state;
  }
};

export default reducer;
