import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Navigations(props) {
  const prefix = !props.type
    ? "https://www.codere.bet.ar/seopages/eventos-deportivos/icons/"
    : "https://www.codere.bet.ar/seopages/casino/assets/icons/";

  const eNavStyleDesktop = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "2rem",
  };
  const eNavStyleMobile = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "1rem",
  };

  const navs = [
    [
      {
        icon: "baloncesto",
        title: "Baloncesto",
        url: "/eventos-deportivos/apuestas-mundial-baloncesto",
      },
      {
        icon: "formula1",
        title: "Grand Prix",
        url: "/eventos-deportivos/apuestas-grand-prix",
      },
      {
        icon: "mundial",
        title: "Mundial",
        url: "/eventos-deportivos/apuestas-mundial-fifa",
      },
    ],
    [
      {
        icon: "casino",
        title: "Casino",
        url: "/casino",
      },
      {
        icon: "en-vivo",
        title: "En Vivo",
        url: "/casino/casino-en-vivo",
      },
      {
        icon: "slots",
        title: "Slots",
        url: "/casino/slots",
      },
      {
        icon: "blackjack",
        title: "Blackjack",
        url: "/casino/blackjack",
      },
      {
        icon: "ruleta",
        title: "Ruleta",
        url: "/casino/ruleta",
      },
    ],
  ];

  return (
    <div
      className="e-nav"
      style={!isMobile ? eNavStyleDesktop : eNavStyleMobile}
    >
      {navs[props.type].map((n, k) => (
        <Link
          to={n.url}
          style={{ color: "#fff", textDecoration: "none" }}
          key={k}
        >
          <LazyLoadImage
            src={prefix + n.icon + ".svg"}
            className={props.index === k + 1 ? "colored" : ""}
            style={isMobile ? { height: 32 } : { height: "2rem" }}
          />
          <span className={props.index === k + 1 ? "colored" : ""}>
            {n.title}
          </span>


        </Link>
      ))}
    </div>
  );
}
