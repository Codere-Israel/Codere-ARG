// import "./events.css";
import Navigations from "../../Navigations";
import Floating from "../../Floating";
import TableOfContents from "../../TableOfContents";
import {
  Accordion,
  Container,
  Image,
  ListGroup,
  Placeholder,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";

export default function Balenco(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = "Apuesta para Mundial de Baloncesto 🏀 | Codere®";
  const description =
    "El baloncesto al ser un deporte con más estadísticas y podemos encontrar apuestas de todo tipo. Aprende en Codere como apostar en el deporte favorito.";

  const prefix = `https://www.codere.bet.ar/seopages/eventos-deportivos/baloncesto/imgs/${
    props.flag ? "M" : "D"
  }-Basketball-`;
  const jpg = ".jpg";

  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué significa hándicap +5.5 en basquet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si apostas por un equipo con handicap +5.5, deberás sumarle esa cantidad al finalizar el encuentro y si superan a su contendiente, habrás ganado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es un back to back de la NBA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lo que se conoce como back to back en el basketball se refiere a aquellos partidos que juegan los equipos durante la temporada regular entre los que no hay días de descanso.",
        },
      },
    ],
  };

  const top_par = {
    h1: "Guía de apuestas para el Mundial de Baloncesto",
    p: "En este artículo te brindaremos toda la información que necesitas para adentrarte en el mundo de las apuestas en el Mundial del baloncesto y que estadísticas deberás mirar para triunfar con tus pronósticos.",
  };
  const history = {
    id: "history",
    h2: "Historia del Mundial de Baloncesto",
    p: "La Copa Mundial de Baloncesto organizada por la Federación Internacional de Baloncesto Asociado se creó en una reunión del Congreso Mundial en los Juegos Olímpicos de 1948 en la ciudad de Londres, Inglaterra. Buscaron crear un Campeonato del Mundo, similar a la Copa Mundial de Fútbol, que se disputará cada cuatro años entre dos ediciones de los Juegos Olímpicos. El torneo comenzó en 1950 y Argentina fue seleccionada como el país anfitrión.",
    inner: [
      {
        h3: "Clasificaciones",
        id: "clasificaciones",
        p: "Los equipos se dividen en grupos continentales, donde habrá tres o cuatro equipos por grupo y a su vez ascensos y descensos entre estos grupos. Las eliminatorias al certamen duran dos años, y en el transcurso de ese tiempo, hay seis ventanas donde se enfrentan los equipos. Las plazas se dividen de la siguiente forma:",
        list: [
          "Selección anfitriona: 1 plaza",
          "FIBA Américas (Norte, Centro, Sudamérica y el Caribe): 7 plazas",
          "FIBA Asia y FIBA Oceanía (Asia y Oceanía): 7 plazas",
          "FIBA Europa (Europa): 12 plazas",
          "FIBA África (África): 5 plazas",
        ],
      },
      {
        h3: "Máximos anotadores ",
        id: "maximos",
        p: "Los jugadores que más puntos marcaron a lo largo de la historia de la Copa Mundial de Baloncesto fueron: ",
        isOrdered: true,
        list: [
          "Oscar Schmidt con 843 puntos",
          "Luis Scola con 823 puntos",
          "Andrew Gaze con 594 puntos",
          "Dražen Dalipagić con 563 puntos",
          "José Rafael Ortiz con 511 puntos",
          "Dragan Kićanović con 491 puntos",
          "Pau Gasol con 482 puntos",
          "Panagiotis Giannakis con 469 puntos",
          "Juan Carlos Navarro con 462 puntos",
          "Wlamir Marques con 437 puntos",
        ],
      },
      {
        h3: "Top de jugadores argentinos en mundiales",
        p: "La Selección Argentina de Baloncesto ha sido representada por grandes figuras del deporte a nivel internacional que se destacaron en las ligas más importantes. Entre ellos podemos encontrar a: Emanuel “Manu” Ginobili, Luis Scola, Andrés “Chapu” Nocioni, Facundo Campazzo, Pablo Prigioni, Pepe Sanchez, Carlos Delfino y Fabricio Oberto. ",
        list: [],
      },
    ],
  };

  const tips = {
    id: "tips",
    h2: "Tipos de Apuestas en Baloncesto ",
    p: "El baloncesto al ser un deporte con estadísticas muy marcadas y amplias, podemos encontrar apuestas de todo tipo. Predecir el ganador del partido es lo más tradicional, pero además podemos decir por cuantos puntos lo hará, cuantos puntos habrá en total o jugar a cuantos triples hará un jugador, entre muchas opciones más. ",
    inner: [
      {
        h3: "Ganador del partido",
        text: "El tipo de apuesta de “Ganador del partido” consiste en acertar quién será el ganador del juego al dar el pitazo final y haberse cumplido el tiempo reglamentario.",
      },
      {
        h3: "Hándicap",
        text: "El tipo de apuesta “hándicap” consiste en la ventaja o desventaja que se le da a un determinado equipo cuando el mismo no es el favorito (Underdog) para que pueda ser un encuentro equitativo.",
      },
      {
        h3: "Más/Menos Puntos Totales",
        text: "El tipo de apuesta “Más/Menos Puntos” consiste en pronosticar el estimado de puntos totales que se darán dentro del partido no solo de un equipo sino la suma de los puntos que obtengan ambos equipos.",
      },
      {
        h3: "Total de puntos Impar/Par",
        text: "El tipo de apuesta “Total de Puntos Impar/Par” consiste en pronosticar el total de puntos Pares o Impares que tendrán un encuentro. Lo que significa, que el resultado se basará en pronosticar si el marcador quedará con una puntuación de número Par o una puntuación de número Impar. Ejemplo 102 o 115.",
      },
      { h3: "", text: "" },
    ],
  };

  const como_hacer = {
    id: "como",
    h2: "¿Cómo hacer pronósticos de apuestas en baloncesto?",
    p: "El baloncesto es un deporte en el que se enfrentan dos equipos de cinco jugadores cada uno y gana quién posee más puntos al finalizar el tiempo estipulado. A diferencia de otros deportes como el fútbol, los partidos de baloncesto no pueden terminar en empate por lo tanto existen dos resultados posibles en lugar de tres. ",
  };

  const preguntas = {
    id: "preguntas",
    h2: "Preguntas frecuentes sobre el Mundial de Baloncesto",
    inner: [
      {
        h3: "¿Qué significa hándicap +5.5 en basquet? ",
        p: "Si apostas por un equipo con handicap +5.5, deberás sumarle esa cantidad al finalizar el encuentro y si superan a su contendiente, habrás ganado. ",
      },
      {
        h3: "¿Qué es un back to back de la NBA?",
        p: "Lo que se conoce como back to back en el baloncesto se refiere a aquellos partidos que juegan los equipos durante la temporada regular entre los que no hay días de descanso. ",
      },
    ],
  };

  const table_list = [
    {
      title: "Historia del Mundial de Baloncesto",
      id: "history",
    },
    {
      title: "Tipos de apuestas en Baloncesto",
      id: "tips",
    },
    {
      title: "¿Cómo hacer pronósticos de apuestas en baloncesto?",
      id: "como-balenco",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="canonical"
          href="https://www.codere.bet.ar/eventos-deportivos/apuestas-mundial-baloncesto"
        />
        <meta name="description" content={description} />
        {/* <meta name="robots" content="noindex" /> */}
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      {/* <Navigations index={props.index} type={0} /> */}
      <Floating text="Encesta con la NBA" />

      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.bet.ar/seopages/eventos-deportivos/baloncesto/imgs/${
            props.flag ? "M" : "D"
          }-Header.jpg)`,
          backgroundSize: "cover",
        }}
      ></div>

      <Container>
        <div className="event">
          <Container>
            {!props.flag ? <TableOfContents table={table_list} /> : <></>}

            <h1 className="header subtitle">{top_par.h1}</h1>
            <p>{top_par.p}</p>
            <div id={history.id}>
              <h2 className="subtitle">{history.h2}</h2>
            </div>
            <p>{history.p}</p>

            <Accordion>
              {history.inner.map((inn, k) => (
                <Accordion.Item eventKey={k} key={k}>
                  <Accordion.Header as={"h3"}>{inn.h3}</Accordion.Header>
                  <Accordion.Body>
                    <p>{inn.p}</p>
                    {inn.list ? (
                      <ListGroup as={inn.isOrdered ? "ol" : "ul"}>
                        {inn.list.map((li, k) => (
                          <li key={k}>{li}</li>
                        ))}
                      </ListGroup>
                    ) : (
                      <></>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <LazyLoadImage src={prefix + "1" + jpg} width="100%" />

            <div className="mt-4" id={tips.id}>
              <h2 className="subtitle">{tips.h2}</h2>
              {tips.inner.map((inn, k) => (
                <div key={k}>
                  <h3 className="subtitle">{inn.h3}</h3>
                  <p>{inn.text}</p>
                </div>
              ))}
            </div>
            <LazyLoadImage src={prefix + "2" + jpg} width="100%" />
            <div className="mt-5" id={como_hacer.id}>
              <h2 className="subtitle">{como_hacer.h2}</h2>
              <p>{como_hacer.p}</p>
            </div>
            <div id={preguntas.id}>
              <Accordion>
                {preguntas.inner.map((inn, k) => (
                  <Accordion.Item key={k} eventKey={k}>
                    <Accordion.Header as={"h3"}>{inn.h3}</Accordion.Header>
                    <Accordion.Body>{inn.p}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            <LazyLoadImage src={prefix + "3" + jpg} width="100%" />
          </Container>
        </div>
      </Container>
    </>
  );
}
