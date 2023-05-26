import React from "react";
import "./Tiers.css";

export default function Tiers(props) {
  let chosen = Math.floor(Math.random() * props.tier.length);
  // console.log(props);
  // console.log(chosen);
  let mods = props.tier.map((m, idx) =>
    idx === chosen ? (
      <img
        src={m.icon}
        alt={m.name}
        title={`Name: ${m.name} \nEffect: ${m.effect}`}
        // style={{ backgroundColor: "#0006ff" }}
      />
    ) : (
      <img
        src={m.icon}
        alt={m.name}
        title={`Name: ${m.name} \nEffect: ${m.effect}`}
        // style={{ backgroundColor: "#0066cc" }}
      />
    )
  );

  return <div className="mod">{mods}</div>;
}
