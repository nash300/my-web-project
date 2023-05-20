//Essentials
import React from "react";
import { useState } from "react";

//CSS
import "../css/home.css";

// JavaScript
import "../scripts/generalScripts";

// Importing custom components
import RenderStudent from "./RenderStudent";
import RenderTeacher from "./RenderTeacher";

/*=========================================*/
function Home() {
  /* =============   Tracks user input from button click   ===============*/
  const [isStudentClicked, setIsStudentClicked] = useState(false);
  const [isTeacherClicked, setIsTeacherClicked] = useState(false);

  const handleStudentButtonClick = () => {
    setIsStudentClicked(true);
    setIsTeacherClicked(false);
  };

  const handleTeacherButtonClick = () => {
    setIsTeacherClicked(true);
    setIsStudentClicked(false);
  };
  /*=======================================================================*/

  return (
    <>
      <div className="main-wrapper">
        <div className="banner-wrapper">
          <div className="image-container">
            <img src="images/logo.jpg" alt="This is the logo of this site" />
          </div>
          <div className="form-container">
            <div className="button-container">
              <button
                className="btn home-btn"
                onClick={handleStudentButtonClick}
              >
                I AM A STUDENT... Looking for a teacher
              </button>
              <button
                className="btn home-btn"
                onClick={handleTeacherButtonClick}
              >
                I AM A TEACHER... Looking for a student
              </button>
            </div>
          </div>
        </div>
      </div>
      {(() => {
        if (isStudentClicked) {
          return <RenderStudent />;
        } else if (isTeacherClicked) {
          return <RenderTeacher />;
        }
      })()}
    </>
  );
}

export default Home;
