import React from "react";
import { useDispatch } from "react-redux";
import { signup } from "../_redux/actions/actions";

const LoggedOut = () => {
  const dispatch = useDispatch();

  const signupUser = (signupData) => {
    dispatch(signup(signupData));
  }
  
  const loginUser = (loginData) => {
    dispatch((loginData));
  }
  
  return (
    <div className="LoggedOut">
      <p>Hello logged out :)</p>
    </div>
  );
};

export default LoggedOut;