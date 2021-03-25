import React, { useState } from "react";
import { Picker } from "emoji-mart";

const MessageSmiles = ({ setEmoji, msg }) => {
  const [showEmojiPicker, setEmojiPicker] = useState(false);

  const toggleEmojiPicker = () => {
    setEmojiPicker(!showEmojiPicker);
  };

  const hideEmojiPicker = () => {
    setEmojiPicker(false);
  };

  const addEmoji = (emoji) => {
    setEmoji(msg + emoji.native);
    hideEmojiPicker();
  };

  return (
    <div className="list-inline-item">
      <button
        type="button"
        className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect"
        data-toggle="tooltip"
        data-placement="top"
        title=""
        data-original-title="Emoji"
        onClick={toggleEmojiPicker}
      >
        <i className="ri-emotion-happy-line"></i>
      </button>
      {showEmojiPicker && (
        <Picker
          style={{
            position: "absolute",
            bottom: "50px",
            right: "0px",
            zIndex: 2,
          }}
          color="#7269ef"
          set="apple"
          title="Pick your emoji…"
          showPreview={false}
          showSkinTones={false}
          onSelect={(emoji) => addEmoji(emoji)}
        />
      )}
    </div>
  );
};

export default MessageSmiles;
