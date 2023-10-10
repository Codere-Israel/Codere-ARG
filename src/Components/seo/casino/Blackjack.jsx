import Navigations from "../Navigations";
import Floating from "../Floating";
import {
  Container,
  Accordion,
  Row,
  Col,
  NavLink,
  Button,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TableOfContents from "../TableOfContents";
import { regis } from "../../../App";
import { useEffect } from "react";

export default function Blackjack(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const game_prefix = "https://m.codere.bet.ar/deportes/#/CasinoPage?playgame=";

  const title = "Blackjack Online En Argentina » Juego De Cartas 21 | Codere®";
  const description =
    "¡Jugá al Blackjack online y pasa horas de diversión en Codere! Aceptá el desafío, regístrate y disfrutá de las ventajas que tiene jugar en línea.";

  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo se juega al blackjack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El objetivo de este juego es sumar 21 puntos o no pasarse de esta cifra, pero siempre sobrepasando el valor que tiene el crupier para ganar la apuesta.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se cuentan las cartas en el blackjack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dale el valor de -1 a las cartas altas (del 10 al A), +1 a las bajas (del 2 al 6) y 0 al resto. Empieza a contar tras el reparto dando el valor a cada carta que sale de la baraja.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo ganar dinero en el juego 21?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El As es la carta más fuerte en el BlackJack porque vale 11 puntos, por lo que la mejor opción es dividir los ases si tienes más de uno y así tener dos opciones para conseguir un 21 (BlackJack). Con los ochos pasa algo parecido, ya que juntos suman 16, que es la peor mano posible en este juego.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántos tipos de blackjack online existen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hay dos tipos o estilos de blackjack, el europeo y el americano, que, aunque parezcan iguales, tienen unas pequeñas diferencias: En el americano, el crupier se reparte dos cartas, una descubierta y otra cubierta, junto con los otros jugadores. En el europeo solo se reparte una carta descubierta y dependiendo de lo que haya salido deben pasar otra ronda de apuestas antes de recibir el siguiente naipe.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué significa blackjack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El juego consiste en sumar un valor lo más próximo a 21 pero sin pasarse. Esta jugada se conoce como Blackjack o 21 natural.",
        },
      },
    ],
  };

  const top_par = {
    h1: "21 Blackjack: Suerte y estrategia para ganar",
    p: [
      "Codere te quiere hacer parte de esta aventura y adentrarte en el divertidísimo mundo de las partidas de Blackjack online. Pero ojo, queremos que esa aventura no sea solo un momento de suerte y corazonadas, sino que además de disfrutarlo puedas llevar a cabo cada partida con todos los trucos, estrategias y formas de jugar este emocionante juego.",
      "En principio te damos la primera razón para convencerte de que Codere es la mejor opción para jugar Blackjack online: desde antes de comenzar a jugar ya podés ganar con el bono de bienvenida.",
      "Cada uno de estos juegos tiene una característica en particular que seguramente te gustará muchísimo, además de que la bonificación que pueden conseguir será totalmente distinta. Por ejemplo, uno de los más elegidos por nuestros jugadores es la opción de Lucky Lucky Blackjack ya que lo más interesante del juego es que cuenta con una RTP del 99,51 %, por lo que tenés muchas posibilidades de obtener beneficios en la mesa.",
      "¿Qué les parece? ¿Quieren saber todavía más sobre el Casino Codere y toda la diversión que forma parte del Blackjack?",
    ],
  };

  // Table of Contents  \\
  const table_of_contents_list = [
    {
      title: "¿Cómo jugar al Blackjack?",
      id: "como_juega",
    },
    {
      title: "Reglas para jugar Blackjack",
      id: "reglas",
    },
    {
      title: "Secretos para jugar 21 blackjack",
      id: "secretos",
    },
    {
      title: "Preguntas frecuentes",
      id: "preguntas",
    },
    {
      title: "Estrategias para jugar 21 Blackjack en Vivo",
      id: "estrategias",
    },
  ];

  // Table
  const table = [
    [
      "Divir",
      "En esta opción buscaremos doblar la apuesta original. Aquí el jugador tendrá dos manos separadas contra el croupier. Solo se podrá lograr si se tienen dos cartas iguales, como por ejemplo dos nueves o dos cincos.",
    ],
    [
      "Plantarse",
      "Este tipo de jugada se basa en hacer lo opuesto a pedir a la banca. La estrategia de esta jugada es sencilla, solo debes quedarte con la mano que tengas, sin añadir más cartas.",
    ],
    [
      "Doblar",
      "Con esta jugada duplicas tu apuesta original a cambio de recibir una única carta.",
    ],
    [
      "Separar",
      "Consiste en separar dos cartas iguales para poder jugarla en manos diferentes.",
    ],
  ];

  // Games Data
  const live_games = [
    {
      name: "Multihand Classic Blackjack 6 Deck",
      img: "MGSMultihandClassicBlackjack6Deck_Square",
      sponsor: "MGS",
    },
    {
      name: "Live Blackjack",
      img: "EVGLiveBlackjack_Square",
      sponsor: "EVG",
    },
    {
      name: "Live Infinite Blackjack",
      img: "EVGLiveInfiniteBlackjack_Square",
      sponsor: "EVG",
    },
    {
      name: "Live Lightning Blackjack",
      img: "EVGLiveLightningBlackjack_Square",
      sponsor: "EVG",
    },
    {
      name: "Live Speed Blackjack",
      img: "EVGLiveSpeedBlackjack_Square",
      sponsor: "EVG",
    },
    {
      name: "Live Free Bet Blackjack",
      img: "EVGLiveFreeBetBlackjack_Square",
      sponsor: "EVG",
    },
  ];

  const como_juega = {
    id: "como_juega",
    h2: "¿Cómo jugar al Blackjack?",
    p: "Si esta es la primera vez que vas a probar este juego, lo más importante será que tengas en cuenta cómo se juega y las reglas principales para que tus partidas sean emocionantes.",
    list: [
      "En este juego solo tenés que pensar en un número: Esa cifra tiene que ser el 21 ya que si lo conseguís la victoria estará asegurada.",
      "El valor de las cartas es muy importante: Del 2 al 10 su valor es dicha cifra, el J, Q o K tienen el valor de 10 y el AS podrá ser usado como 1 u 11.",
    ],
  };

  const reglas = {
    id: "reglas",
    h2: "Reglas para jugar Blackjack ",
    p: {
      p1: "Para aprender a jugar como una máquina solo tenés que memorizar estos 7 pasos:",
      list: [
        "Seleccionar la cantidad que querés apostar en cada partida.",
        "El croupier se encargará de repartir 2 cartas visibles a cada jugador y dejará descubierta 1 más para sí mismo.",
        "De acuerdo con la mano del croupier, cada jugador podrá decidir si se planta con sus dos cartas o pide más cartas.",
        "Posteriormente el croupier hará lo mismo con su mano.",
        "El objetivo será conseguir una mano lo más cercana o igual a 21 pero sin pasarse de dicha cantidad, ya que si se rebasa la cifra, automáticamente la mano se convierte en perdedora.",
        "Si la mano de un jugador es igual a la del croupier, se declara empate y se devuelve la apuesta.",
        "Si tenés la suerte de sacar una mano con AS y figura el pago será de 3x2 o si tu partida es ganadora con otra combinación, el pago correspondiente será de 1x1",
      ],
      pi: [
        "Durante cada partida habrá ciertos momentos en que podés realizar acciones como estrategia de juego",
        "Cada máquina de slot contiene un conjunto único de símbolos los cuales determinan cuánto dinero se gana cuando el mismo símbolo se muestra múltiples veces en una sola línea de pago. Cada juego de tragamonedas contiene una tabla de pagos que muestra la cantidad a pagar como recompensa de cada símbolo.",
        "El número de máquinas de slot que un casino tradicional puede tener se ve limitado por el espacio físico que un piso tiene. Casinos online a menudo contienen cientos de diferentes temas de slot a elegir, y ya que no hay limitaciones físicas, los usuarios no tienen que esperar para jugar su juego favorito.",
      ],
    },
  };

  const secretos = {
    id: "secretos",
    h2: "Secretos para jugar 21 blackjack",
    p: [
      "Pedir carta: Solo cuando creas que tu mano es un tanto baja para alcanzar el número 21.",
      "Plantarse: Aquí es cuando vale usar tu póker face ya que creés que tu mano es lo suficientemente buena para ganar.",
      "Doblar: Una apuesta arriesgada que consiste en duplicar el monto apostado justo después de recibir las dos primeras cartas. ¡Todo o nada!",
      "Separar: Esto suele hacerse cuando la mano está compuesta por dos figuras y se crea dos manos independientes, las cuales deben de tener la misma apuesta.",
    ],
  };
  const estrategias = {
    id: "estrategias",
    h2: "Estrategias para jugar Blackjack en Vivo",
    p: [
      "Podés convertirte en todo un estratega de este juego. Uno de los principales objetivos es aprender a diferenciar y clasificar el tipo de cartas. Puede haber cartas duras o cartas débiles. El 7, 8, 9, 10 y As son cartas fuertes; 2, 3, 4, 5 y 6 son cartas débiles. Dependiendo el tipo de cartas que tienes es que se recomienda pedir otra, plantarse o incluso separar.",
      "Los trucos de las pelis no valen para online. Si pensabas que por haber visto 3 o más veces la parte de cómo contar cartas ya podías hacerlo, estás equivocado. Este truco solo vale para Casinos físicos ya que las cartas se barajan y reparten tras cada partida, de modo que una misma carta puede aparecer en varias partidas seguidas.",
      "Decidí cuando parar y si tu mano alcanza el 17, mejor ponerle un stop antes de que te pases por querer acercarte aún más al 21. Las posibilidades de que tu mano se pase son muy elevadas si optás por pedir otra carta. Lo mejor es aguantar y esperar que la mano que tenga que correr el riesgo sea la del croupier.",
      "Si tenés suerte y recibís una mano con 8-8 o AS-AS, la opción que tenés que considerar es la de dividir cartas ya que 16 de las 52 cartas de la baraja tienen un valor de 10, por lo tanto las probabilidades de ganar son altísimas.",
      "Bueno, esto solo ha sido un adelanto de todo lo que podés encontrar dentro de toda la variedad de juegos de slots, ruleta y apuestas en Codere.",
      "¡Aceptá el desafío!",
    ],
    table_img:
      "https://www.codere.bet.ar/_catalogs/masterpage/codere/images/seoPageBlackjacktabla.jpg",
  };

  const preguntas = {
    id: "preguntas",
    h2: "Preguntas Frecuentes sobre el blackjack online",
    sub: [
      {
        h3: "¿Cómo se juega al blackjack?",
        p: "El objetivo de este juego es sumar 21 puntos o no pasarse de esta cifra, pero siempre sobrepasando el valor que tiene el crupier para ganar la apuesta.",
      },
      {
        h3: "¿Cómo se cuentan las cartas en el blackjack?",
        p: "Dale el valor de -1 a las cartas altas (del 10 al A), +1 a las bajas (del 2 al 6) y 0 al resto. Empieza a contar tras el reparto dando el valor a cada carta que sale de la baraja.",
      },
      {
        h3: "¿Cómo ganar dinero en el juego 21?",
        p: "Hay dos tipos o estilos de blackjack, el europeo y el americano, que, aunque parezcan iguales, tienen unas pequeñas diferencias: En el americano, el crupier se reparte dos cartas, una descubierta y otra cubierta, junto con los otros jugadores. En el europeo solo se reparte una carta descubierta y dependiendo de lo que haya salido deben pasar otra ronda de apuestas antes de recibir el siguiente naipe.",
      },
      {
        h3: "¿Qué significa blackjack?",
        p: "El juego consiste en sumar un valor lo más próximo a 21 pero sin pasarse. Esta jugada se conoce como Blackjack o 21 natural.",
      },
    ],
  };

  return (
    <div className="cas-seo">
      <Helmet>
        <title>{title}</title>
        <link
          rel="canonical"
          href="https://www.codere.bet.ar/casino/blackjack"
        />

        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      {/* <Navigations index={props.index} type={1} /> */}
      <Floating text="¡El mejor Blackjack!" juega={true} />
      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.bet.ar/seopages/casino/assets/blackjack/${
            props.flag ? "M" : "D"
          }-Header.webp)`,
          backgroundSize: "cover",
        }}
      ></div>

      <Container style={{ color: "#fff" }}>
        <h1 className="header mt-4 mb-3">{top_par.h1}</h1>
        {top_par.p.map((par, k) => (
          <p key={k}>{par}</p>
        ))}

        {/* Table */}
        {!props.flag ? (
          <TableOfContents table={table_of_contents_list} />
        ) : null}

        <h2 id={como_juega.id} className="mt-4 mb-3">
          {como_juega.h2}
        </h2>
        <p>{como_juega.p}</p>

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

        <div id={reglas.id}>
          <h2 className="mt-4 mb-3">{reglas.h2}</h2>
          <p>{reglas.p1}</p>
          <ol>
            {reglas.p.list.map((li, k) => (
              <li key={k}>{li}</li>
            ))}
          </ol>
          {reglas.p.pi.map((p, k) => (
            <p key={k}>{p}</p>
          ))}
        </div>
        <div id={secretos.id}>
          <h2 className="mt-4 mb-3">{secretos.h2}</h2>
          {secretos.p.map((pi, k) => (
            <p key={k}>{pi}</p>
          ))}
        </div>

        <div id={estrategias.id}>
          <h2 className="mt-4 mb-3">{estrategias.h2}</h2>
          <div className="estrategias_container">
            {estrategias.p.map((pi, k) => (
              <span key={k}>
                {k === 1 ? (
                  <LazyLoadImage
                    style={{ margin: "auto", display: "flex", maxWidth: "90%" }}
                    src={estrategias.table_img}
                  />
                ) : null}
                <p>{pi}</p>
              </span>
            ))}
          </div>
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
