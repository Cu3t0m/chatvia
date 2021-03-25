import { toast } from "react-toastify";
import { usersApi } from "../../utils/api/users";
import { objectToArr } from "../../utils/helpers/objectToArray";
import * as actionTypes from "../constants/users";

export const getUsersSuccess = (users) => {
  return {
    type: actionTypes.GET_SEARCH_USERS,
    payload: users,
  };
};

export const getUsers = (query) => (dispatch) => {
  usersApi
    .findUser(query)
    .then((res) => {
      const fetchedUsers = [];
      objectToArr(fetchedUsers, res.data);
      dispatch(getUsersSuccess(fetchedUsers));
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
