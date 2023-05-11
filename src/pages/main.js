import React from "react";
import {} from "react-router-dom";
import "../css/main.css";

function Main() {
  return (
    <>
      <div className="container">
        <div className="banner-wrapper">
          <div className="image-container">
            <img src="images/logo.jpg" alt="logo picture" />
          </div>
          <div className="form-container">
            <div className="button-container">
              <a href="./Student">
                <button>I am a student. Looking for a teacher</button>
              </a>
              <a href="/Teacher">
                <button> I am a Teacher. Looking for a student</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
