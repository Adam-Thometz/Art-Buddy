import './App.css';

import TooSmall from '_components/too-small/TooSmall';
import Navbar from './navbar-settings/Navbar';
import ArtBuddyRoutes from '_routes/ArtBuddyRoutes';
import Popup from '_components/popup/Popup';

const App = () => {
  const screenIsTooSmall = window.innerWidth < 1000;
  return (
    <div className="App">
      {screenIsTooSmall ? <TooSmall /> : <>
        <Navbar />
        <Popup />
        <ArtBuddyRoutes />
      </>}
    </div>
  );
};

export default App;