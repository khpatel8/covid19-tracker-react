import React from "react";
import virus from "../assets/virus.png";

function Image() {
  function handleClick(event) {}

  return (
    <img
      id="logo"
      onClick={handleClick}
      src={virus}
      alt="virus-img"
      height="100%"
    />
  );
}
export default Image;
