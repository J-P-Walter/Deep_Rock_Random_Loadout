import React from "react";
import Tiers from "./Tiers";
import "./Equipment.css";
export default function Equipment(props) {
  //   console.log(props.data);
  let tiers = null;
  let frame = null;
  let ocIcon = null;
  let overclock = null;

  if (props.data.modifications !== undefined) {
    tiers = props.data.modifications.map((t) => <Tiers tier={t} />);
  }

  if (props.data.overclocks) {
    let o = Math.floor(Math.random() * props.data.overclocks.length);
    let oc = props.data.overclocks[o];
    overclock = (
      <div className="overclock">
        <img src={oc.frame} alt="frame" className="frame"></img>
        <img
          src={oc.icon}
          alt="icon"
          title={`Name: ${oc.name} \nEffect: ${oc.effect}`}
          className="ocIcon"
        ></img>
      </div>
    );
  }

  return (
    <div className="equipmentBlock">
      <div className="equipmentHeader">
        {props.data.name}
        <img src={props.data.icon} alt="icon" />
      </div>
      {tiers ? <div className="tier">{tiers}</div> : null}
      {overclock}
    </div>
  );
}
