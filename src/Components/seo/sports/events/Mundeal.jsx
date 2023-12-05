import "./events.css";
import Navigations from "../../Navigations";
import Floating from "../../Floating";
import TableOfContents from "../../TableOfContents";
import {
  Accordion,
  Container,
  Image,
  Placeholder,
  Table,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Mundeal(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = "Apuesta para el Mundial de Fútbol » Bono $50.000 | Codere®";
  const description =
    "Acá te dejamos una explicación sobre en qué consisten algunas populares opciones de apuesta y algunas que no son tan populares. Apuesta en Codere.";
  const prefix = `https://www.codere.bet.ar/seopages/eventos-deportivos/fifa/imgs/${
    props.flag ? "M" : "D"
  }-Soccer`;
  const jpg = ".jpg";

  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Dónde tendrá lugar la Copa del Mundo de 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La Copa del Mundo 2026 se realizará en Canadá, Estados Unidos y México.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué país ha organizado más copas del mundo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los países que más veces organizaron una Copa Copa del Mundo son Brasil, Alemania, Italia, Francia y México con 2 veces cada uno.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo inician las eliminatorias para el siguiente Copa del Mundo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las eliminatorias para la Copa Copa del Mundo de 2026 comienzan en marzo de 2023 con una doble fecha y terminarán en octubre de 2025.",
        },
      },
    ],
  };

  const top_par =
    "La Copa Copa del Mundo de fútbol masculino organizada por la Federación Internacional de Fútbol Asociado (FIFA) es una competición que paraliza al mundo cada cuatro años y que se podrá vivir de forma íntegra en Codere. Para realizar apuestas tanto en los partidos como predicciones generales de goleador, mayor asistidor o campeón, deberás hacer un análisis de acuerdo al presente de cada selección teniendo en cuenta sus últimos partidos, sus bajas de último momento y los posibles cruces que tenga.";

  const history = {
    h2: "Historia sobre la Copa Del Mundo",
    p: "La Copa del Mundo como torneo internacional alternativo de los certámenes olímpicos fue el anhelo de la FIFA desde su creación en 1904. Recién en 1930 se oficializó el Copa del Mundo y tuvo su primera edición ese año en Uruguay. Desde ese entonces, el seleccionado con más cantidad de participaciones y el que más veces a logrado alzarse con el trofeo fue Brasil. Año tras año, la competición ha adquirido mayor relevancia y contó con la participación de grandes jugadores como Pelé, Maradona, Beckenbauer, Platini, Cruyff, Messi, entre otros.",
    p2: "Las Copas del Mundo más icónicas de la historia fueron:",
    inner: [
      {
        h3: "Mundial Suiza 1954",
        p: "El Mundial fue recordado como el “Milagro de Berna”. Hungría era la favorita a llevarse el título porque contaba con un invicto de 4 años y 33 partidos. En fase de grupos venció a Alemania por 8 a 3 a quién volvió a cruzar en la final, pero con otro resultado.  Los germanos dieron vuelta un 0-2 en contra y se llevaron la copa en un electrizante partido. ",
      },
      {
        h3: "Mundial México 1970",
        p: "Es considerado el Mundial que generó un antes y un después. Fue el primero en ser transmitido a nivel global, debutaron las tarjetas de amonestaciones y sustituciones, y el que detonó el potencial comercial del torneo. El campeón fue Brasil por tercera vez en su historia, coronando a Pelé como el futbolista más famoso e importante del planeta. ",
      },
      {
        h3: "Mundial Alemania 2006",
        p: "Considerada una de las mejores Copas Del Mundo de la historia por su alto nivel futbolístico. Se llevaron a cabo grandes partidos entre selecciones icónicas para culminar con una final definida por tiros de punto de penal entre Francia e Italia, quién se consagraría campeón. Además, fue el último mundial de Zinedine Zidane, que se fue expulsado por el recordado cabezazo a Materrazzi.",
      },
      {
        h3: "México 1986",
        p: "La consagración de Maradona como el mejor jugador del mundo y su increíble participación en esa copa quedará por siempre en la memoria de todos. Argentina levantó por segunda vez en su historia la Copa del Mundo y el partido más icónico fue contra Inglaterra donde Diego marcó dos goles, uno con la mano y el otro considerado el mejor gol en la historia de los mundiales con una corrida memorable desde atrás de mitad de cancha. ",
      },
      {
        h3: "Brasil 1950",
        p: "Esta Copa del Mundo contó con una final que se recuerda hasta el día de hoy como el famoso “Maracanazo”. Brasil, país organizador y máximo candidato a ser campeón, vencía a Uruguay en la final por 1 a 0, pero los charrúas dieron vuelta el partido 2 a 1 y se llevaron el torneo. En aquella final se inmortalizó la frase “los de afuera son de palo” dicha por Obdulio Varela, capitán de la celeste en ese Mundial. ",
      },
    ],
  };

  const estadísticas = {
    h2: "Estadísticas destacadas de las Copas Copa del Mundo ",
    p: "A continuación podrás encontrar un repaso de todas las Copas Copa del Mundoes de la FIFA con sus sedes, respectivos campeones, goleadores y demás información de utilidad para que sepas todo lo necesario. ",
    p2: "Estas son todas las finales de la Copa del Mundo:",
    table: {
      t_headers: ["Año", "Campeón", "Goleador del torneo"],
      t_cells: [
        ["1930", "Uruguay", "Guillermo Stábile: 8"],
        ["1934", "Italia", "Oldřich Nejedlý: 5"],
        ["1938", "Italia", "Leônidas da Silvan: 7"],
        ["1950", "Uruguay", "Ademir: 9"],
        ["1954", "Alemania", "Sandor Kocsis: 11"],
        ["1958", "Brasil", "Just Fontaine: 13"],
        ["1962", "Brasil", "Garrincha: 4"],
        ["1966", "Inglaterra", "Eusébio: 9"],
        ["1970", "Brasil", "Gerd Müller: 10"],
        ["1974", "Alemania", "Grzegorz Lato: 7"],
        ["1978", "Argentina", "Mario Kempes: 6"],
        ["1982", "Italia", "Paolo Rossi: 6"],
        ["1986", "Argentina", "Gary Lineker: 6"],
        ["1990", "Alemania", "Salvatore Schillaci: 6"],
        ["1994", "Brasil", "Oleg Salenko y Hristo Stoitchkov: 6"],
        ["1998", "Francia", "Davor Šuker: 6"],
        ["2002", "Brasil", "Ronaldo: 8"],
        ["2006", "Italia", "Miroslav Klose: 5"],
        [
          "2010",
          "España",
          "Thomas Müller, David Villa, Wesley Sneijder, Diego Forlán: 5",
        ],
        ["2014", "Alemania", "James Rodríguez: 6"],
        ["2018", "Francia", "Harry Kane: 6"],
        ["2022", "Argentina", "Kylian Mbappé: 8"],
      ],
    },
  };

  const maximos = {
    p: "Estos son los países que más veces ganaron la Copa del Mundo de la FIFA:",
    list: [
      { bolded: "Brasil", veces: 5 },
      { bolded: "Alemania:  ", veces: 4 },
      { bolded: "Italia", veces: 4 },
      { bolded: "Argentina", veces: 3 },
      { bolded: "Francia", veces: 2 },
      { bolded: "Uruguay", veces: 2 },
      { bolded: "Inglaterra", veces: 1 },
      { bolded: "España", veces: 1 },
    ],
    inner: {
      h3: "Máximos anotadores en las Copa del Mundo",
      p: "En la historia de los mundiales hubo grandes figuras que aportaron goles para que sus selecciones lleguen lejos en la competición e incluso logren ganarla gracias a sus tantos. Por esto confeccionamos una lista con los máximos goleadores de la Copa del Mundo de la FIFA y la cantidad de partidos en los que los marcaron para determinar su promedio de gol:",
      list: [
        "Miroslav Klose: marcó 16 goles en 24 partidos con un promedio de gol de 0.67",
        "Ronaldo: marcó 15 goles en 19 partidos con un promedio de gol de 0.79",
        "Gerd Müller marcó 14 goles en 13 partidos con un promedio de gol de 1.08",
        "Just Fontaine marcó 13 goles en 6 partidos con un promedio de gol de 2.17",
        "Lionel Messi marcó 13 en 26 partidos con un promedio de gol de 0.50",
        "Kylian Mbappé marcó 12 goles en 14 partidos con un promedio de gol de 0.86 ",
        "Pelé marcó 12 goles en 14 partidos con un promedio de gol de 0.86",
        "Sándor Kocsis marcó 11 goles en 5 partidos con un promedio de gol de 2.20 ",
        "Jürgen Klinsmann marcó 11 goles en 17 partidos con un promedio de gol de 0.65",
        "Helmut Rahn marcó 10 goles en 10 partidos con un promedio de gol de 1",
      ],
    },
  };

  const elegi = {
    h2: "Elegí Codere para apuestas en la Copa del Mundo",
    p: "Codere te da la posibilidad de apostar en la Copa Copa del Mundo de fútbol a lo que más te guste. Una amplia y diversa cantidad de opciones que podrás encontrar en el sitio web, desde goleadores, asistencias, corners o también opciones especiales para los jugadores.",
  };

  const tips = {
    h2: "Tipos de apuestas en la Copa del Mundo de fútbol ",
    p: "Acá te dejamos una explicación sobre en qué consisten algunas populares opciones de apuesta y algunas que no son tan populares, pero harán que te diviertas y explores las diferentes posibilidades que pueden suceder en un partido de fútbol en la Copa Copa del Mundo de la FIFA:",
    inner: [
      {
        h3: "Principal",
        text: "Implica apostar a la victoria, empate o derrota, en los 90 minutos de juego. No se contarán prórrogas, ni penales.",
      },
      {
        h3: "Marcan ambos equipos",
        text: "Se centran en la idea de que los dos equipos anotarán al menos un gol a lo largo del partido, sin tener en cuenta el resultado final ni quién es el ganador final del encuentro.",
      },
      {
        h3: "Apostar al número de goles",
        text: "No importa el equipo que marque gol, ni quien gana, solo el número total de goles. Ejemplo: Habrá más de 2.5 goles. (Eso significa que sumando los goles de ambos equipos habrá 3 goles o más)",
      },
      {
        h3: "Cuota a goleador",
        text: "En Codere no solo podrás apostar al goleador en un partido, sino que podés elegir quién se llevará la Bota de Oro en la Copa Copa del Mundo de la FIFA. ",
      },
      {
        h3: "Fase de Eliminación",
        text: "Muchos creen que saben en qué fase caerá eliminada una selección, y en Codere te damos la opción de adivinarlo. Elige la selección que quieras y selecciona si pensas que será eliminado en Fase de grupos, octavos, cuartos, semifinales, si será finalista o campeón.",
      },
      {
        h3: "Grupo equipo campeón",
        text: "Codere te da la oportunidad de seleccionar el grupo del que saldrá el campeón del Copa del Mundo.",
      },
    ],
  };

  const preguntas = {
    h2: "Preguntas frecuentes acerca del Copa del Mundo ",
    p: "Algunas preguntas frecuentes que pueden surgir al querer realizar apuestas en la Copa Copa del Mundo de la FIFA son:",
    questions: [
      {
        question: "¿Dónde tendrá lugar la Copa del Mundo de 2026?",
        answer:
          "La Copa del Mundo 2026 se realizará en Canadá, Estados Unidos y México.",
      },
      {
        question: "¿Qué país ha organizado más copas del mundo?",
        answer:
          "Los países que más veces organizaron una Copa Copa del Mundo son Brasil, Alemania, Italia, Francia y México con 2 veces cada uno.",
      },
      {
        question:
          "¿Cuándo inician las eliminatorias para el siguiente Copa del Mundo? ",
        answer:
          "Las eliminatorias para la Copa Copa del Mundo de 2026 comienzan en marzo de 2023 con una doble fecha y terminarán en octubre de 2025.",
      },
    ],
  };

  const table_list = [
    {
      title: "Historia sobre la Copa Del Mundo",
      id: "historia",
    },

    {
      title: "Estadísticas destacadas de las Copas Copa del Mundo",
      id: "estadísticas",
    },
    {
      title: "Elegí Codere para apuestas en la Copa del Mundo",
      id: "elegi",
    },
    {
      title: "Tipos de apuestas en la Copa del Mundo de fútbol",
      id: "tipos",
    },
    {
      title: "Preguntas frecuentes sobre el mundial de futbol de 2026",
      id: "preguntas",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="canonical"
          href="https://www.codere.bet.ar/eventos-deportivos/apuestas-mundial-fifa"
        />
        <meta name="description" content={description} />
        {/* <meta name="robots" content="noindex" /> */}
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      {/* <Navigations index={props.index} type={0} /> */}
      <Floating text="La Copa del Mundo" />

      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.bet.ar/seopages/eventos-deportivos/fifa/imgs/${
            props.flag ? "M" : "D"
          }-Header.jpg)`,
          backgroundSize: "cover",
        }}
      ></div>

      <Container>
        <div className="event">
          <Container>
            {!props.flag ? <TableOfContents table={table_list} /> : <></>}

            <Fade>
              <h1 className="header subtitle">
                Lo que tenés que saber para hacer apuestas online en la Copa del
                Mundo
              </h1>
            </Fade>
            <p>{top_par}</p>
            <div className="para">
              <h2 id="historia" className="subtitle">
                {history.h2}
              </h2>
            </div>
            <p style={{ color: "#fff" }}>{history.p}</p>
            <p style={{ color: "#fff" }}>{history.p2}</p>
            <Accordion>
              {history.inner.map((inn, k) => (
                <Accordion.Item eventKey={k} key={k}>
                  <Accordion.Header as={"h3"}>{inn.h3}</Accordion.Header>
                  <Accordion.Body>{inn.p}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <Fade duration={1000} triggerOnce>
              <LazyLoadImage src={prefix + "1" + jpg} width="100%" />
            </Fade>
            <div id="estadísticas" className="mt-4">
              <h2 className="subtitle">{estadísticas.h2}</h2>
              <p> {estadísticas.p}</p>
              <p> {estadísticas.p2}</p>
              <Table striped bordered hover variant="dark" className="seotable">
                <thead>
                  <tr>
                    {estadísticas.table.t_headers.map((header, k) => (
                      <td key={k}>{header}</td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {estadísticas.table.t_cells.map((rows, i) => (
                    <tr key={i}>
                      {rows.map((col, j) => (
                        <td key={j}>{col}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div id="maximos">
              <h2 className="subtitle">{maximos.h2}</h2>
              <p> {maximos.p}</p>
              <h3 className="subtitle">{maximos.inner.h3}</h3>
              <p>{maximos.inner.p}</p>
              <ul>
                {maximos.inner.list.map((li, k) => (
                  <li key={k}>{li}</li>
                ))}
              </ul>
            </div>

            <div id="elegi">
              <h2 className="subtitle">{elegi.h2}</h2>
              <p>{elegi.p}</p>
            </div>

            <Fade duration={1000} triggerOnce>
              <LazyLoadImage src={prefix + "2" + jpg} width="100%" />
            </Fade>
            <div id="tipos">
              <div className="para">
                <h2 className="subtitle">{tips.h2}</h2>
              </div>
              <p>{tips.p}</p>
              <Container>
                {tips.inner.map((t, i) => (
                  <div key={i}>
                    {/* <Zoom triggerOnce> */}
                    <h3>{t.h3}</h3>
                    <p>{t.text}</p>
                    {/* </Zoom> */}
                  </div>
                ))}
              </Container>

              <div id="preguntas">
                <h2 style={{ color: "#79c000" }} className="subtitle">
                  {preguntas.h2}
                </h2>
                <p>{preguntas.p}</p>
                <Container>
                  <Accordion>
                    {preguntas.questions.map((q, k) => (
                      <Accordion.Item key={k} eventKey={k + ""}>
                        <Accordion.Header as={"h3"}>
                          {q.question}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>{q.answer}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Container>
              </div>
            </div>
            <Fade duration={1000} triggerOnce>
              <LazyLoadImage src={prefix + "3" + jpg} width="100%" />
            </Fade>
          </Container>
        </div>
      </Container>
    </>
  );
}
