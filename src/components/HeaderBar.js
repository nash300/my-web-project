import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../css/style.css";

/*This is the HeaderBar component*/

function HeaderBar({ location }) {
  useEffect(() => {
    /*  Hiding the "Home button" in the "Home" page*/
    const btn = document.getElementById("home-btn");

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
            <button className="btn header-bar-btn" id="home-btn">
              Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default HeaderBar;
