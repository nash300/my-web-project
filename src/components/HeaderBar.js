import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

function HeaderBar() {
  return (
    <div className="HeaderBar">
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
export default HeaderBar;
