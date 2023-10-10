import { Container, Accordion, Image, Placeholder } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./events.css";
import Navigations from "../../Navigations";
import { useEffect, useState } from "react";
import Floating from "../../Floating";
import TableOfContents from "../../TableOfContents";

export default function Formula(props) {
  const title = "Apuesta para el Grand Prix de F1 | Codere®";
  const description =
    "Los máximos eventos en el automovilismo, que se realizan por prestigio y popularidad son conocidos como Grandes Premios, aprende aquí como apostar.";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es el mejor circuito en la F1?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El mejor circuito de Fórmula 1 por su trascendencia e importancia es Monte Carlo en Mónaco.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo es el Gran Prix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El Gran Premio de Mónaco 2023 se llevará a cabo del 26 al 28 de Mayo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántos puntos da ganar un Grand Prix? (h3)",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El ganador de un Gran Premio de Fórmula 1 recibe 25 puntos.",
        },
      },
    ],
  };

  const prefix = `https://www.codere.bet.ar/seopages/eventos-deportivos/f1/imgs/${
    props.flag ? "M" : "D"
  }-Formula1-`;
  const postfix = ".jpg";

  const table_list = [
    {
      title: "Historia del Gran Premio de la F1",
      id: "history",
    },
    {
      title: "¿Cómo hacer pronósticos de apuestas en F1?",
      id: "apuestas",
    },
    {
      title: "Preguntas frecuentes sobre el Grand Prix",
      id: "preguntas",
    },
  ];

  const top_par = {
    h1: "Guía de apuestas el Grand Prix",
    p: "En todos los deportes de motor, pero en especial dentro del automovilismo los máximos eventos que se realizan por prestigio y popularidad son conocidos como Grandes Premios. En ellos los mejores equipos técnicos, fabricantes de automóviles y pilotos se congregan para competir en un carrera por el primer puesto y festejar bañándose en una lluvia de bebidas característica.",
  };

  const history = {
    id: "history",
    h2: "Historia del Gran Premio de la F1",
    p: [
      "La máxima categoría del automovilismo es conocida como la Formula 1 en la cual compiten 20 corredores de 10 escuderías diferentes por ser campeones del mundo. ",
      "El inicio de este certamen se remonta al año 1950 en el que comenzó un formato de competición de varias carreras y obtención de puntos de acuerdo a la posición que obtenía cada piloto en cada una de ellas. Para ese entonces, ya competían algunas escuderías que hoy son míticas por sus hazañas y años en la categoría como Ferrari y Alfa Romeo. Año a año, la atracción por las carreras de autos fue creciendo e hizo que se unieran otras marcas de renombre como McLaren, Mercedes o Williams. ",
      "Hoy en día en la Formula 1 se compite por dos campeonatos, el campeonato de constructores que lo gana aquella escudería que reúna más puntos con sus dos autos y el campeonato de pilotos que es entregado al conductor con más puntos a lo largo del año. ",
    ],
    inner: [
      {
        h3: "Clasificaciones al Grand prix",
        p: "Los grandes premios se realizan de viernes a domingo en diferentes lugares de todo el mundo. El viernes se suelen realizar las prácticas en donde los pilotos y los equipos pueden probar tanto el auto como la pista, para preparar sus estrategias de carrera. El sábado se realiza la clasificación que consiste en ver que piloto hace un mejor tiempo de vuelta para determinar cómo será el orden de salida al día siguiente. Es decir que el piloto que obtenga el tiempo más bajo comenzará primero o en la “pole position” como suele llamarse. El domingo es el día de la carrera en la que los 20 pilotos buscarán terminar en la mejor posición posible.",
      },
      {
        h3: "Circuitos más importantes",
        p: "Los circuitos más importantes de la Fórmula 1 son: Monte Carlo, Mónaco; Silverstone, Reino Unido; Monza, Italia; Nürburgring, Alemania; Spa Francorchamps, Bélgica e Interlagos, Brasil. ",
      },
    ],
  };

  const apuestas = {
    id: "apuestas",
    h2: "Apuestas y cuotas en F1",
    inner: [
      {
        h3: "¿Cómo funcionan las cuotas en F1? ",
        text: "Las cuotas en las apuestas de Fórmula 1 tienen un formato similar a otros deportes. El número asignado que tiene cada competidor será el valor por el cual se multiplicará lo que hayas apostado en el caso de que ese piloto gane. Por ejemplo, si la cuota de Hamilton es 3,00 y decides apostar $1000 pesos por él, en el caso que consiga ganar la carrera, recibirás $3000 pesos. ",
      },
      {
        h3: "¿Cómo apostar en F1 en Codere?",
        text: "Para realizar una apuesta de Fórmula 1 en Codere debemos ingresar al sitio web Codere.bet.ar, dirigirnos al apartado de motor que figura en el margen izquierdo de la pantalla y seleccionar “Fórmula 1”. Allí podremos encontrar los próximos Grandes Premios a disputarse, las anticipadas que podemos realizar y ver las cuotas que recibe cada uno de los pilotos y equipos que participan. ",
      },
      {
        h3: "Pronósticos campeón Fórmula 1 2023",
        text: "Existen determinados pilotos que corren con una ventaja a la hora de pronosticar el próximo campeón de la Fórmula 1. El actual poseedor del título, Max Verstappen, como es habitual con aquel que defiende la corona, es el principal candidato a repetir la hazaña. ",
        text2:
          "Por otra parte, Lewis Hamilton, siete veces campeón de la máxima categoría siempre será un candidato fuerte mientras siga compitiendo en los equipos de punta. Además, tenemos al joven conductor de Escudería Ferrari, Charles Leclerc quien obtuvo el subcampeonato en 2022 y querrá ir por todo este año. A la lista de estos tres grandes pilotos podemos agregar a George Russell, de Mercedes, y Carlos Sainz Jr, de Ferrari, que se preparan para dar la sorpresa en el campeonato de conductores. ",
      },
    ],
  };

  const questions = {
    id: "preguntas",
    h2: "Preguntas frecuentes sobre el Grand Prix",

    inner: [
      {
        h3: "¿Cuál es el mejor circuito en la F1?",
        text: "El mejor circuito de Fórmula 1 por su trascendencia e importancia es Monte Carlo en Mónaco. ",
      },
      {
        h3: "¿Cuándo es el Gran Prix? ",
        text: "El Gran Premio de Mónaco 2023 se llevará a cabo del 26 al 28 de Mayo.",
      },
      {
        h3: "¿Cuántos puntos da ganar un Grand Prix? ",
        text: "El ganador de un Gran Premio de Fórmula 1 recibe 25 puntos.",
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="canonical"
          href="https://www.codere.bet.ar/eventos-deportivos/apuestas-grand-prix"
        />
        <meta name="description" content={description} />
        {/* <meta name="robots" content="noindex" /> */}
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>
      {/* <Navigations index={props.index} type={0} /> */}
      <Floating text="Recorre las pistas" />

      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.bet.ar/seopages/eventos-deportivos/f1/imgs/${
            props.flag ? "M" : "D"
          }-Header-F1.jpg)`,
          backgroundSize: "cover",
        }}
      ></div>

      <Container>
        <div className="event">
          <Container style={{ marginTop: "2rem" }}>
            {!props.flag ? (
              <TableOfContents isFormula={false} table={table_list} />
            ) : (
              <></>
            )}

            <h1 className="header subtitle">{top_par.h1}</h1>
            <p>{top_par.p}</p>

            <div id={history.id}>
              <h2 className="subtitle">{history.h2}</h2>
              {history.p.map((par, k) => (
                <p key={k}>{par}</p>
              ))}
              <Accordion>
                {history.inner.map((inn, k) => (
                  <Accordion.Item eventKey={k} key={k}>
                    <Accordion.Header as={"h3"}>{inn.h3}</Accordion.Header>
                    <Accordion.Body>{inn.p}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>

            <LazyLoadImage src={prefix + "1" + postfix} width="100%" />

            <div id={apuestas.id} className="mt-4">
              <div className="subtitle">
                <h2 style={{ color: "#79c000" }}>{apuestas.h2}</h2>
                {apuestas.inner.map((inn, k) => (
                  <div key={k}>
                    <h3>{inn.h3}</h3>
                    <p>{inn.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id={questions.id}>
              <h2 className="subtitle">
                Preguntas frecuentes sobre el Grand Prix
              </h2>
            </div>
            <Accordion>
              {questions.inner.map((q, k) => (
                <Accordion.Item key={k} eventKey={k + ""}>
                  <Accordion.Header as={"h3"}>{q.h3}</Accordion.Header>
                  <Accordion.Body>{q.text}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <LazyLoadImage src={prefix + "2" + postfix} width="100%" />
          </Container>
        </div>
      </Container>
    </>
  );
}
