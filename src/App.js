import React from "react";
import "./css/student.css";
import "./css/app.css";

function App() {
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

export default App;
