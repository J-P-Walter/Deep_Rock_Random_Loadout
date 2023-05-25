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
    <div
      className="dwarfMain"
      style={{
        backgroundImage: `url(${props.dwarfInfo[0].full_body}`,
      }}
    >
      <h1>{props.dwarfInfo[0].name}</h1>
      {/* <img src={props.dwarfInfo[0].full_body} alt="test" /> */}
      <div className="equipment">
        <div className="side">
          <div>
            <Equipment data={props.dwarfInfo[0].primary[p]} />
          </div>
          <div>
            <Equipment data={props.dwarfInfo[0].secondary[s]} />
          </div>
          <div>
            <Equipment data={props.dwarfInfo[0].throwables[t]} />
          </div>
        </div>
        <div className="side">{otherEquipment}</div>
      </div>
    </div>
  );
});
