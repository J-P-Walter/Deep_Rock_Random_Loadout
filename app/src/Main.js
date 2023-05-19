import React from "react";
import "./Main.css";

export default function Main() {
  const [dwarf, setDwarf] = React.useState([
    "driller",
    "gunner",
    "engineer",
    "scout",
  ]);

  const updateState = (d) => {
    if (dwarf.includes(d)) {
      setDwarf(dwarf.filter((item) => item !== d));
    } else {
      setDwarf([...dwarf, d]);
    }
  };

  return (
    <div>
      <img
        className={dwarf.includes("driller") ? "selected" : "unselected"}
        src="driller_icon.png"
        alt="diller_icon"
        onClick={() => updateState("driller")}
      />
      <img
        className={dwarf.includes("scout") ? "selected" : "unselected"}
        src="scout_icon.png"
        alt="scout_icon"
        onClick={() => updateState("scout")}
      />
      <img
        className={dwarf.includes("engineer") ? "selected" : "unselected"}
        src="engineer_icon.png"
        alt="engineer_icon"
        onClick={() => updateState("engineer")}
      />
      <img
        className={dwarf.includes("gunner") ? "selected" : "unselected"}
        src="gunner_icon.png"
        alt="gunner_icon"
        onClick={() => updateState("gunner")}
      />
      <button onClick={() => console.log(dwarf)}>Generate Loadout</button>
    </div>
  );
}
