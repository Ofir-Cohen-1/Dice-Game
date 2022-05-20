import React from "react";
import "./Player.css";

export default function Player(props) {
  const getClasses = () => {
    let classes = props.className;
    classes += props.isTurn ? " active" : "";
    console.log(classes);
    return classes;
};
  return (
    <div className={`player ${getClasses()}`}>
      <div>
        <h1>{props.className}</h1>
        {props.isTurn && <span className="active-dot"></span>}
      </div>
      <div className="global-score">{props.globalScore}</div>
      <div className="current-score">
        <span>Current</span> {props.currentScore}
      </div>
    </div>
  );
}
