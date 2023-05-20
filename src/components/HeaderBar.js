import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../css/style.css";

/*This is the HeaderBar component*/

function HeaderBar({ title }) {
  /*=====================================================*/
  /* Makes the home button only unvisible in the main page */
  /*=====================================================*/
  useEffect(() => {
    const btn = document.getElementById("home-btn");

    if (title === "Home") {
      btn.style.display = "none";
    }
  }, [title]);

  /*=====================================================================================*/
  /* Sets the HeaderBar title according to the corresponding page (eg: Student / Teacher)*/
  /*=====================================================================================*/

  return (
    <div className="HeaderBar">
      <div className="titleDiv" id="header-bar-title-div">
        {title}
      </div>
      <div className="buttonDiv">
        <Link to="/">
          <button className="btn header-bar-btn" id="home-btn">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
export default HeaderBar;
