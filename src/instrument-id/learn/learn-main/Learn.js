import React from "react";
import { useNavigate } from "react-router-dom";

import './Learn.css';

import Icon from "../../../_components/icon/Icon";

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
      <header className="Learn-header">
        <p>To begin, choose an instrument family</p>
      </header>
      <section className="Learn-options">
        {options}
      </section>
    </main>
  );
};

export default Learn;