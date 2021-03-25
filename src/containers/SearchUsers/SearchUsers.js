import React, { useState } from "react";
import Modal from "antd/lib/modal";
import TabSearch from "../../components/TabSearch/TabSearch";
import ChatItem from "../../components/Chats/ChatItem/ChatItem";
import { connect } from "react-redux";
import { createChat } from "../../store/actions/chats";
import { getUsers } from "../../store/actions/users";

const SearchUsers = ({ users, findUsers, createChat, currentUser }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const searchValueHandler = (e) => {
    const formatValue =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setSearchValue(e.target.value);
    findUsers(formatValue);
  };

  return (
    <>
      <span onClick={showModal} className="new-dialogs">
        <i className="ri-chat-new-line"></i>
      </span>
      <Modal
        title="Find users"
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleCancel}
        footer={null}
        mask={false}
        className="search-user-modal"
      >
        <TabSearch
          placeholder="Enter user name"
          searchValueHandler={searchValueHandler}
          searchValue={searchValue}
        />
        <div className="search-user-list">
          {users && users.length > 0 ? (
            users.map((user) => (
              <ChatItem
                key={user.uid}
                isSearching={true}
                createChat={createChat}
                currentUser={currentUser}
                handleCancel={handleCancel}
                {...user}
              />
            ))
          ) : users && searchValue === "" ? null : (
            <p className="empty-note">No users found</p>
          )}
        </div>
      </Modal>
    </>
  );
};

export const mapStateToProps = (state) => {
  return {
    users: state.users.usersList,
    currentUser: state.user.userData,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    findUsers: (query) => dispatch(getUsers(query)),
    createChat: (partnerUid, partnerName, currentUser) =>
      dispatch(createChat(partnerUid, partnerName, currentUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);
