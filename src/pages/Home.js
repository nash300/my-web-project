//Essentials
import React from "react";
import { Link } from "react-router-dom";

//CSS
import "../css/home.css";

// Components
import HeaderBar from "./../components/HeaderBar";

function Home() {
  return (
    <>
      <div className="main-wrapper">
        <HeaderBar location={"Home"} />
        <div className="banner-wrapper">
          <div className="image-container">
            <img src="images/logo.jpg" alt="logo picture" />
          </div>
          <div className="form-container">
            <div className="button-container">
              <Link to="./Student">
                <button className="btn home-btn">
                  I am a student. Looking for a teacher
                </button>
              </Link>
              <Link to="./Teacher">
                <button className="btn home-btn">
                  I am a Teacher. Looking for a student
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
