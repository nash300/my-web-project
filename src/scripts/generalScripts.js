import { useState } from "react";

/* Change the title of the HeaderBar component as the user clicks on a button*/
function TitleChanger(title) {
  const newTitle = document.getElementById("header-bar-title-div");
  newTitle.innerHTML = title;
}

/* Hide and display form-container */
function ToggleFormContainer() {
  const mainForm = document.getElementById("form-container");
  const InfoCollector = document.getElementById("");

  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);
}

/*//////////////// exporting all of my custom functions//////////////*/
export { TitleChanger, ToggleFormContainer };
