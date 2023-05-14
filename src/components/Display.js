import React from "react";
import mydata from "../components/data";

function Display() {
  const myarr = mydata.classifields;

  return (
    <>
      <div>categoriessssss</div>
      <div>
        <ul>
          <li>ad one</li>
          <li>ad two</li>
          <li>ad three</li>
        </ul>
      </div>
      <div>Date modified</div>
    </>
  );
}

export default Display;
