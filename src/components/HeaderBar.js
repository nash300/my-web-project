import { useState } from "react";

function HeaderBar() {
  {
    /*Switch between Student and Teacher mode*/
  }
  const [LoggedInAs, setLoggedInAs] = useState("Study");

  function handleClick() {
    if (LoggedInAs === "Study") {
      setLoggedInAs("Teach");
    }
    if (LoggedInAs === "Teach") {
      setLoggedInAs("Study");
    }
  }

  return (
    <div className="HeaderBar">
      <span>Switch to:</span>
      <button onClick={handleClick}>{LoggedInAs}</button>
    </div>
  );
}
export default HeaderBar;
