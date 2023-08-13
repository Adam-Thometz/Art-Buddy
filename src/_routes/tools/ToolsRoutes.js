import { Route, Routes } from "react-router-dom";

import Window from "_components/window/Window";
import ScoreKeeper from "views/score-keeper/ScoreKeeper";
import TimeKeeper from "views/time-keeper/TimeKeeper";
import MoodMeter from "views/mood-meter/MoodMeter";
import NoiseMeter from "views/noise-meter/NoiseMeter";

import urls from "_routes/routeUrls";

const ToolsRoutes = () => {
  return (
    <Routes>
      <Route path={urls.scoreKeeperUrl} element={<Window><ScoreKeeper /></Window>} />
      <Route path={urls.timeKeeperUrl} element={<Window><TimeKeeper /></Window>}/>
      <Route path={urls.moodMeterUrl} element={<Window><MoodMeter /></Window>}/>
      <Route path={urls.noiseMeterUrl} element={<Window><NoiseMeter /></Window>}/>
    </Routes>
  );
};

export default ToolsRoutes;
