import React from "react";

export default function Tiers(props) {
  let chosen = Math.floor(Math.random() * props.tier.length);
  // console.log(props);
  // console.log(chosen);
  let mods = props.tier.map((m, idx) =>
    idx === chosen ? <b>{m.name}</b> : <p>{m.name}</p>
  );

  return (
    <div style={{ color: "blue", borderColor: "red", borderStyle: "solid" }}>
      {mods}
    </div>
  );
}
