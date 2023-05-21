import React from "react";

//CSS
import "../css/style.css";

//Components
import HeaderBar from "../components/HeaderBar";
import Classified from "../components/Classified";

function Teacher() {
  /* TO DO*/

  return (
    <>
      <div className="main-wrapper">
        <HeaderBar location={"Teacher"} />
        <div className="banner-wrapper">
          <div className="image-container">
            <img src="images/logo.jpg" alt="logo picture" />
          </div>
          <div className="form-container">
            <form>
              <span className="form-sub-hedding">choose a category:</span>
              <select className="drop-down-menu">
                <option value="All">All</option>
                <option value="Business studies">Business studies</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Science">Science</option>
              </select>
              <span className="form-sub-hedding">Write a description:</span>
              <textarea type="text" id="text-area"></textarea>

             <label for="email-input" className="form-sub-hedding">Enter your email:</label>
              <input type="email" id="email-input"></input>

              <input
                className="btn form-btn"
                type="submit"
                value="Submit your announcement"
              ></input>
            </form>
          </div>
        </div>
        <div className="display">
          {/* The data is fetched from "Super Base" in to this div */}
          <Classified /> <Classified /> <Classified /> <Classified />
          <Classified />
        </div>
      </div>
      ;
    </>
  );
}

export default Teacher;
