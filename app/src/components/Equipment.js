import React from "react";
import Tiers from "./Tiers";
export default function Equipment(props) {
  //   console.log(props.data);
  let tiers = null;
  if (props.data.modifications !== undefined) {
    tiers = props.data.modifications.map((t) => <Tiers tier={t} />);
  }

  return (
    <div>
      {props.data.name}
      <img src={props.data.icon} alt="icon" />
      {tiers ? <div>{tiers}</div> : null}
    </div>
  );
}
