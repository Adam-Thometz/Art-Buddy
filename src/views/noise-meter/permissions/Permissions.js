import { useContext, useState, useEffect } from "react";
import { PopupContext } from "_context/PopupContext";

import { useDispatch } from "react-redux";
import { toggleRecording } from "_redux/noise-meter/noiseMeterReducer";

import "./Permissions.css";

import Button from "_components/button/Button";

const Permissions = () => {
  const [showPermissionError, setShowPermissionError] = useState(false);
  const { setCurrPopup } = useContext(PopupContext);
  const dispatch = useDispatch();

  const closePopup = () => setCurrPopup(null);

  useEffect(() => {
    async function getPermissions() {
      const { state } = await navigator.permissions.query({ name: "microphone" });
      setShowPermissionError(state === "denied")
    }
    getPermissions();
  }, []);

  const givePermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      dispatch(toggleRecording());
      setCurrPopup(null);
    } catch (e) {
      if (e.message.endsWith('denied')) setShowPermissionError(true);
    }
  }

  return (
    <div className='Permissions'>
      {showPermissionError
        ? <p>You blocked access to the microphone. Go to your browser's privacy settings to fix that.</p>
        : <>
          <p>The Noise Meter needs your permission to record noise.</p>
          <p>Click ALLOW to let us access your device's microphone.</p>
          <div className="Permissions-buttons">
            <Button small colorId={4} onClick={closePopup}>CANCEL</Button>
            <Button small colorId={0} onClick={givePermission}>ALLOW</Button>
          </div>
        </>
      }
    </div>
  );
}

export default Permissions;
