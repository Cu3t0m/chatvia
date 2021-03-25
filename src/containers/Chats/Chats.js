import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ChatList from "../../components/Chats/ChatList/ChatList";
import SearchUsers from "../SearchUsers/SearchUsers";
import TabSearch from "../../components/TabSearch/TabSearch";
import {
  getChatItemsSuccess,
  readMessages,
  setCurrentChatId,
  setLoading,
} from "../../store/actions/chats";
import { listnerChatsOn } from "../../utils/firebase/firebase";

const Chats = ({
  chats,
  updateChats,
  setCurrentChatId,
  setLoading,
  loading,
  userId,
  readMessages,
  currentChatId,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredChats = chats.filter(
    (item) =>
      (item.authorName.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 &&
        userId !== item.author) ||
      (item.partnerName.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 &&
        userId !== item.partner)
  );

  const searchValueHandler = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (userId) {
      listnerChatsOn(userId).on("value", (snapshot) => {
        const fetchedSnapshot = [];

        for (let key in snapshot.val()) {
          fetchedSnapshot.push({
            ...snapshot.val()[key],
            id: key,
          });
        }
        updateChats(fetchedSnapshot);
      });
    }

    return () => {
      listnerChatsOn(userId).off();
      if (currentChatId && userId) {
        readMessages(userId, currentChatId);
      }
    };
  }, [updateChats, setLoading, userId, readMessages, currentChatId]);

  return (
    <>
      <div className="tab-pane fade active show">
        <div className="px-4 pt-4">
          <div className="flex-content">
            <h4 className="mb-4">Chats</h4>
            <SearchUsers />
          </div>
          <TabSearch
            placeholder="Search your chats"
            searchValue={searchValue}
            searchValueHandler={searchValueHandler}
          />
        </div>

        <div className="px-2">
          <ChatList
            chats={filteredChats}
            setCurrentChatId={setCurrentChatId}
            loading={loading}
            currentUser={userId}
            readMessages={readMessages}
            currentChatId={currentChatId}
          />
        </div>
      </div>
    </>
  );
};

export const mapStateToProps = (state) => {
  return {
    chats: state.chats.chats,
    loading: state.chats.loading,
    userId: state.user.userId,
    currentChatId: state.chats.currentChatId,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    updateChats: (items) => dispatch(getChatItemsSuccess(items)),
    setCurrentChatId: (id) => dispatch(setCurrentChatId(id)),
    setLoading: (bool) => dispatch(setLoading(bool)),
    readMessages: (authorId, chatId) =>
      dispatch(readMessages(authorId, chatId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
