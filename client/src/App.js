import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/Heading/Heading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./fonts/Array-Regular.woff";
import "./fonts/pricedown_bl.ttf";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./components/Loader/Loader";
import GameJam from "./components/GameJam/GameJam";

function App() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (!isLoading) AOS.init();
  }, [isLoading]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="">
      {isLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gamejam" element={<GameJam />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
