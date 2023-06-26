import Navigations from "../Navigations";
import { useState } from "react";
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

export default function CasinoLive(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const game_prefix =
    "https://m.caba.codere.bet.ar/deportes/#/CasinoPage?playgame=";

  const title = "Juega en el Casino en Vivo #1 de Argentina | Codere®";
  const description =
    "Si te justan los juegos de casino llegaste al lugar indicado. Aquí vas a disfrutar de las experiencias en vivo desde cualquier lugar o sin salir de casa.";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se ocupan descargas para jugar en Codere?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los juegos online de casino en vivo que posee Codere no requiere una descarga por lo que podrás jugarlo directamente desde el sitio web tanto en un móvil como en un ordenador.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué es seguro jugar en el Casino online de Codere?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Porque contamos con la habilitación provincial correspondiente, por lo que somos una entidad de juego oficial en la que tendrás la tranquilidad de jugar respaldado por los organismos reguladores.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo apuesto en vivo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Debés ingresar al sitio web con tu usuario y contraseña, elegir la opción de “Casino” y luego la sección de “En vivo”. Habiendo realizado tu depósito para tener fondos con los que jugar.",
        },
      },
    ],
  };

  const top_par = {
    h1: "Divertite con los juegos online de Casino Codere",
    p: "Si te justan los llegaste al lugar indicado. Te mostraremos en detalle de que se trata la nueva experiencia en juegos de casino en vivo que tiene Codere para vos. Vas a disfrutar de experiencias de juego nunca antes vistas, desde donde te quede cómodo y mediante el dispositivo que prefieras.",
  };

  // Table of Contents  \\
  const table_of_contents_list = [
    {
      title: "Las mejores mesas de casino en vivo de CABA están en Codere",
      id: "mejores",
    },
    {
      title: "Conoce los mejores Juegos en vivo para Argentina",
      id: "conoce",
    },
    {
      title: "Beneficios de jugar en el Casino Online de Codere",
      id: "beneficios",
    },
    {
      title: "Preguntas frecuentes",
      id: "preguntas",
    },
  ];

  // Games Data
  const live_games = [
    {
      name: "Live Auto Roulette",
      img: "EVGLiveAutoRoulette_Square",
      sponsor: "EVG",
    },
    {
      name: "Live Roulette",
      img: "EVGLiveRoulette_Square",
      sponsor: "EVG",
    },
    {
      name: "Live XXXtreme Lightning Roulette",
      img: "EVGLiveXXXtremeLightningRoulette_Square",
      sponsor: "EVG",
    },
    {
      name: "Live Blackjack",
      img: "EVGLiveBlackjack_Square",
      sponsor: "EVG",
    },
    {
      name: "Live Infinite Blackjack",
      img: "EVGInfiniteBlackjack_Square",
      sponsor: "EVG",
    },
    {
      name: "Live Immersive Roulette",
      img: "EVGLiveImmersiveRoulette_Square",
      sponsor: "EVG",
    },
  ];

  const mejores = {
    id: "mejores",
    h2: "Las mejores mesas de casino en vivo de CABA están en Codere",
    p: "Disfrutá de la más amplia gama en juegos de casino online y ahora también en vivo. Contamos con salas de Ruleta, Blackjack y Baccarat en las que podrás conversar con los jugadores y el croupier en vivo como si estuvieras físicamente ahí. Accedé desde el dispositivo que quieras, desde donde estés para sentir la nueva experiencia que tenemos para vos.",
    inner: [
      {
        h3: "Interactúa con los croupiers en vivo",
        p: "En los juegos de casino en vivo verás al croupier interactuar con los participantes que se encuentren en la sala en tiempo real. Disfrutarás de una experiencia completa desde donde te quede cómodo.",
      },
      {
        h3: "Chatea con otros jugadores",
        p: "Mediante el chat en vivo, los juegos de casino de Codere te permiten conversar, polemizar y discutir con otros participantes que se encuentren en ese momento jugando.",
      },
    ],
  };
  const conoce = {
    id: "conoce",
    h2: "Conoce los mejores Juegos en vivo para Argentina",
    p: "Si llegaste hasta acá seguramente estés comenzando a disfrutar de las experiencias que el juego online tiene para vos. Para que puedas aprovecharlas mejor, te dejamos una serie de juegos destacados que si o si debes probar.",
    inner: [
      {
        h3: "Live Roulette:",
        p: "Una clásica ruleta en vivo que te hará sentir la emoción de estar en la sala. Desafia las probabilidades con los paneles exclusivos y la información minuto a minuto que te brinda este juego.",
      },
      {
        h3: "Live Blackjack:",
        p: "Juntá 21 mientras conversas con los otros participantes y ves al croupier en vivo distribuir las cartas para cada uno de los jugadores y para sí mismo.",
      },
      {
        h3: "Double Ball Roullette:",
        p: "Una innovadora ruleta con dos bolillas en la que todo es especial y las combinaciones son muchas más. Probá todas las posibilidades diferentes que un juego con dos bolillas ganadoras te puede ofrecer.",
      },
      {
        h3: "Baccarat Live:",
        p: "Disfrutá la emoción de sentirte parte del juego como nunca antes. Podrás elegir de que lado quedarte o mismo hacerlo en el medio si así lo prefieres. Todo lo que se necesario para vencer en la mano y multiplicar tus ganancias.",
      },
      {
        h3: "Free Bet Blackjack:",
        p: "Jugá con una mano en común y decidí el futuro de tus cartas. ¿Te quedas o seguís? Así iras definiendo el destino de tus apuestas y tus retribuciones serán más grandes a medida que te animés a ir por todo.",
      },
      {
        h3: "XXXTreme Lighthing Roulette:",
        p: "Una increíble ruleta con multiplicadores de hasta x600 en donde cae el rayo. Tu suerte puede cambiar como el clima en un día inestable porque la bolilla, la suerte y el rayo harán que todo este a tu favor.",
      },
      {
        h3: "Peek Bacarat:",
        p: "Elegí un lado: los jugadores, la banca o empate. Decidí si aumentar la apuesta o mantener y ganá. Podrás conversar con los demás participantes que opinan como vos y hasta polemizar con aquellos que no o mismo con el crupier.",
      },
      {
        h3: "Immersive Roulette:",
        p: "¿Negro, blanco o cero? Mira la ruleta girar en vivo con repeticiones en cámara lenta. Como el nombre lo indica, esta experiencia de juego es tan real que te sentirás inmerso en ella.",
      },
      {
        h3: "Gold Bar Roulette:",
        p: "Llevate el oro en disputa en esta emocionante ruleta con multiplicadores y una escenografía increíble. El dorado, los números multiplicados y la conducción de grandes crupiers que estarán ahí para conversar lo que quieras del juego hacen de este un gran juego.",
      },
    ],
  };

  const beneficios = {
    id: "beneficios",
    h2: "Beneficios de jugar en el Casino Online de Codere",
    p: "Jugar con Codere tiene muchos beneficios. El primero y más importante es que lo harás con una casa de apuestas ciento por ciento legal y con las habitaciones correspondientes. Además, contarás con depósitos que se acreditan al instante por Mercado Pago, asistencia virtual y telefónica todos los días. Por otra parte, accederás a la más amplia gama de juegos de casino online del mercado y también apuestas deportivas de todos los deportes y ligas del mundo.",
  };

  const preguntas = {
    id: "preguntas",
    h2: "Preguntas frecuentes sobre el Casino Online",
    sub: [
      {
        h3: "¿Se ocupan descargas para jugar en Codere?",
        p: "Los juegos online de casino en vivo que posee Codere no requiere una descarga por lo que podrás jugarlo directamente desde el sitio web tanto en un móvil como en un ordenador.",
      },
      {
        h3: "¿Por qué es seguro jugar en el Casino online de Codere?",
        p: "Porque contamos con la habilitación provincial correspondiente, por lo que somos una entidad de juego oficial en la que tendrás la tranquilidad de jugar respaldado por los organismos reguladores.",
      },
      {
        h3: "¿Cómo apuesto en vivo?",
        p: "Debés ingresar al sitio web con tu usuario y contraseña, elegir la opción de “Casino” y luego la sección de “En vivo”. Habiendo realizado tu depósito para tener fondos con los que jugar.",
      },
    ],
  };

  return (
    <div className="cas-seo">
      <Helmet>
        <title>{title}</title>
        <link
          rel="canonical"
          href="https://www.codere.bet.ar/casino/casino-en-vivo"
        />

        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.codere.es/casino/casino-en-vivo"
        />
        <link
          rel="alternate"
          hreflang="en-mx"
          href="https://www.codere.mx/casino-en-vivo"
        />
        <link
          rel="alternate"
          hreflang="es-mx"
          href="https://www.codere.mx/casino-en-vivo"
        />
        <link
          rel="alternate"
          hreflang="es-co"
          href="https://www.codere.com.co/casino/casino-en-vivo"
        />
        <link
          rel="alternate"
          hreflang="en-co"
          href="https://www.codere.com.co/casino/casino-en-vivo"
        />
        <link
          rel="alternate"
          hreflang="es-ar"
          href="https://www.codere.bet.ar/casino/casino-en-vivo"
        />
        <link
          rel="alternate"
          hreflang="en-ar"
          href="https://www.codere.bet.ar/casino/casino-en-vivo"
        />
        <link
          rel="alternate"
          hreflang="es-pa"
          href="https://www.codere.pa/casino/casino-en-vivo"
        />
        <link
          rel="alternate"
          hreflang="en-pa"
          href="https://www.codere.pa/casino/casino-en-vivo"
        />
        <meta name="description" content={description} />

        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      {/* <Navigations index={props.index} type={1} /> */}
      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.bet.ar/seopages/casino/assets/casino-live/${
            props.flag ? "M" : "D"
          }-Header.webp)`,
          backgroundSize: "cover",
        }}
      >
        <Floating text="¡El mejor casino En Vivo!" juega={true} />
      </div>

      <Container style={{ color: "#fff" }}>
        <h1 className="header mt-4 mb-3">{top_par.h1}</h1>
        <p>{top_par.p}</p>

        {/* Table */}
        {!props.flag ? (
          <TableOfContents table={table_of_contents_list} />
        ) : null}

        <h2 id={mejores.id} className="mt-4 mb-3">
          {mejores.h2}
        </h2>
        <p>{mejores.p}</p>
        <Container>
          {mejores.inner.map((v, k) => (
            <div key={k}>
              <h3 style={{ color: "#79c000" }}>{v.h3}</h3>
              <p>{v.p}</p>
            </div>
          ))}
        </Container>
        {/* Games */}

        <h2 id={conoce.id} className="mt-4 mb-3">
          {conoce.h2}
        </h2>
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

        {conoce.inner.map((context, k) => (
          <div key={k}>
            <h3 style={{ color: "#79c000" }}>{context.h3}</h3>
            <p>{context.p}</p>
          </div>
        ))}

        <h2 id={beneficios.id} className="mt-4 mb-3">
          {beneficios.h2}
        </h2>
        <p>{beneficios.p}</p>

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
