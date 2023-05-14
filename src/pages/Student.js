import React from "react";

//CSS
import "../css/style.css";

// Components
import HeaderBar from "../components/HeaderBar";
import Classified from "../components/Classified";

function Student() {
  return (
    <>
      <div className="main-wrapper">
        <HeaderBar location={"Student"} />
        <div className="banner-wrapper">
          <div className="image-container">
            <img src="images/logo.jpg" alt="logo picture" />
          </div>
          <div className="form-container">
            <form>
              <span>choose a category:</span>
              <select>
                <option value="All">All</option>
                <option value="Business studies">Business studies</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Science">Science</option>
              </select>
              <br />
              <br />
              <span>Write a description:</span>
              <textarea type="text" id="text-area"></textarea>
              <br />
              <br />
              <br />

              <input type="submit" value="Submit your announcement"></input>
            </form>
          </div>
        </div>
        <div className="display">
          <Classified /> <Classified /> <Classified /> <Classified />{" "}
          <Classified />
        </div>
      </div>
      ;
    </>
  );
}

export default Student;
