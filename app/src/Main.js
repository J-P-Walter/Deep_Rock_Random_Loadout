import React, { useEffect } from "react";
import "./Main.css";
import Dwarf from "./components/Dwarf";

export default function Main() {
  const [dwarf, setDwarf] = React.useState([
    "driller",
    "gunner",
    "engineer",
    "scout",
  ]);

  const [total, setTotal] = React.useState(0);

  const [currDwarf, setCurrDwarf] = React.useState([]);

  const getTotal = async () => {
    const res = await fetch("http://localhost:5050/total");
    let data = await res.json();
    setTotal(data[0].total);
  };

  useEffect(() => {
    try {
      getTotal();
    } catch {
      return;
    }
  }, []);

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

    fetch("http://localhost:5050/add");
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
        Total loadouts created: {total}
      </div>
      <div>{currDwarf.length > 0 && <Dwarf dwarfInfo={currDwarf} />}</div>
      <div className="footer">
        <p className="feedback">
          Have feedback? Send me an email at <i>j.p.walter@outlook.com</i>{" "}
          &emsp; Feeling generous? Buy me a coffee! Venmo: <i>@JpWeim</i>
        </p>
      </div>
    </div>
  );
}
