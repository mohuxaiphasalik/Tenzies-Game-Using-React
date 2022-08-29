import React from "react";
export default function Die(props) {
  return (
    <h3 className={props.isHeld ? "dice isHeld" : "dice"}>{props.value}</h3>
  );
}
