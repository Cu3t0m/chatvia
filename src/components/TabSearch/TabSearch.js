import React from "react";

const TabSearch = ({ placeholder, searchValueHandler, searchValue }) => {
  return (
    <div className="search-box chat-search-box">
      <div className="input-group mb-3 bg-light  input-group-lg rounded-lg">
        <div className="input-group-prepend">
          <button
            className="btn btn-link text-muted pr-1 text-decoration-none"
            type="button"
          >
            <i className="ri-search-line search-icon font-size-18"></i>
          </button>
        </div>
        <input
          type="text"
          className="form-control bg-light"
          placeholder={placeholder}
          onChange={searchValueHandler}
          value={searchValue}
        />
      </div>
    </div>
  );
};

export default TabSearch;
