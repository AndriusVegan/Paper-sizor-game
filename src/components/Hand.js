import React from "react";
import "./Hand.css";
import { useDispatch } from "react-redux";
import { selectUserHand, setUserHand } from "../slices/gameSlice";

const Hand = ({ value }) => {
  const dispatch = useDispatch();

  const pickHand = (e, value) => {
    dispatch(setUserHand(value));
  };

  console.log(selectUserHand(value), "go vegan");
  return (
    <div className="hand" onClick={(e) => pickHand(e, value)}>
      <img src={`/images/Hand${value}.png`} alt="HandUser" />
    </div>
  );
};

export default Hand;
