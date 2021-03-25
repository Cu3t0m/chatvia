import React from "react";
import Chats from "../../containers/Chats/Chats";
import MessagesContent from "../../containers/MessagesContent/MessagesContent";
import Sidebar from "../../containers/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="layout-wrapper d-lg-flex">
      <Sidebar />
      <div className="chat-leftsidebar mr-lg-1">
        <div className="tab-content">
          <Chats />
        </div>
      </div>

      <MessagesContent />
    </div>
  );
};

export default Home;
