import { useState } from "react";
import HardMode from "./components/HardMode";
import EasyMode from "./components/EasyMode";

const App = () => {
  const [easyMode, setEasyMode] = useState(true);

  return (
    <div className="App">
      {easyMode ? (
        <EasyMode easyMode={easyMode} setEasyMode={setEasyMode} />
      ) : (
        <HardMode easyMode={easyMode} setEasyMode={setEasyMode} />
      )}
    </div>
  );
};

export default App;
