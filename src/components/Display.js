import React from "react";
import Classified from "../components/Classified";

function Display() {
  return (
    <div className="display">
      {/* The data is fetched from "Super Base" in to this div */}
      <Classified /> <Classified /> <Classified /> <Classified />
      <Classified />
    </div>
  );
}

export default Display;
