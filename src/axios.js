import axios from "axios";

const instance = axios.create({
  baseURL: "https://chatvia-c984b-default-rtdb.firebaseio.com/",
});

instance.defaults.headers.common["Authorization"] = localStorage.getItem(
  "tokenChatv"
);

export default instance;
