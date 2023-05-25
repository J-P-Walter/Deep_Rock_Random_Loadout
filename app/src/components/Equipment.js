import React from "react";
import Tiers from "./Tiers";
import "./Equipment.css";
export default function Equipment(props) {
  //   console.log(props.data);
  let tiers = null;
  if (props.data.modifications !== undefined) {
    tiers = props.data.modifications.map((t) => <Tiers tier={t} />);
  }

  return (
    <div className="equipmentBlock">
      <div className="equipmentHeader">
        {props.data.name}
        <img src={props.data.icon} alt="icon" />
      </div>
      {tiers ? <div className="tier">{tiers}</div> : null}
    </div>
  );
}
