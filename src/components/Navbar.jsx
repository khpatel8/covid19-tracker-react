import React from "react";
import Image from "./Image";

function Navbar() {
  return (
    <nav>
      <div>
        <a href="/">
          <Image />
        </a>
      </div>
      <div className="nav-div">
        <h3>
          <span>Covid </span>
        </h3>
        <h5>Tracker</h5>
      </div>
    </nav>
  );
}

export default Navbar;
