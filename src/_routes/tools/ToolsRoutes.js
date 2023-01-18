import { Route, Routes } from "react-router-dom";

import Window from "_components/window/Window";
import ScoreKeeper from "score-keeper/ScoreKeeper";
import TimeKeeper from "time-keeper/TimeKeeper";
import MoodMeter from "mood-meter/MoodMeter";

import urls from "_routes/routeUrls";

const ToolsRoutes = () => {
  return (
    <Routes>
      <Route
        path={urls.scoreKeeperUrl}
        element={
          <Window>
            <ScoreKeeper />
          </Window>
        }
      />
      <Route
        path={urls.timeKeeperUrl}
        element={
          <Window>
            <TimeKeeper />
          </Window>
        }
      />
      <Route
        path={urls.moodMeterUrl}
        element={
          <Window>
            <MoodMeter />
          </Window>
        }
      />
    </Routes>
  );
};

export default ToolsRoutes;
