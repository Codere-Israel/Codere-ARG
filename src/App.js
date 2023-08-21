import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fontsource/roboto-condensed";
import { Route, Routes, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import MySwiper from "./Components/MySwiper";
import Footer from "./Components/Footer";
import StickyFooter from "./Components/StickyFooter";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import Routing from "./routes/Routing";

// import Axios from "axios";

export const regis = "https://m.caba.codere.bet.ar/deportes/#/RegistroARPage";
export const isMobileContext = React.createContext();
function App() {
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

  return (
    <div className="App">
      <isMobileContext.Provider value={flag}>
        <Header regis={regis} flag={flag} />
        {
          <CookieConsent
            cookieName="codere_cookie"
            expires={365}
            buttonText="- Aceptar -"
            buttonClasses="cookie-btn"
            overlay={true}
            cookieValue={"accepted"}
            extraCookieOptions={{ domain: ".codere.bet.ar" }}
            overlayClasses="cookie-overlay"
            containerClasses="cookie-container"
            contentClasses="cookie-content"
          >
            <h3>Uso Cookies</h3>
            Utilizamos cookies propias y de terceros para mejorar tu
            accesibilidad, personalizar, analizar tu navegación, así como para
            mostrar anuncios basados en tus intereses. Si sigues navegando,
            consideramos que aceptas su uso. Podés obtener más información en
            nuestra{" "}
            <a href="https://www.codere.bet.ar/informaci%C3%B3n-legal/politica-de-cookies">
              política de cookies
            </a>
            .
          </CookieConsent>
        }
        <Routing flag={flag} />
        <Outlet />
      </isMobileContext.Provider>
      {flag ? <StickyFooter /> : null}
      <Footer />
    </div>
  );
}

export default App;
