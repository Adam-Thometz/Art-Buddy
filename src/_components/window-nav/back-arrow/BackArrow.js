import { useNavigate } from "react-router-dom";

import "./BackArrow.css";

import arrow from "./arrow.png";

const BackArrow = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <button className="BackArrow" onClick={goBack}>
      <img className="BackArrow-img" src={arrow} alt="" />
      <span className="BackArrow-text">BACK</span>
    </button>
  );
};

export default BackArrow;
