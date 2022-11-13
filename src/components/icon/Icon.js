import React from "react";

const Icon = ({ title }) => {
  return (
    <div style={{ marginRight: "5px", display: "inline-block" }}>
      <i className={title}></i>
    </div>
  );
};

export default Icon;
