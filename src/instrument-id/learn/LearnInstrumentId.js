import { useNavigate } from "react-router-dom";

import './LearnInstrumentId.css';

import Icon from "_components/icon/Icon";
import WindowNavbar from "_components/window-nav/WindowNavbar";

import learnMenuOptions from "./learnMenuOptions";

const LearnInstrumentId = () => {
  const navigate = useNavigate();

  const options = learnMenuOptions.map(option => {
    const { name, url, icon } = option;
    const goToFamily = () => navigate(url);
    return <Icon key={name} onClick={goToFamily} icon={icon} text={name} size="200px" largeFont />;
  });

  return (<>
    <WindowNavbar page='INSTRUMENT ID: LEARN' />
    <div className="LearnInstrumentId">
      <header className="LearnInstrumentId-header">
        <p>To begin, choose an instrument family</p>
      </header>
      <section className="LearnInstrumentId-options">
        {options}
      </section>
    </div>
  </>);
};

export default LearnInstrumentId;