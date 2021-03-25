import React from "react";

const NameIcon = ({ name }) => {
  const nameTrim = name.substring(0, 1);

  return (
    <div className="avatar-xs">
      <span className="avatar-title rounded-circle bg-soft-primary text-primary">
        {nameTrim}
      </span>
    </div>
  );
};

export default NameIcon;
