import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectComputerHand,
  selectUserHand,
  setComputerHand,
} from "../slices/gameSlice";
import "./Contest.css";

const Contest = () => {
  const userHand = useSelector(selectUserHand);
  const computerHand = useSelector(selectComputerHand);
  const dispatch = useDispatch();
  const hands = ["Rock", "Paper", "Scissors"];
  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    let cpHand = hands[Math.floor(Math.random() * hands.length)];

    setTimeOut(function () {
      dispatch(setComputerHand(cpHand));
    }, 500);
    setTimeOut(function () {
      setTimeOut(true);
    }, 1000);
  }, [userHand]);

  return (
    <div className="contest">
      <div className="contest__container">
        <div className="contest__handContainer">
          <h1>You Picked</h1>
          <img src={`/images/Hand${userHand}.png`} alt="user hand" />
        </div>
        <div className="contest__handContainer">
          <h1>House picked</h1>
          <img
            src={`/images/Hand${!computerHand ? "Blank" : computerHand}.png`}
            alt="computer hand"
          />
        </div>
      </div>
    </div>
  );
};

export default Contest;
