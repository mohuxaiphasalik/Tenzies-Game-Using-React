import React from "react";
export default function Die(props) {
  return (
    <h3
      onClick={() => props.hold(props.id)}
      className={props.isHeld ? "dice isHeld" : "dice"}
    >
      {props.value}
    </h3>
  );
}
