import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing";
import Level1 from "./pages/l1";
import Level2 from "./pages/l2";
import Level3 from "./pages/l3";
import Level4 from "./pages/l4";
import Level5 from "./pages/l5";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/level1" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} />
        <Route path="/level4" element={<Level4 />} />
        <Route path="/level5" element={<Level5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;