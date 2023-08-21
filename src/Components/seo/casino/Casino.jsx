import Navigations from "../Navigations";
import { useState } from "react";
import Floating from "../Floating";
import {
  Image,
  Placeholder,
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
import { Link } from "react-router-dom";
import { regis } from "../../../App";
import { useEffect } from "react";

export default function Casino(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const game_prefix =
    "https://m.caba.codere.bet.ar/deportes/#/CasinoPage?playgame=";

  const title = "El Mejor Casino De Argentina Para Jugar Online | Codere®";
  const description =
    "¡Jugá en el casino online y pasa horas de diversión en Codere! Aceptá el desafío, regístrate y disfrutá de las ventajas que tiene jugar en línea.";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo jugar en un Casino Online en Castellano? Acá están los Primeros Pasos",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Jugar en un casino online en castellano es muy fácil una vez que conozcas unos pocos pasos básicos y consejos para empezar. Primero, vas a querer realizar una pequeña investigación. Empezá utilizando un motor de búsqueda que averigüe el mejor casino online para vos. Cada casino tiene un conjunto de pros y contras. Dependiendo de la plataforma, cada casino online ofrece su propio vuelco a la experiencia de jugar en línea. Una vez que encontraste el casino que mejor se ajusta a tus deseos de juego, es tiempo de registrarse en una cuenta. Antes de que divulgues cualquier información personal, como los datos de tu tarjeta, es importante verificar la seguridad del sitio. Un casino online debería ofrecer no menos de 128-bit SSL de cifrado digital. Cualquier casino online legítimo tendrá sus condiciones de seguridad fácilmente accesible a sus posibles usuarios. Luego de que estés seguro que tu elección de casino online es confiable, ¡estás listo para registrarte, realizar tus apuestas y jugar!",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es un Bono Casino sin Depósito?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Una vez que elegiste un casino online en castellano, estás listo para elegir todas las opciones de juegos de casino y bonos del sitio. Cuando empieces a navegar, vas a notar que el sitio ofrece un bono casino sin deposito. ¿Qué significa esto exactamente? Algunos sitios de casino ofrecen bonos que no requieren que el usuario realice cualquier depósito adicional, lo que significa que no se requiere de dinero para depositar. El bono casino sin depósito puede incluir tiradas gratis o incluso dinero gratis en el balance de tu cuenta. Algunos casinos online incluso ofrecen bonos sin depósito cuando los usuarios registran una cuenta por primera vez en sus sitios.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo jugar en Codere sin realizar un depósito inicial? Conocé los Beneficios del Casino Online Sin Depósito",
        acceptedAnswer: {
          "@type": "Answer",
          text: "¡Sí! Codere te permite jugar en el casino online sin un depósito inicial. Esto te permite jugar en los increíbles juegos casino de Codere sin tener que realizar una inversión inicial de ninguna clase. El bono sin depósito inicial de Codere lo convierte en una de las mejores opciones de casino online.Los juegos de casino online sin depósito no son solo convenientes, asequibles y entretenidos, también son muy fáciles de aprender. Ahora que ya investigaste sobre el bono sin deposito, encontraste un casino que sea el mejor para vos, examinaste la seguridad del sitio del casino, y navegaste en los juegos más populares, ¡estás listo para empezar a jugar!",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué Codere es el mejor casino online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En el Casino Online de Codere vas a encontrar una variedad increíble de juegos casino como blackjack, ruleta, ruleta en vivo y la última incorporación a nuestro catálogo, ¡el videobingo! Recordá que en todos los juegos de casino tus ganancias no serán en bono y podrás retirarlas en cualquier momento sin problemas. Encontrá en el Casino Online de Codere, el mejor casino online, una gran variedad de títulos de juegos que te están esperando: Torrente, Chiquito, Age of Gods, Top Trump Football Stars, Cat in Vegas y muchos más. Muchos slots tendrán premios extra y contarán con unos “jackpots” espectaculares. Gracias al buscador será fácil encontrarlos y podrás filtrar por tipo de juego, nombre, compañía, pagos… ¡e incluso hacer tu propia lista de slots favoritos! Además, te vas a sorprender con la rapidez de nuestra plataforma, tanto en tu computadora como en tu aplicación móvil.",
        },
      },
    ],
  };

  const top_par = {
    h1: "​Casino Online en CABA con la mejor selección de juegos",
    p: [
      "¡Juega en el casino online con las mejores condiciones y pasa horas de diversión en Codere! Elegí entre la enorme lista de juegos de casino y slots que tendrás al alcance de tu mano, descubrí las últimas novedades del mercado y disfrutá jugando con total seguridad.",
      "Aceptá el desafío, registrate ahora, disfrutá de todas las ventajas que tiene jugar en Codere y empezá a ganar a lo grande.",
      "Un juego de azar donde podrás ganar increíbles premios si tenés suerte, habilidad y sabes cómo utilizar tus giros y avances. Seguramente conozcas las máquinas clásicas de slots con tres columnas y tres filas, pero con los slots online se abre una nueva dimensión para aumentar la diversión.",
      "¿Qué pasa en los casinos que los hace tan emocionantes? Muchas personas dirán que son las luces parpadeantes, los temas coloridos y los grandes jackpots que hacen de las máquinas slot la parte más fascinante de la experiencia de juegos casino.",
      "Las máquinas de slot cuentan con una combinación de suerte y suspenso que las hacen difíciles de resistir. Jugar slots online es la manera perfecta para disfrutar de la emoción de jugar juegos de slot desde la comodidad de tu hogar.",
    ],
  };

  // Table of Contents  \\
  const table_of_contents_list = [
    {
      title: "3 Beneficios de jugar Juegos de Casino Online",
      id: "beneficios",
    },
    {
      title: "Reseña de los Juegos Más Populares de Casino Online Argentina",
      id: "ver",
    },
    {
      title: "Preguntas Frecuentes sobre Casinos Online",
      id: "preguntas",
    },
  ];

  // Table
  const table = [
    ["🏆 Establecido", "1991"],
    ["🎰Juegos ofrecidos", "107"],
    ["🎲 Licencia de juego", "DI-2021-238-GCABA-LOTBA."],
    ["✔️ Moneda", "	Peso Argentino"],
    ["💰Depósito mínimo", "$500 ARS"],
    ["💸 Limites de Retiros", "$500"],
    [
      "💳 Formas de Pago",
      "Tarjeta de debito, Tranferencia Bancaria, DEBIN, Mercado Pago",
    ],
  ];

  // Games Data
  const live_games = [
    {
      name: "First Person Roulette",
      img: "EVGFirstPersonRoulette_Square",
      sponsor: "EVG",
    },
    {
      name: "Live Auto Roulette",
      img: "EVGLiveAutoRoulette_Square",
      sponsor: "EVG",
    },
    {
      name: "9 Pots of Gold",
      img: "MGS9PotsofGold_Square",
      sponsor: "MGS",
    },
    {
      name: "First Person Lightning Roulette",
      img: "EVGFirstPersonLightningRoulette_Square",
      sponsor: "EVG",
    },
    {
      name: "Multihand Classic Blackjack 6 Deck",
      img: "MGSMultihandClassicBlackjack6Deck_Square",
      sponsor: "MGS",
    },
    {
      name: "Multifire Roulette",
      img: "MGSMultifireRoulette_Square",
      sponsor: "MGS",
    },
    {
      name: "9 Masks of Fire",
      img: "MGS9MasksofFire_Square",
      sponsor: "MGS",
    },
    {
      name: "Live Roulette",
      img: "EVGLiveRoulette_Square",
      sponsor: "EVG",
    },
    {
      name: "6 Tokens of Gold",
      img: "MGS6TokensofGold_Square",
      sponsor: "MGS",
    },
    {
      name: "European Roulette",
      img: "MGSEuropeanRoulette_Square",
      sponsor: "MGS",
    },
    {
      name: "Queen of Alexandria",
      img: "MGSQueenofAlexandria_Square",
      sponsor: "MGS",
    },
    {
      name: "Live XXXtreme Lightning Roulette",
      img: "EVGLiveXXXtremeLightningRoulette_Square",
      sponsor: "EVG",
    },
  ];

  const beneficios = {
    id: "beneficios",
    h2: "3 Beneficios de jugar Juegos de Casino Online",
    p1: "Jugar juegos de casino online en castellano trae gran cantidad de beneficios. En muchos casos, los juegos de casino online son incluso más divertidos que aquellos que se juegan en casinos en tierra, principalmente debido a que incrementan la inmersión e interactividad. Acá te dejamos algunos beneficios de jugar juegos de casino online:",
    p2: "Jugá en cualquier lugar y en cualquier momento. No hay necesidad de planear un día de excursión cuando jugás juegos de casino online. En la mayoría de los casinos online podés jugar desde cualquier lugar y en cualquier momento. Diseño del juego. Los juegos de casino online ofrecen una experiencia inmersiva ya que presentan hermosos gráficos en 3D con infinidad de opciones temáticas. Ofertas ilimitadas. Los casinos en tierra tienen una cantidad limitada de espacio físico, lo que significa que la variedad de juegos que ofrecen están restringidos por el tamaño de sus salas. Los mejores sitios de casinos online proveen a sus usuarios muchas opciones de juego",
  };

  const ver = {
    id: "ver",
    h2: "Ver contenido relacionado:",
    links: [
      { name: "BlackJack", url: "/casino/blackJack" },
      { name: "Ruleta Online", url: "/casino/ruelta" },
      { name: "Slots", url: "/casino/slots" },
    ],
  };

  const preguntas = {
    id: "preguntas",
    h2: "Preguntas Frecuentes sobre Casinos Online",
    sub: [
      {
        h3: "¿Cómo jugar en un Casino Online en Castellano? Acá están los Primeros Pasos",
        p: [
          "Jugar en un casino online en castellano es muy fácil una vez que conozcas unos pocos pasos básicos y consejos para empezar. Primero, vas a querer realizar una pequeña investigación. Empezá utilizando un motor de búsqueda que averigüe el mejor casino online para vos. Cada casino tiene un conjunto de pros y contras. Dependiendo de la plataforma, cada casino online ofrece su propio vuelco a la experiencia de jugar en línea.",
          "Una vez que encontraste el casino que mejor se ajusta a tus deseos de juego, es tiempo de registrarte en una cuenta. Antes de que divulguen cualquier información personal, como los datos de tu tarjeta, es importante verificar la seguridad del sitio. Un casino online debería ofrecer no menos de 128-bit SSL de cifrado digital. Cualquier casino online legítimo tendrá sus condiciones de seguridad fácilmente accesible a sus posibles usuarios.",
          "Luego de que estés seguro que tu elección de casino online es confiable, ¡estás listo para registrarte, realizar tus apuestas y jugar!",
        ],
      },
      {
        h3: "¿Qué es un Bono Casino sin Depósito?",
        p: [
          "Una vez que elegiste un casino online en castellano, estás listo para elegir todas las opciones de juegos de casino y bonos del sitio. Cuando empieces a navegar, vas a notar que el sitio ofrece un bono casino sin depósito. ¿Qué significa esto exactamente? Algunos sitios de casino ofrecen bonos que no requieren que el usuario realice ningún depósito adicional, lo que significa que no se requiere de dinero para depositar. El bono casino sin depósito puede incluir tiradas gratis o incluso dinero gratis en el balance de tu cuenta. Algunos casinos online incluso ofrecen bonos sin depósito cuando los usuarios registran una cuenta por primera vez en sus sitios.",
        ],
      },
      {
        h3: "¿Puedo jugar en Codere sin realizar un depósito inicial? Conocé los Beneficios del Casino Online Sin Depósito",
        p: [
          "¡Sí! Codere te permite jugar en el casino online sin un depósito inicial. Esto te permite jugar en los increíbles juegos casino de Codere sin tener que realizar una inversión inicial de ninguna clase. El bono sin depósito inicial de Codere lo convierte en una de las mejores opciones de casino online.",
          "Los juegos de casino online sin depósito no son solo convenientes, asequibles y entretenidos, también son muy fáciles de aprender. Ahora que ya investigaste sobre el bono sin deposito, encontraste un casino que sea el mejor para vos, examinaste la seguridad del sitio del casino, y navegaste en los juegos más populares, ¡estás listo para empezar a jugar!",
        ],
      },
      {
        h3: "¿Por qué Codere es el mejor casino online?",
        p: [
          "En el Casino Online de Codere vas a encontrar una variedad increíble de juegos casino como blackjack, ruleta, ruleta en vivo y la última incorporación a nuestro catálogo, ¡el videobingo! Recordá que en todos los juegos de casino tus ganancias no serán en bono y podrás retirarlas en cualquier momento sin problemas.",
          "Encontrá en el Casino Online de Codere, el mejor casino online, una gran variedad de títulos de juegos que te están esperando: Torrente, Chiquito, Age of Gods, Top Trump Football Stars, Cat in Vegas y muchos más. Muchos slots tendrán premios extra y contarán con unos “jackpots” espectaculares.",
          "Gracias al buscador será fácil encontrarlos y podrás filtrar por tipo de juego, nombre, compañía, pagos… ¡e incluso hacer tu propia lista de slots favoritos!",
          "Además, te vas a sorprender con la rapidez de nuestra plataforma, tanto en tu computadora como en tu aplicación móvil.",
        ],
      },
    ],
  };

  return (
    <div className="cas-seo">
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href="https://www.codere.bet.ar/casino" />
        <meta name="description" content={description} />

        <script type="application/ld+json">{JSON.stringify(json)}</script>
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.codere.es/casino"
        />
      </Helmet>

      {/* <Navigations index={props.index} type={1} /> */}
      <Floating text="¡El mejor Casino!" juega={true} />
      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.bet.ar/seopages/casino/assets/casino/${
            props.flag ? "M" : "D"
          }-Header.jpg)`,
          backgroundSize: "cover",
        }}
      ></div>

      <Container style={{ color: "#fff" }}>
        <h1 className="header mt-4 mb-3">{top_par.h1}</h1>
        {/* Table */}
        {!props.flag ? (
          <TableOfContents table={table_of_contents_list} />
        ) : null}
        <div className="mt-4">
          {top_par.p.map((par, k) => (
            <p key={k}>{par}</p>
          ))}
        </div>
        {/* <p>{top_par.p}</p> */}
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

        <div id={beneficios.id}>
          <h2>{beneficios.h2}</h2>
          <p>{beneficios.p1}</p>
          <p>{beneficios.p2}</p>
        </div>

        <div id={ver.id} className="mb-4">
          <h2>{ver.h2}</h2>
          {ver.links.map((link, k) => (
            <Link style={{ color: "#fff" }} key={k} to={link.url}>
              <div>{link.name}</div>
            </Link>
          ))}
        </div>

        <Table striped bordered hover variant="dark" className="seotable">
          <tbody>
            {table.map((tr, i) => (
              <tr key={i}>
                {tr.map((td, j) => (
                  <td key={j}>{td}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>

        <Accordion>
          <h2 id={preguntas.id} className="mt-4 mb-3">
            {preguntas.h2}
          </h2>
          {preguntas.sub.map((s, k) => (
            <Accordion.Item key={k} eventKey={k}>
              <Accordion.Header as={"h3"}>{s.h3}</Accordion.Header>
              <Accordion.Body>
                {s.p.map((par, k) => (
                  <p key={k}>{par}</p>
                ))}
              </Accordion.Body>
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
