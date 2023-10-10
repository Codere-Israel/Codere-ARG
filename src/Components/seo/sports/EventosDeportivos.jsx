import { Button, Container, Card, Row, Col } from "react-bootstrap";
import "./eventos-styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Floating from "../Floating";
import { useEffect } from "react";

export default function EventosDeportivos(props) {
  const directions = ["left", "down", "right", "left"];
  const prefix = "https://www.codere.bet.ar/assets/seo/sport/";

  const title = "Apuesta en los mejores eventos desde Argentina | Codere®";
  const description =
    "Encuentra aquí las guías para apostar en línea a tus eventos deportivos favoritos al rededor del mundo. Juega con Codere.";

  const data = {
    top_games: [
      {
        img: "balenco-promo",
        url: "/eventos-deportivos/apuestas-mundial-baloncesto",
        h2: "Apuesta para el Mundial de Basketball",
        game: "Basketball",
      },
      {
        img: "f1-promo",
        url: "/eventos-deportivos/apuestas-grand-prix",
        h2: "Apuesta para el Grand Prix de F1",
        game: "Formula1",
      },
      {
        img: "soccer-promo",
        url: "/eventos-deportivos/apuestas-mundial-fifa",
        h2: "Apuesta para el Mundial de Fútbol",
        game: "Mundial",
      },
    ],
  };

  const cardGenerator = (g, i) => {
    return (
      <Col md={4} xs={6} key={i}>
        <Card className={`eventos_card`}>
          <Link style={{ textDecoration: "unset" }} to={g.url}>
            <Card.Header as={"h2"}>{!props.flag ? g.h2 : g.game}</Card.Header>
          </Link>
          <Card.Body>
            <LazyLoadImage src={prefix + g.img + ".jpg"} />
          </Card.Body>
          <Card.Footer>
            <Link rel="nofollow" to={g.url}>
              <Button
                as="span"
                style={{
                  width: "100%",
                  fontWeight: 600,
                  borderRadius: "1rem",
                }}
              >
                VER INFORMACIÓN
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="canonical"
          href="https://www.codere.bet.ar/eventos-deportivos"
        />
        <meta name="description" content={description} />
      </Helmet>
      <div id="eventos">
        <Floating text="Deportes En Vivo" />
        <div
          className="top-bg-seo"
          style={{
            backgroundImage: `url(${prefix}general-${
              !props.flag ? "desktop" : "mobile"
            }.jpg)`,
            backgroundSize: "cover",
          }}
        ></div>

        <h1 style={{ color: "#fff", textAlign: "center", padding: "1.5rem" }}>
          Los mejores Eventos Deportivos estan en Codere
        </h1>
        <Container className="eventos-container">
          <Row>
            {data.top_games.map((g, i) => {
              return cardGenerator(g, i);
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
