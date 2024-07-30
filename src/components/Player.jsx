import { useState } from "react";

export default function Player() {
  const [userName, setUserName] = useState("");
  const [saveName, setSaveName] = useState(false);

  function handleUserNameChange(event) {
    //to avoid auto name change
    setSaveName(false);
    setUserName(event.target.value);
  }

  function handleClick() {
    setSaveName(true);
  }

  return (
    <section id="player">
      <h2>Welcome {saveName ? userName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleUserNameChange} value={userName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
