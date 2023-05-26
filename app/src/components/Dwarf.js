import React from "react";
import Equipment from "./Equipment";
import "./Dwarf.css";

export default React.memo(function Dwarf(props) {
  function getRandomWeapons() {
    let p = Math.floor(Math.random() * props.dwarfInfo[0].primary.length);
    let s = Math.floor(Math.random() * props.dwarfInfo[0].secondary.length);
    let t = Math.floor(Math.random() * props.dwarfInfo[0].throwables.length);
    return { p, s, t };
  }

  let { p, s, t } = getRandomWeapons();

  let otherEquipment = props.dwarfInfo[0].equipment.map((e) => (
    <div>
      <Equipment data={e} />
    </div>
  ));

  return (
    <div className="dwarfMain">
      <h1>{props.dwarfInfo[0].name}</h1>
      <img
        src={props.dwarfInfo[0].full_body}
        alt="portrait"
        className="portrait"
      ></img>
      <div className="equipment">
        <div>
          <Equipment data={props.dwarfInfo[0].primary[p]} />
        </div>
        <div>
          <Equipment data={props.dwarfInfo[0].secondary[s]} />
        </div>
        {otherEquipment}
        <div>
          <Equipment data={props.dwarfInfo[0].throwables[t]} />
        </div>
      </div>
    </div>
  );
});
