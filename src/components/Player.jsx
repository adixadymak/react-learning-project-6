import { useState, useRef } from "react";

export default function Player() {
  const playerNameRef = useRef();
  const [userName, setUserName] = useState(null);

  function handleClick() {
    setUserName(playerNameRef.current.value);
  }

  // for line 16 - Or this userName ? userName : "unknown entity"
  return (
    <section id="player">
      <h2>Welcome {userName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerNameRef} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
