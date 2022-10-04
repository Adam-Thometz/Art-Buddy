import React from "react";
import { useNavigate } from "react-router-dom";

import './Learn.css';

import Icon from "_components/icon/Icon";
import WindowNavbar from "_components/window-nav/WindowNavbar";

import learnMenuOptions from "_data/instrument-id/learnMenuOptions";

const Learn = () => {
  const navigate = useNavigate();

  const options = learnMenuOptions.map(option => {
    const { name, url, icon } = option;
    const goToFamily = () => navigate(url);
    return <Icon key={name} onClick={goToFamily} icon={icon} text={name} size="200px" largeFont />;
  });

  return (
    <main className="Learn">
      <WindowNavbar page='INSTRUMENT ID: LEARN' />
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