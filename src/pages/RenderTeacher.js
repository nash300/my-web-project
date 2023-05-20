import React from "react";
import Classified from "./../components/Classified";
import { TitleChanger } from "../scripts/generalScripts";

function RenderTeacher() {
  /* Changes the title in to Student*/
  TitleChanger("Teacher");
  return (
    <div className="teacher-display">
      {/* TO DO The data is fetched from "Super Base" in to this div */}
      <Classified /> <Classified /> <Classified /> <Classified />
      <Classified />
    </div>
  );
}

export default RenderTeacher;
