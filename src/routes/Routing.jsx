import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Inicio from "../Components/Inicio";
import Basketball from "../Components/seo/sports/events/Basketball";
import Mundeal from "../Components/seo/sports/events/Mundeal";
import Formula from "../Components/seo/sports/events/Formula";
import EventosDeportivos from "../Components/seo/sports/EventosDeportivos";
import Casino from "../Components/seo/casino/Casino";
import Slots from "../Components/seo/casino/Slots";
import CasinoLive from "../Components/seo/casino/CasinoLive";
import Blackjack from "../Components/seo/casino/Blackjack";
import Ruleta from "../Components/seo/casino/Ruleta";
import Navigations from "../Components/seo/Navigations";
import { useEffect, useState } from "react";

export default function Routing(props) {
  const location = useLocation();
  const [activated, setActivated] = useState(0);

  useEffect(() => {
    setActivated(activeHandler);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const activeHandler = () => {
    switch (location.pathname) {
      default:
        return 0;
      case "/casino":
      case "/eventos-deportivos/apuestas-mundial-baloncesto":
        return 1;
      case "/casino/casino-en-vivo":
      case "/eventos-deportivos/apuestas-grand-prix":
        return 2;
      case "/casino/slots":
      case "/eventos-deportivos/apuestas-mundial-fifa":
        return 3;
      case "/casino/blackjack":
        return 4;
      case "/casino/ruleta":
        return 5;
    }
  };
  return (
    <>
      {location.pathname.includes("eventos") ||
      location.pathname.includes("casino") ? (
        <Navigations
          index={activated}
          type={location.pathname.includes("eventos") && !location.hash ? 0 : 1}
        />
      ) : (
        <></>
      )}

      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Routes location={location}>
            <Route path="/" element={<Inicio flag={props.flag} />} />
            {/* <Route path="/stg/index.aspx" element={<Inicio />} />
            <Route path="/stg/index.html" element={<Inicio />} /> */}

            <Route exact path="eventos-deportivos">
              <Route
                exact
                path=""
                element={<EventosDeportivos flag={props.flag} />}
              />
              <Route
                exact
                path="apuestas-mundial-baloncesto"
                element={<Basketball flag={props.flag} />}
              />
              <Route
                exact
                path="apuestas-grand-prix"
                element={<Formula flag={props.flag} />}
              />
              <Route
                exact
                path="apuestas-mundial-fifa"
                element={<Mundeal flag={props.flag} />}
              />
            </Route>
            <Route exact path="casino">
              <Route exact path="" element={<Casino flag={props.flag} />} />
              <Route
                exact
                path="casino-en-vivo"
                element={<CasinoLive flag={props.flag} />}
              />
              <Route exact path="slots" element={<Slots flag={props.flag} />} />
              <Route
                exact
                path="blackjack"
                element={<Blackjack flag={props.flag} />}
              />
              <Route
                exact
                path="ruleta"
                element={<Ruleta flag={props.flag} />}
              />
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}
