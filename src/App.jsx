import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import Loader from "./components//Loader/Loader";
import "./index.css";

function App() {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  return (
    <div className="relative">
      {!isVideoEnded && <Loader onLoaded={() => setIsVideoEnded(true)} />}

      {isVideoEnded && (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
