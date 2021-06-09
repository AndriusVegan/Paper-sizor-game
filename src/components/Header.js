import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import {
  selectUserName,
  setSignOutState,
  selectUserPhoto,
} from "../slices/userSlice";
import "./Header.css";

const Header = () => {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const signOut = () => {
    if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };
  return (
    <div className="header">
      <div className="userDetails">
        <img src={userPhoto} alt="user Photo" />
        <h2>Welcome {userName}</h2>
      </div>
      <div className="signOut" onClick={signOut}>
        <h2>Sign out</h2>
      </div>
    </div>
  );
};

export default Header;
