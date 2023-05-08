import React from "react";
import "./student.css";
import HeaderBar from "../components/HeaderBar";
import "../components/data";

function Student() {
  return (
    <>
      <div className="main-wrapper">
        <div className="wrapper-Banner">
          <HeaderBar />
          <div className="sub-wrapper">
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
        </div>
        <div className="display">
          <div>categories</div>
          <div>
            <ul>
              <li>ad one</li>
              <li>ad two</li>
              <li>ad three</li>
            </ul>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Student;
