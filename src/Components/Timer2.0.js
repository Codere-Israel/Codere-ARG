import React from "react";
import counterCSS from "../CSS/counter2.0.module.css";
import { useCountdown } from "../Hooks/useCountdown";
import { Zoom, Slide, Fade } from "react-awesome-reveal";

const Timer = () => {
  const dateToCount = "2022-11-30T19:00:00Z";
  const [days, hours, minutes, seconds] = useCountdown(dateToCount);
  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <>
        <div className={counterCSS.counter_wrapper}>
          <div className={counterCSS.timing}>partido comienza en:</div>
          <div className={counterCSS.show_counter}>
            {DateTimeDisplay(days, "Dias")}
            <p className={counterCSS.semicol}>:</p>
            {DateTimeDisplay(hours, "Horas")}
            <p className={counterCSS.semicol}>:</p>
            {DateTimeDisplay(minutes, "Minutos")}
            <p className={counterCSS.semicol}>:</p>
            {DateTimeDisplay(seconds, "Segundos")}
          </div>
        </div>
      </>
    );
  };

  const DateTimeDisplay = (value, type) => {
    return (
      <div className={counterCSS.countdown}>
        <div style={{ display: "flex" }}>
          <div className={counterCSS.count_styling}>
            <p>{Math.floor(value / 10)}</p>
          </div>
          <div className={counterCSS.count_styling}>
            <p>{value % 10}</p>
          </div>
        </div>
        <span className={counterCSS.time_unit}>{type}</span>
      </div>
    );
  };

  return (
    <a
      href="https://m.caba.codere.bet.ar/deportes/#/RegistroARPage"
      rel="nofollow"
      className={counterCSS.banner_info}
    >
      <Fade triggerOnce={true} duration={750}>
        <div className={`${counterCSS.banner_title} ${counterCSS.league}`}>
          Copa Mundial 2022
        </div>
        <div className={`${counterCSS.banner_title} ${counterCSS.teams}`}>
          Polonia vs Argentina
        </div>
        <div className={counterCSS.bord}></div>
        <div className={`${counterCSS.banner_title} ${counterCSS.offer1}`}>
          Apostá $1.000
        </div>
        <div className={`${counterCSS.banner_title} ${counterCSS.offer2}`}>
          y recibí $500
        </div>
        <div className={`${counterCSS.banner_title} ${counterCSS.tyc}`}>
          por cada gol de la selección
        </div>
      </Fade>
      {ShowCounter({ days, hours, minutes, seconds })}
    </a>
  );
};

export default Timer;
