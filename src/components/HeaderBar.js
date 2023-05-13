import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../css/style.css";

function HeaderBar({ location }) {
  /*  Hiding the "Home button" in the "Home" page*/
  useEffect(() => {
    const btn = document.getElementById("btn");

    if (location === "Home") {
      {
        btn.style.display = "none";
      }
    }
  }, [location]);

  return (
    <>
      <div className="HeaderBar">
        <div className="titleDiv">{location}</div>
        <div className="buttonDiv">
          <Link to="/">
            <button id="btn">Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default HeaderBar;
