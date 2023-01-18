import { useContext, useMemo } from "react";
import useRoster from "_hooks/roster/useRoster";
import { PopupContext } from "_context/PopupContext";

import { useSelector, useDispatch } from "react-redux";
import { setRoster } from "_redux/settings/settingsActions";

import "./Rosters.css";

import NewRoster from "./new-roster/NewRoster";
import AddIcon from "_components/icon/add-icon/AddIcon";
import Dropdown from "_components/dropdown/Dropdown";

const Rosters = () => {
  const { roster } = useSelector((state) => state.settings);
  const [rosters] = useRoster();
  const { setCurrPopup } = useContext(PopupContext);
  const dispatch = useDispatch();

  const rosterSelection = useMemo(() => {
    const result = {};
    for (let rosterId in rosters) {
      result[rosterId] = rosters[rosterId].name;
    }
    return result;
  }, [rosters]);

  const handleSetRoster = (e) => {
    const roster = rosters[e.target.id];
    if (!roster) return;
    dispatch(setRoster(roster));
  };

  const openNewRosterMenu = () =>
    setCurrPopup({ title: "NEW ROSTER", popup: <NewRoster /> });

  const dropdownDisplay =
    roster.name === "Demo Class" ? "SELECT ROSTER" : roster.name;

  return (
    <div className="Rosters">
      <AddIcon text="ADD" size="42px" onClick={openNewRosterMenu} />
      {Object.keys(rosters).length ? (
        <Dropdown
          labelText={dropdownDisplay}
          onClick={handleSetRoster}
          options={rosterSelection}
        />
      ) : null}
    </div>
  );
};

export default Rosters;
