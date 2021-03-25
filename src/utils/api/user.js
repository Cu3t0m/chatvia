import axios from "../../axios";

export const userApi = {
  newUser: (postData, info) => {
    return axios.put(`users/${postData.localId}.json`, {
      uid: postData.localId,
      name: info.username.charAt(0).toUpperCase() + info.username.slice(1),
      email: postData.email,
      isOnline: false,
    });
  },
  getUser: (uid) => axios.get(`users/${uid}.json`),
};
