import React from "react";
import { useSelector } from "react-redux";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

const Navbar = () => {
  const user = useSelector(state => state.userInfo.user);
  return (
    <div className="Navbar">
      <h1>Art Buddy!</h1>
      {user.username ? <LoggedIn /> : <LoggedOut />}
    </div>
  );
};

export default Navbar;