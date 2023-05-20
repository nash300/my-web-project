import React from "react";

import "../css/style.css";

function InfoCollector() {
  return (
    <div className="main-wrapper">
      <div className="banner-wrapper">
        <div className="image-container">
          <img src="images/logo.jpg" alt="logo picture" />
        </div>
        <div className="form-container">
          <form>
            <span>choose a category:</span>
            <select className="drop-down-menu">
              <option value="All">All</option>
              <option value="Business studies">Business studies</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Science">Science</option>
            </select>
            <span>Write a description:</span>
            <textarea type="text" id="text-area"></textarea>
            <input
              className="btn form-btn"
              type="submit"
              value="Submit your announcement"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InfoCollector;
