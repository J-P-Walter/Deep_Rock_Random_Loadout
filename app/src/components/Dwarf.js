import React from "react";
import Equipment from "./Equipment";

export default function Dwarf(props) {
  // console.log(props.dwarfInfo[0].data);

  let { p, s, t } = getRandomWeapons();

  let otherEquipment = props.dwarfInfo[0].data.equipment.map((e) => (
    <li key={e.name}>
      <Equipment data={e} />
    </li>
  ));

  return (
    <div>
      <h1>{props.dwarfInfo[0].data.name}</h1>
      <img src={props.dwarfInfo[0].data.full_body} alt="test" />
      <ul>
        <li key="a">
          <Equipment data={props.dwarfInfo[0].data.primary[p]} />
        </li>
        <li key="b">
          <Equipment data={props.dwarfInfo[0].data.secondary[s]} />
        </li>
        <li key="c">
          <Equipment data={props.dwarfInfo[0].data.throwables[t]} />
        </li>
        {otherEquipment}
      </ul>
    </div>
  );

  function getRandomWeapons() {
    let p = Math.floor(Math.random() * props.dwarfInfo[0].data.primary.length);
    let s = Math.floor(
      Math.random() * props.dwarfInfo[0].data.secondary.length
    );
    let t = Math.floor(
      Math.random() * props.dwarfInfo[0].data.throwables.length
    );
    return { p, s, t };
  }
}
