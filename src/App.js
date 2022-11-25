import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fontsource/roboto-condensed";
import Header from "./Components/Header";
import MySwiper from "./Components/MySwiper";
import Timer from "./Components/Timer";
import Timer2 from "./Components/Timer2.0";
import Games from "./Components/Games";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import StickyFooter from "./Components/StickyFooter";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect, useMemo } from "react";
import { Zoom, Slide, Fade } from "react-awesome-reveal";
import SportGames from "./Components/SportGames";

// import Axios from "axios";

export const isMobileContext = React.createContext();

function App() {
  const regis = "https://m.caba.codere.bet.ar/deportes/#/RegistroARPage";
  const [flag, setFlag] = useState(isMobile);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    if (windowSize.width <= 768 || isMobile) setFlag(true);
    else setFlag(false);
    // console.log("isMobile");
  }, [windowSize]);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const memoSwiper = useMemo(() => {
    return (
      <MySwiper
        regis={regis}
        setShowTimer={setShowTimer}
        isMobile={isMobile}
        // setRegisButtonText={setRegisButtonText}
        // regisButtonText={regisButtonText}
      />
    );
  }, []);

  return (
    <div className="App">
      <isMobileContext.Provider value={flag}>
        <div id="first-section">
          <Header regis={regis} />
          {memoSwiper}
          {showTimer && new Date() <= new Date("2022-11-26T19:00:00Z") ? (
            <Timer2 />
          ) : (
            <></>
          )}
        </div>
        <SportGames />
        <Games />
      </isMobileContext.Provider>
      <Content />
      {flag ? <StickyFooter /> : null}
      <Footer />
    </div>
  );
}

export default App;
