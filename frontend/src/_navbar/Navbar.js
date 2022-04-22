import React from "react";
import { useNavigate } from "react-router-dom";

// import { useSelector } from "react-redux";

import './Navbar.css';

// import LoggedIn from "./LoggedIn";
// import LoggedOut from "./LoggedOut";

const Navbar = () => {
  const navigate = useNavigate()
  // const user = useSelector(state => state.userInfo.user);
  return (
    <div className="Navbar">
      <h1 className="Navbar-header" onClick={() => navigate('/')}>ARTBUDDY</h1>
      {/* {user.username ? <LoggedIn /> : <LoggedOut />} */}
    </div>
  );
};

export default Navbar;