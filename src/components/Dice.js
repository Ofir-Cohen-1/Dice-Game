import React from "react";
import "./Dice.css";
import dice1 from "./images/dice-1.png";
import dice2 from "./images/dice-2.png";
import dice3 from "./images/dice-3.png";
import dice4 from "./images/dice-4.png";
import dice5 from "./images/dice-5.png";
import dice6 from "./images/dice-6.png";

export default function Dice(props) {
  const dice = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6,
  };
  const createDice = () => {
    return (
      <div className="dice-container">
        <figure
          style={{
            background: `url(${
              dice[props.dice[0]]
            })no-repeat center center/cover`,
          }}
        ></figure>
        <figure
          style={{
            background: `url(${
              dice[props.dice[1]]
            })no-repeat center center/cover`,
          }}
        ></figure>
      </div>
    );
  };

  return <div>{createDice()}</div>;
}
