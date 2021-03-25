import { createSelector } from "reselect";

export const messages = (state) => state.messages.messages;

export const getUnreadMessagesCount = createSelector(
  [messages],
  (messages) => messages.filter((item) => item.isRead === false).length
);
