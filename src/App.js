import './App.css';

import TooSmall from 'components/too-small/TooSmall';
import Navbar from 'components/navbar-settings/Navbar';
import ArtBuddyRoutes from 'routes/ArtBuddyRoutes';
import Popup from 'components/popup/Popup';

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