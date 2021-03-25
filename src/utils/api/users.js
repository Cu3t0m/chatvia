import axios from "../../axios";

export const usersApi = {
  findUser: (query) =>
    axios.get(
      `users.json?orderBy="name"&limitToFirst=20&startAt="${query}"&endAt="${query}\uf8ff"`
    ),
};
