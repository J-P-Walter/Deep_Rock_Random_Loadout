import React from "react";
import "./Main.css";
import Dwarf from "./components/Dwarf";

export default function Main() {
  const [dwarf, setDwarf] = React.useState([
    "driller",
    "gunner",
    "engineer",
    "scout",
  ]);

  const [currDwarf, setCurrDwarf] = React.useState([]);

  const updateState = (d) => {
    if (dwarf.includes(d)) {
      setDwarf(dwarf.filter((item) => item !== d));
    } else {
      setDwarf([...dwarf, d]);
    }
  };

  const getDwarfInfo = async () => {
    if (dwarf.length === 0) {
      return;
    }
    let idx = Math.floor(Math.random() * dwarf.length);

    const res = await fetch(`http://localhost:5050/${dwarf[idx]}`);
    const data = await res.json();
    setCurrDwarf(data);
  };

  return (
    <div className="page">
      <div className="header">
        <h1>
          <span>DEEP ROCK GALACTIC RANDOM LOADOUT</span>
        </h1>
        <div className="dwarfIcons">
          <img
            className={
              dwarf.includes("driller") ? "selected driller" : "unselected"
            }
            src="driller_icon.png"
            alt="diller_icon"
            onClick={() => updateState("driller")}
          />
          <img
            className={
              dwarf.includes("scout") ? "selected scout" : "unselected"
            }
            src="scout_icon.png"
            alt="scout_icon"
            onClick={() => updateState("scout")}
          />
          <img
            className={
              dwarf.includes("engineer") ? "selected engineer" : "unselected"
            }
            src="engineer_icon.png"
            alt="engineer_icon"
            onClick={() => updateState("engineer")}
          />
          <img
            className={
              dwarf.includes("gunner") ? "selected gunner" : "unselected"
            }
            src="gunner_icon.png"
            alt="gunner_icon"
            onClick={() => updateState("gunner")}
          />
        </div>
        <button
          onClick={getDwarfInfo}
          className="button-3"
          disabled={dwarf.length === 0}
        >
          Generate Loadout
        </button>
      </div>
      <div>{currDwarf.length > 0 && <Dwarf dwarfInfo={currDwarf} />}</div>
      <div className="footer">footer</div>
    </div>
  );
}

{
  /* <button class="button-3" role="button">Generate Loadout</button> */
}
