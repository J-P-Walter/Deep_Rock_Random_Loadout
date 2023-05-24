import React from "react";
import Equipment from "./Equipment";

export default React.memo(function Dwarf(props) {
  function getRandomWeapons() {
    let p = Math.floor(Math.random() * props.dwarfInfo[0].primary.length);
    let s = Math.floor(Math.random() * props.dwarfInfo[0].secondary.length);
    let t = Math.floor(Math.random() * props.dwarfInfo[0].throwables.length);
    return { p, s, t };
  }

  let { p, s, t } = getRandomWeapons();

  let otherEquipment = props.dwarfInfo[0].equipment.map((e) => (
    <li key={e.name}>
      <Equipment data={e} />
    </li>
  ));

  return (
    <div>
      <h1>{props.dwarfInfo[0].name}</h1>
      <img src={props.dwarfInfo[0].full_body} alt="test" />
      <ul>
        <li key="primary">
          <Equipment data={props.dwarfInfo[0].primary[p]} />
        </li>
        <li key="secondary">
          <Equipment data={props.dwarfInfo[0].secondary[s]} />
        </li>
        {otherEquipment}
        <li key="throwable">
          <Equipment data={props.dwarfInfo[0].throwables[t]} />
        </li>
      </ul>
    </div>
  );
});
