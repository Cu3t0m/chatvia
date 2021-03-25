import * as actionTypes from "../constants/auth";
import { addNewUser, getUserData } from "./user";
import { toast } from "react-toastify";
import { authApi } from "../../utils/api/auth";

export const currentSignupEmail = (email) => ({
  type: actionTypes.CURRENT_SIGNUP_EMAIL,
  payload: email,
});

export const setIsAuth = (bool) => ({
  type: actionTypes.SET_IS_AUTH,
  payload: bool,
});

export const signup = (postData, history) => (dispatch) => {
  authApi
    .signup(postData)
    .then((res) => {
      dispatch(addNewUser(res.data, postData));
    })
    .then(() => {
      dispatch(currentSignupEmail(postData.email));
      toast.success("You have successfully signed up");
      history.push("/signin");
    })
    .catch((err) => {
      if (err.response.status === 400) {
        toast.error("Email address already exists");
      } else {
        toast.error(err.message);
      }
    });
};

export const signin = (postData) => (dispatch) => {
  authApi
    .signin(postData)
    .then((res) => {
      localStorage.setItem("tokenChatv", res.data.idToken);
      localStorage.setItem("uidChatv", res.data.localId);
      dispatch(getUserData(res.data.localId));
      dispatch(setIsAuth(true));
    })
    .catch(() => {
      toast.error("Incorrect email or password");
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("tokenChatv");
  localStorage.removeItem("uidChatv");
  dispatch(setIsAuth(false));
};
