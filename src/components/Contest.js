import React from "react";
import { useSelector } from "react-redux";
import { selectUserHand } from "../slices/gameSlice";
import "./Contest.css";
const Contest = () => {
  const userHand = useSelector(selectUserHand);
  return (
    <div className="contest">
      <div className="contest__container">
        <div className="contest__handContainer">
          <h1>You Picked</h1>
          <img src={`/images/Hand${userHand}.png`} alt="hands" />
        </div>
        <div className="contest__handContainer">
          <h1>House picked</h1>
        </div>
      </div>
    </div>
  );
};

export default Contest;
