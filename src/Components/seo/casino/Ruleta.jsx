import Navigations from "../Navigations";
import Floating from "../Floating";
import {
  Container,
  Accordion,
  Row,
  Col,
  NavLink,
  Button,
  ListGroup,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TableOfContents from "../TableOfContents";
import { regis } from "../../../App";
import { useEffect } from "react";

export default function Ruleta(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const game_prefix = "https://m.codere.bet.ar/deportes/#/CasinoPage?playgame=";

  const title = "Juega A Las Mejores Ruletas Online En Argentina | Codere®";
  const description =
    "¿Qué ruleta elegirás?, ¿Ruleta Coderista, Europea, o Francesa?, estás a unos cuántos clics de jugar en línea en vivo en Codere Online.";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la Ruleta Online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es la mejor forma de transportarte a tu juego de Casino preferido, acompañado de un crupier, de más jugadores y de unas reglas de juego que te brindan muchas oportunidades de ganar.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántos tipos de ruleta online existen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Existen varios tipos de Ruleta dentro de nuestra oferta de juegos en Codere, puedes elegir la que te traiga más suerte entre: Ruleta Francesa, Ruleta Americana y muchas más.",
        },
      },
      {
        "@type": "Question",
        name: "¿Tengo algún Bono de Bienvenida para empezar a jugar a la Ruleta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No contamos con ningún tipo de Bono de Bienvenida, pero constantemente tenemos las mejores promociones para que puedas disfrutar mucho más en cada partida",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo jugar Ruleta online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Elegí tu ruleta preferida, seleccioná el tipo de apuesta, la cantidad que deseas apostar y confirmá tu jugada. ¡Si acertás, comenzá a festejar!",
        },
      },
      {
        "@type": "Question",
        name: "¿La Ruleta es realmente aleatoria o hay algún truco?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puedes estar seguro de que todos nuestros juegos y apuestas son 100% aleatorias ya que, en el caso de la Ruleta, todo es controlado por un generador de giros aleatorios",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo saber a qué apostar en la Ruleta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no sabés qué números elegir, podés optar por una serie como: Los vecinos del 0 (22, 18, 29, 7, 28, 12, 35, 3, 26, 32, 15, 19, 4, 21, 2 y 25) o los huérfanos (1, 20, 14, 31, 9, 17, 34 y 6) o incluso los números del tercio del cilindro (33, 16, 24, 5, 10, 23, 8, 30, 11, 36, 13 y 27).",
        },
      },
      {
        "@type": "Question",
        name: "¿Existe un mínimo de apuesta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Normalmente sí, pero este mínimo puede variar ampliamente dependiendo de la mesa. Algunos casinos tendrán un mínimo de $1, mientras otros fijan su mínimo en $20",
        },
      },
      {
        "@type": "Question",
        name: "¿En qué Ruleta tengo mayor probabilidad de ganar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En todos nuestros juegos tienes las mismas posibilidades de ganar. Elegí la que más te gusta y disfrtutá como en nuestras salas.",
        },
      },
    ],
  };

  const top_par = {
    h1: "Jugá la increíble Ruleta de Casino Online",
  };

  // Table of Contents  \\
  const table_of_contents_list = [
    {
      title: "La Ruleta en línea",
      id: "linea",
    },
    {
      title: "¿Cómo Jugar a la Ruleta?",
      id: "como_jugar",
    },
    {
      title: "Estrategias para jugar en la Ruleta Online",
      id: "estrategias",
    },
    {
      title: "Una Guía en los diferentes Tipos de Apuesta",
      id: "tipos",
    },
    {
      title: "Preguntas Frecuentes sobre la ruleta online",
      id: "preguntas",
    },
  ];

  // Games Data
  const live_games = [
    {
      name: "First Person Roulette",
      img: "EVGFirstPersonRoulette_Square",
      sponsor: "EVG",
    },
    {
      name: "First Person Lightning Roulette",
      img: "EVGFirstPersonLightningRoulette_Square",
      sponsor: "EVG",
    },
    {
      name: "Multifire Roulette",
      img: "MGSMultifireRoulette_Square",
      sponsor: "MGS",
    },
    {
      name: "Live Lightning Roulette",
      img: "EVGLiveLightningRoulette_Square",
      sponsor: "EVG",
    },
    {
      name: "Live Auto Speed Roulette",
      img: "EVGLiveAutoSpeedRoulette_Square",
      sponsor: "EVG",
    },
    {
      name: "Live Immersive Roulette",
      img: "EVGLiveImmersiveRoulette_Square",
      sponsor: "EVG",
    },
  ];

  const linea = {
    id: "linea",
    h2: "La Ruleta en línea",
    p: [
      "Codere te abre las puertas a un mundo de emociones fuertes donde podrás disfrutar de los mejores juegos de Ruleta en nuestro Casino online. Antes de que gire la ruleta tendrás que elegir entre la gran variedad de títulos de los que disponemos, con hasta 7 juegos diferentes.",
      "¿Cuál vas a elegir hoy? ¿Ruleta americana? ¿Ruleta Europea? ¿Ruleta Francesa? Estás a un clic de disfrutar de todo esto y, si sos de los jugadores que les gusta ver las cosas en vivo, ¡el juego de la Ruleta LIVE es para vos! Disfrutá la rapidez y facilidad de jugar a la ruleta online con la última incorporación a nuestro catálogo.",
      "Cuando las personas visitan los casinos, lo primero que típicamente hacen es sentarse a jugar en las máquinas de tragamonedas, el póker o blackjack. Por alguna extraña razón, la ruleta de casino queda en segundo plano, lo cual es una​​ pena porque girar esa rueda es una de las experiencias de casino más emocionantes que uno puede vivir.",
      "No nos malinterpretes. Las máquinas tragamonedas y los juegos de mesa son populares por una buena razón, pero ningún otro juego combina habilidades, suerte y suspenso, como jugar a la ruleta en vivo. En este artículo te vamos a enseñar cómo jugar a la ruleta online y a mostrarte opciones y variedades que podés combinar para crear la mejor experiencia de ruleta online.",
    ],
  };
  const como_jugar = {
    id: "como_jugar",
    h2: "¿Cómo Jugar a la Ruleta?",
    p: [
      "Las reglas básicas para jugar juegos de ruleta oficiales online son muy simples. Primero, hablemos sobre la rueda de la ruleta de casino como tal. La rueda de la ruleta europea tradicional está compuesta de 37 casillas enumeradas, llamadas bolsillos de colores rojos, negros y verdes. Los números pueden variar dependiendo del estilo de la ruleta que estés jugando, pero profundizaremos sobre esto más adelante.",
      "Antes de que la ruleta gire, los jugadores realizan sus apuestas, colocando sus fichas, en algún número, grupo de números o color que ellos creen será el ganador. Cada grupo de números tiene un pago diferente, dependiendo de la probabilidad del resultado. Una vez que se han colocado todas las apuestas, el croupier hace girar una pequeña pelota blanca en la rueda de la ruleta. Una vez que ésta para de girar, la pelota se asentará en uno de las casillas. Quien haya elegido el número y/o color correcto de la casilla, gana la apuesta.",
    ],
    inner: [
      {
        h3: "Reseña de los Diferente Juegos de Ruleta:",
        list: [
          {
            bolded: "Ruleta Europea",
            text: "Una ruleta europea está compuesta por 37 bolsillos, con tan solo un bolsillo “0”. La rueda de la ruleta europea se encuentra no solo en Europa, sino que se juega comúnmente en todo el mundo, excepto en Estados Unidos.",
          },
          {
            bolded: "Ruleta Americana",
            text: "La rueda de la ruleta americana tiene 38 bolsillos en vez de 37 como en la tradicional europea. La rueda ruleta americana es única porque incluye doble bolsillo del número cero, uno etiquetado como “0” y el otro como “00.” Los números también se encuentran ubicados en diferentes posiciones.",
          },
          {
            bolded: "Ruleta Francesa",
            text: "Aunque la ruleta francesa usa el mismo diseño que la rueda de la ruleta europea, el diseño de la mesa difiere significativamente. La ruleta francesa también suele usar la regla La Partage, que significa que los jugadores solo pierden la mitad de sus apuestas igualadas si el giro original es cero. Debido a esto, las ventajas de la casa son reducidas, lo que significa que las posibilidades del jugador son mejores.",
          },
        ],
      },
      {
        h3: "¿Qué es la Ruleta en Vivo?",
        p: [
          "Hay algunos jugadores que evitan apostar a la rultea virtual, simplemente porque temen que las plataformas de apuestas online junten las probabilidades en contra de ellos. Algunas personas también prefieren la emoción creada cuando juegan en una mesa con un dealer de la vida real.",
          "Hoy en día la ruleta en vivo (Streaming) combina lo mejor de ambos mundos: se puede jugar online con dealer en vivo desde la comodidad de sus propias casas. Ya que permite a los jugadores ver al croupier girar la rueda en tiempo real, agregando un nivel adicional de inmersión y confianza. ​",
        ],
      },
    ],
  };

  const estrategias = {
    id: "estrategias",
    h2: "Estrategias para jugar en la Ruleta Online",
    p: [
      "La ruleta está basada mayormente en ciertas estrategias que un jugador puede usar para mejorar sus probabilidades de acertar.",
      "Algunas estrategias se centran en las apuestas. Uno de los métodos más comunes se llama la estrategia de Martingale. Cuando se usa Martingale, los jugadores realizan la misma apuesta en cada giro hasta que ganen. Cada vez que pierden un giro, doblan sus apuestas perdidas. Por ejemplo, una apuesta de $10 se convierte en una apuesta de $20. Martingale se basa en la teoría de que, si continuas apostando en los mismos números, la probabilidad dice que deberías ganar eventualmente.",
    ],
  };
  const tipos = {
    id: "tipos",
    h2: "Una Guía en los diferentes Tipos de Apuesta",
    p: [
      "Las apuestas de ruleta se pueden dividir en dos categorías: apuestas externas (outside bets) y apuestas internas (inside bets)",
      "Las apuestas internas son apuestas que podes colocar en los números como tales. Las apuestas exteriores incluyen las apuestas directas, división, fila, seis líneas, trio, esquina y canasta.",
      "Las apuestas externas se refieren a los sectores externos por fuera de la casilla del número. Hay cinco tipos de apuestas externas: rojo o negro, par o impar, 1-18 o 19-36, docenas y columnas. Las apuestas externas generalmente tienen probabilidades más altas y pagos más bajos.",
    ],
    inner: [
      {
        h3: "¿Hay una apuesta mínima?",
        p: [
          "Los mini juegos de ruleta y las mesas de casino típicamente tienen un mínimo de apuestas, pero la apuesta mínima puede variar ampliamente dependiendo de la mesa. Algunas mesas de ruletas de casino tendrán un mínimo de $1, mientras que otros juegos de ruleta podrán tener un mínimo de $5. La mínima apuesta siempre se mostrará en la mesa.",
          "Ahora que sabés cómo participar, ¡es tiempo de jugar! Preparate para probar tu suerte y usar tu nueva estrategia de ruleta para ganar dinero a lo grande.",
        ],
      },
      { h3: "¿Qué hace único jugar a la Ruleta en Codere?", p: [] },
      {
        h3: "",
        p: [
          "En el casino online de Codere encontrás la mayor cantidad de opciones en juegos de ruleta de primera línea y, además, solo por ser cliente vas a poder disfrutar de nuestras promociones constantes en Casino y en los juegos de ruleta online para ganar aún más.",
          "Además, podés acceder a los diferentes tipos de juegos de ruleta, incluido la ruleta LIVE, desde tu smartphone, donde podrás obtener bonificaciones especiales, realizar depósitos y solicitar tus pagos, todo desde la comodidad de tu casa.",
          "¡Pensá en tu mejor estrategia, aceptá el desafío y empezá apostar!",
        ],
      },
    ],
  };

  const preguntas = {
    id: "preguntas",
    h2: "Preguntas frecuentes:",
    sub: [
      {
        h3: "¿Qué es la Ruleta Online?",
        p: "Es la mejor forma de transportarte a tu juego de Casino preferido, acompañado de un crupier, de más jugadores y de unas reglas de juego que te brindan muchas oportunidades de ganar.",
      },
      {
        h3: "¿Cuántos tipos de ruleta online existen?",
        p: "Existen varios tipos de Ruleta dentro de nuestra oferta de juegos en Codere, puedes elegir la que te traiga más suerte entre: Ruleta Francesa, Ruleta Americana y muchas más.",
      },
      {
        h3: "¿Tengo algún Bono de Bienvenida para empezar a jugar a la Ruleta?",
        p: "No contamos con ningún tipo de Bono de Bienvenida, pero constantemente tenemos las mejores promociones para que puedas disfrutar mucho más en cada partida",
      },
      {
        h3: "¿Cómo jugar Ruleta online?",
        p: "Elegí tu ruleta preferida, seleccioná el tipo de apuesta, la cantidad que deseas apostar y confirmá tu jugada. ¡Si acertás, comenzá a festejar!",
      },
      {
        h3: "¿La Ruleta es realmente aleatoria o hay algún truco?",
        p: "Puedes estar seguro de que todos nuestros juegos y apuestas son 100% aleatorias ya que, en el caso de la Ruleta, todo es controlado por un generador de giros aleatorios",
      },
      {
        h3: "¿Cómo saber a qué apostar en la Ruleta?",
        p: "Si no sabés qué números elegir, podés optar por una serie como: Los vecinos del 0 (22, 18, 29, 7, 28, 12, 35, 3, 26, 32, 15, 19, 4, 21, 2 y 25) o los huérfanos (1, 20, 14, 31, 9, 17, 34 y 6) o incluso los números del tercio del cilindro (33, 16, 24, 5, 10, 23, 8, 30, 11, 36, 13 y 27).",
      },
      {
        h3: "¿Existe un mínimo de apuesta?",
        p: "Normalmente sí, pero este mínimo puede variar ampliamente dependiendo de la mesa. Algunos casinos tendrán un mínimo de $1, mientras otros fijan su mínimo en $20",
      },
      {
        h3: "¿En qué Ruleta tengo mayor probabilidad de ganar?",
        p: "En todos nuestros juegos tienes las mismas posibilidades de ganar. Elegí la que más te gusta y disfrtutá como en nuestras salas.",
      },
    ],
  };

  return (
    <div className="cas-seo">
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href="https://www.codere.bet.ar/casino/ruleta" />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.codere.es/casino/ruleta"
        />
        <link
          rel="alternate"
          hreflang="es-mx"
          href="https://www.codere.mx/casino/ruleta"
        />
        <link
          rel="alternate"
          hreflang="en-mx"
          href="https://www.codere.mx/casino/ruleta"
        />
        <link
          rel="alternate"
          hreflang="es-co"
          href="https://www.codere.com.co/casino/ruleta"
        />
        <link
          rel="alternate"
          hreflang="en-co"
          href="https://www.codere.com.co/casino/ruleta"
        />
        <link
          rel="alternate"
          hreflang="es-ar"
          href="https://www.codere.bet.ar/casino/ruleta"
        />
        <link
          rel="alternate"
          hreflang="en-ar"
          href="https://www.codere.bet.ar/casino/ruleta"
        />
        <link
          rel="alternate"
          hreflang="es-pa"
          href="https://www.codere.pa/casino/ruleta"
        />
        <link
          rel="alternate"
          hreflang="en-pa"
          href="https://www.codere.pa/casino/ruleta"
        />
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      {/* <Navigations index={props.index} type={1} /> */}
      <Floating text="!Las mejores Ruletas!" juega={true} />
      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.bet.ar/seopages/casino/assets/ruleta/${
            props.flag ? "M" : "D"
          }-Header.webp)`,
          backgroundSize: "cover",
        }}
      ></div>

      <Container style={{ color: "#fff" }}>
        <h1 className="header mt-4 mb-3">{top_par.h1}</h1>
        <p>{top_par.p}</p>

        {/* Table */}
        {!props.flag ? (
          <TableOfContents table={table_of_contents_list} />
        ) : null}
        {/* Games */}

        <Row className="casino-row">
          {live_games
            .slice(0, !props.flag ? live_games.length : 4)
            .map((game, k) => (
              <Col lg={2} md={4} xs={6} key={k}>
                <NavLink href={`${game_prefix}${game.sponsor} ${game.name}`}>
                  <div className="cas-game-wrapper">
                    <LazyLoadImage
                      className="casino-game-img shining"
                      src={
                        "https://www.codere.bet.ar/lobby_tiles/" +
                        game.img +
                        ".jpg"
                      }
                    />
                    <div className="hvr">
                      <p>{game.name}</p>
                      <LazyLoadImage src="https://www.codere.bet.ar/assets/seo/jackpotsPlayHoverLogo.svg" />
                    </div>
                  </div>
                </NavLink>
              </Col>
            ))}
        </Row>

        {/* Linea */}
        <div id={linea.id}>
          <h2 className="mt-4 mb-3">{linea.h2}</h2>
          {linea.p.map((pi, k) => (
            <p key={k}>{pi}</p>
          ))}
        </div>

        <div id={como_jugar.id}>
          <h2 className="mt-4 ">{como_jugar.h2}</h2>
          {como_jugar.p.map((pi, k) => (
            <p key={k}>{pi}</p>
          ))}
          <Accordion>
            {como_jugar.inner.map((inn, k) => (
              <Accordion.Item eventKey={k} key={k}>
                <Accordion.Header as={"h3"}>{inn.h3}</Accordion.Header>
                <Accordion.Body>
                  {inn.p ? (
                    <>
                      {inn.p.map((pi, k) => (
                        <p key={k}>{pi}</p>
                      ))}
                    </>
                  ) : (
                    <ListGroup as={"ol"}>
                      {inn.list.map((li, k) => (
                        <li key={k}>
                          <strong>{li.bolded}:</strong> {li.text}
                        </li>
                      ))}
                    </ListGroup>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
        <div className="mt-4 mb-3" id={estrategias.id}>
          <h2>{estrategias.h2}</h2>
          {estrategias.p.map((txt, k) => (
            <p key={k}>{txt}</p>
          ))}
        </div>

        <div id={tipos.id}>
          <h2>{tipos.h2}</h2>
          {tipos.p.map((pi, k) => (
            <p key={k}>{pi}</p>
          ))}
          {tipos.inner.map((inn, k) => (
            <div key={k}>
              <h3>{inn.h3}</h3>
              {inn.p.map((pi, k) => (
                <p key={k}>{pi}</p>
              ))}
            </div>
          ))}
        </div>
        <div id={preguntas.id}>
          <h2 className="mt-4 mb-3">{preguntas.h2}</h2>
          <Accordion>
            {preguntas.sub.map((s, k) => (
              <Accordion.Item key={k} eventKey={k}>
                <Accordion.Header as={"h3"}>{s.h3}</Accordion.Header>
                <Accordion.Body as={"p"}>{s.p}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        <Button href={regis} className="cas-reg-btn" rel="nofollow">
          Registrate
        </Button>
      </Container>
    </div>
  );
}
