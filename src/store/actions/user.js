import * as actionTypes from "../constants/user";
import { userApi } from "../../utils/api/user";
import { toast } from "react-toastify";

export const addNewUser = (postData, info) => (dispatch) => {
  userApi.newUser(postData, info).catch((err) => console.log(err));
};

export const getUserDataSuccess = (userData) => ({
  type: actionTypes.GET_USER_DATA,
  payload: userData,
});

export const getUserData = (uid) => (dispatch) => {
  userApi
    .getUser(uid)
    .then((res) => {
      dispatch(getUserDataSuccess(res.data));
    })
    .catch((err) => {
      toast.error(err.message);
      localStorage.removeItem("tokenChatv");
      localStorage.removeItem("uidChatv");
    });
};
