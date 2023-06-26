import { Button } from "react-bootstrap";

export default function Floating(props) {
  return (
    <div className="floating">
      <span>{props.text}</span>
      <br />
      <Button
        href={
          props.juega
            ? "https://m.caba.codere.bet.ar/deportes/#/CasinoPage"
            : "https://m.caba.codere.bet.ar/deportes/#/RegistroARPage"
        }
        rel="nofollow"
        className="floating-btn"
      >
        {props.juega ? "Juega ahora" : "Registrate"}
      </Button>
    </div>
  );
}
