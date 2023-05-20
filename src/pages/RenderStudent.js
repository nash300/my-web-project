import React from "react";
import Classified from "../components/Classified";
import { TitleChanger } from "../scripts/generalScripts.js";

function RenderStudent() {
  /* Changes the title in to Student*/
  TitleChanger("Student");

  return (
    <div className="student-display">
      {/* TO DO The data is fetched from "Super Base" in to this div */}
      <Classified /> <Classified />
    </div>
  );
}

export default RenderStudent;
