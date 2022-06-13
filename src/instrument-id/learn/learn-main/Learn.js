import React from "react";
import { useNavigate } from "react-router-dom";

import './Learn.css';

import Icon from "../../../_components/icon/Icon";
import WindowNavbar from "../../../_components/window-nav/WindowNavbar";
import Help from "../../../_components/help/Help";

import learnMenuOptions from "./learnMenuOptions";

const Learn = () => {
  const navigate = useNavigate();

  const options = learnMenuOptions.map(option => (
    <Icon
      key={option.name}
      onClick={() => navigate(option.url)}
      icon={option.icon}
      text={option.name}
      size="200px"
      largeFont
    />
  ));

  return (
    <main className="Learn">
      <WindowNavbar page='INSTRUMENT ID: LEARN' cornerIcon={<Help />} />
      <div className="Learn-main">
        <header className="Learn-header">
          <p>To begin, choose an instrument family</p>
        </header>
        <section className="Learn-options">
          {options}
        </section>
      </div>
    </main>
  );
};

export default Learn;