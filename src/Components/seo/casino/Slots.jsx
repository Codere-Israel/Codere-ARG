import Navigations from "../Navigations";
import Floating from "../Floating";
import {
  Container,
  Accordion,
  Row,
  Col,
  NavLink,
  Table,
  Button,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TableOfContents from "../TableOfContents";
import { regis } from "../../../App";
import { useEffect } from "react";

export default function Slots(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const game_prefix = "https://m.codere.bet.ar/deportes/#/CasinoPage?playgame=";

  const title =
    "Tragamonedas Online » Prueba tu suerte en las Slots | Codere®";
  const description =
    "Los juegos de slots son de las partes más fascinantes del casino online de Codere. Disfruta las mejores maquinas tragamonedas en línea.";

  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo ganar en los slots?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Para ganar en los slots, debe coincidir varias veces el mismo símbolo en una sola línea de pago para llevarse así el premio.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo jugar a las slots?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Elige el slot online que prefieras e inicialo en tu dispositivo. Elegí la cantidad que desees apostar y a cuántas líneas de pago querés jugar. Utilizá el botón de “Apuesta Máxima” si querés jugar en todas las líneas a la vez. Dale a “girar” para que los rodillos empiecen a moverse. Si has ganado, el juego mostrará tus ganancias en pantalla, y también la oportunidad de jugártelas en una ronda de bonificación. Si optás por hacerlo, puedes ganar premios aún mayores.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué son las líneas en los slots?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las líneas de pago son las diferentes líneas donde obtendrás un premio cuando aparezca una combinación de símbolos determinada por el desarrollador del slot",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es el RTP en las tragamonedas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Detrás de estas tres letras, se esconde el término inglés “return to player rate”, que en español sería la tasa de retorno al jugador. Es el porcentaje de recuperación del dinero jugado a largo plazo en todas tus apuestas en un slot. Es un dato que deberíamos tener en cuenta a la hora de decidirnos por un slot u otro.",
        },
      },
    ],
  };

  const top_par = {
    h1: "Jugá online a las más famosas Slots de Argentina",
  };

  // Table of Contents  \\
  const table_of_contents_list = [
    {
      title: "Slots en línea",
      id: "linea",
    },
    {
      title: "¿Cómo jugar a las Tragamonedas Online?",
      id: "como_jugar",
    },
    {
      title: "Trucos de Slots – ¿Realmente funcionan?",
      id: "trucos",
    },

    {
      title: "¿Codere ofrece bonos en las Máquinas de Slot?",
      id: "bonos",
    },
    {
      title: "Preguntas frecuentes sobre los slots online",
      id: "preguntas",
    },
  ];

  // Games Data
  const live_games = [
    {
      name: "Aviator",
      img: "PRPAviator_Square",
      sponsor: "PRP",
    },
    {
      name: "Blue Wizard",
      img: "PTBlueWizard_Square",
      sponsor: "PT",
    },
    {
      name: "Pharaohs Daughter",
      img: "PTPharaohsDaughter_Square",
      sponsor: "PT",
    },
    {
      name: "Eternal Lady",
      img: "PTEternalLady_Square",
      sponsor: "PT",
    },
    {
      name: "Tiger Stacks",
      img: "PTTigerStacks_Square",
      sponsor: "PT",
    },
    {
      name: "Sky Queen",
      img: "PTSkyQueen_Square",
      sponsor: "PT",
    },
    {
      name: "Age of the Gods Apollo Power",
      img: "PTAgeoftheGodsApolloPower_Square",
      sponsor: "PT",
    },
    {
      name: "Fire Blaze Golden Amazing Factory",
      img: "PTFireBlazeGoldenAmazingFactory_Square",
      sponsor: "PT",
    },
    {
      name: "Age of the Gods Ruler of the Seas",
      img: "PTAgeoftheGodsRuleroftheSeas_Square",
      sponsor: "PT",
    },
    {
      name: "Tsai Shens Gift",
      img: "PTTsaiShensGift_Square",
      sponsor: "PT",
    },
    {
      name: "5 MARIACHIS",
      img: "HAB5MARIACHIS_Square",
      sponsor: "HAB",
    },
    {
      name: "Age of the Gods Epic Troy",
      img: "PTAgeoftheGodsEpicTroy_Square",
      sponsor: "PT",
    },
  ];

  const como_jugar = {
    id: "como_jugar",
    h2: "¿Cómo jugar a las tragamonedas online?",
    p: [
      "Antes de que juegues en una tragamoneda online, vas a querer entender cómo funciona el juego. Las máquinas clásicas de slots cuentan con tres columnas y tres filas, pero esto puede variar ampliamente cuando estés jugando juegos de slot online, debido a los diferentes tipos que podés encontrar.",
      "Cada máquina de tragamonedas cuenta con un conjunto único de líneas de pago. Para que los jugadores de slots puedan ganar, deben coincidir varias veces el mismo símbolo en una sola línea de pago. Las líneas de pago no siempre corren en una línea recta.",
      "Cada máquina de slot contiene un conjunto único de símbolos los cuales determinan cuánto dinero se gana cuando el mismo símbolo se muestra múltiples veces en una sola línea de pago. Cada juego de tragamonedas contiene una tabla de pagos que muestra la cantidad a pagar como recompensa de cada símbolo.",
      "El número de máquinas de slot que un casino tradicional puede tener se ve limitado por el espacio físico que un piso tiene. Casinos online a menudo contienen cientos de diferentes temas de slot a elegir, y ya que no hay limitaciones físicas, los usuarios no tienen que esperar para jugar su juego favorito.",
    ],
    inner: {
      h3: "Slot Online Vs. las Maquinas de Slot: Diferencias y Similitudes",
      p: [
        "Aunque las reglas básicas del juego se mantienen iguales en ambas, online y slots en vivo, existen grandes diferencias importantes.",
        "Pese a que el clásico slot Las Vegas contiene solo tres columnas y tres filas, los slots online típicamente contienen por lo menos cinco columnas, aunque este número puede ser incluso mayor dependiendo del juego específico. Desde que los slots online tienen más columnas, estas también contienen más líneas de pago, lo que significa que hay más chances de ganar con cada giro.",
        "Adicional a las columnas de más, las máquinas slot online también contienen muchos más temas interactivos. Juegos de slots de casino online combina la emoción de las máquinas de slot, con gráficos 3D y las historias inmersivas de los video juegos.",
      ],
    },
  };

  const linea = {
    id: "linea",
    h2: "Las Slots en línea",
    p: [
      "Los juegos de slots son una de las partes más fascinantes del casino online ​​deCodere. Y ahora te brindamos la posibilidad de poder jugar a las máquinas tragamonedas desde la palma de tu mano, con tu smartphone, en la app de Codere, o desde tu tablet o PC.",
      "Cada juego de slot que encuentres en el casino online de Codere contará con un conjunto único de líneas de pago. Para ganar, deberás hacer coincidir un símbolo concreto en una de estas líneas. Así de sencillo.",
      "Elegí entre muchas de nuestras opciones de juegos de máquinas tragamonedas, juegos de mesa clásicos y sus variables, así como nuestra emocionanteruleta en vivo, bingos o cualquiera que sea tu juego preferido. Podés disfrutar jugando y aprovechando nuestras promociones y bonificaciones que ofrecemos constantemente, incluso sin depósito inicial y con las mejores condiciones de retiro de tus ganancias, las cuales podés cobrar en efectivo.",
      "Visitar un casino es una de las experiencias más emocionantes del mundo. Las luces brillantes de las máquinas tragamonedas, combinadas con los gritos de alegría de los grandes ganadores que permanecen en el aire, son suficientes para hacer que el corazón de cualquiera se acelere. No hay nada con que compararlo. El único problema es que los casinos no son siempre fácilmente accesibles y con ofertas limitadas. Si no vivís cerca de uno, probablemente no juegues juegos de casino tanto como quisieras.",
      "Los sitios de casinos online han cambiado esto. Losjuegos de casino onlineeliminan todas las limitaciones de los casinos en tierra, permitiéndote jugar desde cualquier lugar y en cualquier momento, incluso desde la comodidad de tu propia casa.",
    ],
  };

  const trucos = {
    id: "trucos",
    h2: "Trucos de Slots – ¿Realmente funcionan?",
    p1: "Las máquinas de slot son principalmente juegos de suerte, lo que significa que no hay una gran cantidad de estrategias que puedas usar para mejorar tus posibilidades. Dicho esto, hay algunas cosas que puedas hacer para engañar y ganar mejores pagos.",
    p2: "Uno de los más importantes trucos de slot que podés aprender es navegar en sitios web www slot que ofrecen bonos sin depósitos. Los casinos son negocios y, como cualquier otro negocio, deben atraer clientes. Como resultado, los casinos a menudo ofrecen promociones especiales de introducción para nuevos usuarios con la esperanza de que se conviertan en clientes leales. Al usar bono sin depósito, los usuarios de casinos online incrementan sus posibilidades de ganar en grande con poca o mínima inversión.",
  };
  const bonos = {
    id: "bonos",
    h2: "¿Codere ofrece bonos en las Máquinas de Slot?",
    p: "Codere ofrece uno de los mejores códigos de bonos de slot en la web. A los usuarios de Codere se les ofrecen bonos que van desde giradas gratis hasta depósitos en dinero real. Con cada bono que un usuario reclama, su oportunidad de obtener grandes ganancias, incrementa. Muchas personas han usado bonos de slot para ganar grandes pagos jugando Poker slots.",
    inner: [
      {
        h3: "Los Juegos de Slot más populares en Codere",
        list: [
          {
            bolded: "Slot Vikingos",
            text: "Sumate a la aventura con los mejores guerreros de todos los tiempos, ¡los Vikingos! Elegí tu hacha favorita y tu casco con cuernos porque es tiempo de ir a los mares.",
          },
          {
            bolded: "Oz Slots",
            text: "Embarcate en un viaje por el camino de los Ladrillos Amarillos con Oz Slots. Unite a Dorothy y sus amigos Oz en este juego de slot de cinco columnas y tres filas que trae el mundo de Oz a tu casa.",
          },
          {
            bolded: "Pharaoh Slots",
            text: "Descubrí los misterios del antiguo Egipto en esta emocionante experiencia de slot. No encontrarás un juego que contenga más significado de slot que este histórico viaje de casino.",
          },
          {
            bolded: "Tragamonedas Java",
            text: "¿Listo para más diversión con slots? Viajá a Indonesia y explorá la isla volcánica de Java. Recorré las selvas tropicales mientras empezás tu búsqueda de pagos masivos.",
          },
        ],
      },
      {
        h3: "¡Juega tragamonedas!",
        p1: "Si ya conocés los slots tradicionales, ¡ya está! Descubrí los juegos del casino online de Codere, aumentá el número de columnas, las líneas de pago y tus posibilidades de ganar. Además, ¡te ofrecemos un bono de bienvenida increíble y bonificaciones todas las semanas para que ganes todavía más! Y eso sin contar los premios de jackpots progresivos y millonarios adicionales que tendrás en muchos de nuestros juegos de slots…",
        p2: "¡Descubrí las diferentes ofertas, aceptá el desafío y empezá a realizar tus apuestas!",
      },
    ],
  };

  const preguntas = {
    id: "preguntas",
    h2: "Preguntas frecuentes sobre los slots online",
    sub: [
      {
        h3: "¿Cómo ganar en los slots?",
        p: "Para ganar en los slots, debe coincidir varias veces el mismo símbolo en una sola línea de pago para llevarse así el premio.",
      },
      {
        h3: "¿Cómo jugar a las slots?",
        p: "Elige el slot online que prefieras e inicialo en tu dispositivo. Elegí la cantidad que desees apostar y a cuántas líneas de pago querés jugar. Utilizá el botón de “Apuesta Máxima” si querés jugar en todas las líneas a la vez. Dale a “girar” para que los rodillos empiecen a moverse. Si has ganado, el juego mostrará tus ganancias en pantalla, y también la oportunidad de jugártelas en una ronda de bonificación. Si optás por hacerlo, puedes ganar premios aún mayores.",
      },
      {
        h3: "¿Qué son las líneas en los slots?",
        p: "Las líneas de pago son las diferentes líneas donde obtendrás un premio cuando aparezca una combinación de símbolos determinada por el desarrollador del slot.",
      },
      {
        h3: "¿Qué es el RTP en las tragamonedas?",
        p: "Detrás de estas tres letras, se esconde el término inglés “return to player rate”, que en español sería la tasa de retorno al jugador. Es el porcentaje de recuperación del dinero jugado a largo plazo en todas tus apuestas en un slot. Es un dato que deberíamos tener en cuenta a la hora de decidirnos por un slot u otro.",
      },
    ],
  };

  return (
    <div className="cas-seo">
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href="https://www.codere.bet.ar/casino/slots" />

        <meta name="description" content={description} />

        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      {/* <Navigations index={props.index} type={1} /> */}
      <Floating text="¡Las mejores Slots!" juega={true} />
      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.bet.ar/seopages/casino/assets/slots/${
            props.flag ? "M" : "D"
          }-Header.webp)`,
          backgroundSize: "cover",
        }}
      ></div>

      <Container style={{ color: "#fff" }}>
        <h1 className="header mt-4 mb-3">{top_par.h1}</h1>

        {!props.flag ? (
          <TableOfContents table={table_of_contents_list} />
        ) : null}

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

        <h2 id={linea.id} className="mt-4 mb-3">
          {linea.h2}
        </h2>
        {linea.p.map((line, k) => (
          <p key={k}>{line}</p>
        ))}

        <h2 id={como_jugar.id} className="mt-4 mb-3">
          {como_jugar.h2}
        </h2>
        {como_jugar.p.map((par, k) => (
          <p key={k}>{par}</p>
        ))}
        <h3>{como_jugar.inner.h3}</h3>
        {como_jugar.inner.p.map((par, k) => (
          <p key={k}>{par}</p>
        ))}
        {/* Games */}

        <h2 id={trucos.id} className="mt-4 mb-3">
          {trucos.h2}
        </h2>
        <p>{trucos.p}</p>

        <h2 id={bonos.id} className="mt-4 mb-3">
          {bonos.h2}
        </h2>

        <p>{bonos.p}</p>
        {bonos.inner.map((inn, k) => (
          <div key={k}>
            <h3>{inn.h3}</h3>
            {inn.list ? (
              <ul>
                {inn.list.map((li, k) => (
                  <li key={k}>
                    <p>
                      <strong>{li.bolded + "- "}</strong>
                      {li.text}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <p>{inn.p1}</p>
                <p>{inn.p2}</p>
              </>
            )}
          </div>
        ))}

        <h2 id={preguntas.id} className="mt-4 mb-3">
          {preguntas.h2}
        </h2>

        <Accordion>
          {preguntas.sub.map((s, k) => (
            <Accordion.Item key={k} eventKey={k}>
              <Accordion.Header as={"h3"}>{s.h3}</Accordion.Header>
              <Accordion.Body as={"p"}>{s.p}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <Button href={regis} className="cas-reg-btn" rel="nofollow">
          Registrate
        </Button>
      </Container>
    </div>
  );
}
