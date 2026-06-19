import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameProvider } from "./context/GameContext";

import Intro from "./pages/Intro";
import MissionSelect from "./pages/MissionSelect";
import Level1 from "./pages/l1";
import Level2 from "./pages/l2";
import Level3 from "./pages/l3";
import Level4 from "./pages/l4";
import Level5 from "./pages/l5";

function App() {
  return (
    <div
      style={{
        color: "white",
        background: "black",
        minHeight: "100vh",
        fontSize: "50px",
      }}
    >
      TEST WORKING
    </div>
  );
}

export default App;