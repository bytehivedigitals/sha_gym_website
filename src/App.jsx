import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/home";
import Loader from "./components/Loader/Loader";
import "./index.css";
import "aos/dist/aos.css";

function App() {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  useEffect(() => {
    // If mobile, immediately skip the loader
    if (window.innerWidth < 768) {
      setIsVideoEnded(true);
    }
  }, []);

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
