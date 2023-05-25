import React from "react";
import "./Tiers.css";

export default function Tiers(props) {
  let chosen = Math.floor(Math.random() * props.tier.length);
  // console.log(props);
  // console.log(chosen);
  let mods = props.tier.map((m, idx) =>
    idx === chosen ? (
      <div className="chosen">
        <div className="hex"></div>
        <img
          src={m.icon}
          alt={m.name}
          title={`Name: ${m.name} \nEffect: ${m.effect}`}
          // style={{ backgroundColor: "#0006ff" }}
        />
      </div>
    ) : (
      <div className="notChosen">
        <div className="hex"></div>
        <img
          src={m.icon}
          alt={m.name}
          title={`Name: ${m.name} \nEffect: ${m.effect}`}
          // style={{ backgroundColor: "#0066cc" }}
        />
      </div>
    )
  );

  return <div className="mod">{mods}</div>;
}
