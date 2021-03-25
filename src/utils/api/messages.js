import axios from "../../axios";

export const messagesApi = {
  createMessageRoom: (id) => {
    return axios.patch(`messages/${id}.json`, {
      id: id,
    });
  },
  getMessages: (id) => axios.get(`messages/${id}.json`),
  addMessage: (postData, chatId) => {
    return axios.post(`messages/${chatId}.json`, {
      ...postData,
      createdAt: new Date(),
    });
  },
};
