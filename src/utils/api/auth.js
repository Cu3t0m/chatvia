import axios from "axios";

export const authApi = {
  signup: (postData) => {
    return axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAs_X27yULe2rhXim_3Hn-2yRimdnaIrNg",
      postData
    );
  },
  signin: (postData) => {
    return axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAs_X27yULe2rhXim_3Hn-2yRimdnaIrNg",
      postData
    );
  },
};
