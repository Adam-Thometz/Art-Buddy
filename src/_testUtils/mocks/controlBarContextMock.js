import { useState } from "react";
import ControlBarContext from "_utils/free-paint/ControlBarContext"

const ControlBarContextMock = ({ children }) => {
  const [shownOptions, handleShownOptions] = useState(null);
  return (
    <ControlBarContext.Provider value={{ shownOptions, handleShownOptions }}>
      {children}
    </ControlBarContext.Provider>
  );
};

export default ControlBarContextMock;