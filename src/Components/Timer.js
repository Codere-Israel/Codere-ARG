import React from "react";
import counterCSS from "../CSS/counter.module.css";
import { useCountdown } from "../Hooks/useCountdown";
import { Zoom, Slide, Fade } from "react-awesome-reveal";

const Timer = () => {
  const dateToCount = "2022-11-26T19:00:00Z";
  const [days, hours, minutes, seconds] = useCountdown(dateToCount);
  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className={counterCSS.show_counter}>
        {DateTimeDisplay(days, "Dias")}
        <p className={counterCSS.semicol}>:</p>
        {DateTimeDisplay(hours, "Horas")}
        <p className={counterCSS.semicol}>:</p>
        {DateTimeDisplay(minutes, "Minutos")}
        <p className={counterCSS.semicol}>:</p>
        {DateTimeDisplay(seconds, "Segundos")}
      </div>
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
        <div className={counterCSS.banner_title}>la</div>
        <div className={counterCSS.banner_title}>Copa Del Mundo</div>
        <div className={counterCSS.banner_title}>Comienza En</div>
      </Fade>
      {ShowCounter({ days, hours, minutes, seconds })}
    </a>
  );
};

export default Timer;
