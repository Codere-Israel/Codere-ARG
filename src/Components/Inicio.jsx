import { Helmet } from "react-helmet";
import Content from "./Content";
import Games from "./Games";
import MySwiper from "./MySwiper";

export default function Inicio(props) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "codere",
    alternateName: [
      "codere argentina",
      "codere.ar",
      "codere.com.ar",
      "codere ar",
      "codere online",
      "codere sa",
      "codere s.a.",
    ],
    legalName: "Codere Online Argentina S.A.",
    url: "https://www.codere.bet.ar/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Codere_Logo.svg",
    foundingDate: "1991",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "[0810-345-CODERE (2633)]",
      email: "apuestas@codere.com",
    },
    description:
      "Codere online, la casa #1 de apuestas deportivas y casino en linea de toda Argentina, Patrocinador Oficial del Club River Plate ⚽.",
    sameAs: [
      "https://www.facebook.com/CodereArgentina/",
      "https://twitter.com/CodereArgentina",
      "https://www.youtube.com/channel/UCwHOUXR_DnMcSQSSqRGA4aA",
      "https://www.instagram.com/codereargentina/",
      "https://es.wikipedia.org/wiki/Codere",
      "https://www.wikidata.org/wiki/Q2918415",
      "https://www.crunchbase.com/organization/codere",
      "https://www.google.com/search?kgmid=/g/121c515_",
    ],
  };

  const json2 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo puedo registrarme para realizar apuestas deportivas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Para registrarte en Codere y poder realizar apuestas deportivas primero tenés que crearte una cuenta. Hacé clic en la pestaña “Registrarse” y completá tus datos personales para crear tu perfil. Tené a mano tu DNI ya que te solicitaremos el número de trámite. Recordá que podés optar por alguno de nuestros bonos de bienvenida y utilizarlos en apuestas deportivas y en juegos de casino online. Luego de crear tu cuenta no olvides realizar la verificación documental.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde puedo mirar estadísticas y pronósticos en la casa de apuestas Codere?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Antes de realizar tus apuestas deportivas en Codere, tenés la opción de ayudarte con nuestras estadísticas o pronósticos. Hacé clic en el evento deportivo sobre el que quieras apostar y entrá a uno de los partidos. Una vez dentro, verás que se abrirá un panel lateral con todo tipo de ayudas. Contarás con información sobre ambos equipos, el estadio donde se juega, horas que quedan para el inicio, árbitro, goles marcados esta temporada, máximos goleadores, etc. Además, habrá otras pestañas en las que podrás ver los enfrentamientos anteriores entre ambos, la probabilidad de victoria de cada uno, la ubicación en la tabla de posiciones y las alineaciones probables en el caso del fútbol.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son los tipos de apuestas deportivas en futbol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Existen infinidad de mercados para realizar apuestas deportivas. Pero por encima del resto hay unos cuantos que son los más elegidos por parte de los usuarios de Codere en otros países de América y Europa. Entre ellos destacan: Ganador del partido, Más o menos goles, Primer equipo en hacer un gol, Goleadores, Hándicap e incluso apuestas anticipadas para apostar al ganador de una competición.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es un Freebet y cómo lo puedo utilizar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un Freebet es una apuesta gratis que Codere te brinda. No ponés en riesgo tu dinero y podés obtener ganancias si ganás la apuesta. Existen freebets de diferentes montos que son entregadas dependiendo de la promoción vigente. En Codere, las Freebet de bono de bienvenida son otorgadas cuando un usuario se registra y hace su primer depósito. Todas las freebets pueden ser usadas en cualquier tipo de apuesta deportiva, siempre y cuando cumpla con los términos y condiciones. Al hacer tu apuesta, al lado del botón de hacer apuesta, estará un cuadro que dirá Freebet. Al hacer clic ahí, se muestra la cantidad de Freebet que tenés disponible y podrás realizar tu apuesta con Freebet.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es una apuesta combinada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En Codere, al hacer una apuesta deportiva con varias selecciones de eventos o incidencias dentro del mismo evento, se le llama apuesta combinada. Cuantos más eventos incluyas en la apuesta, mayor es la ganancia posible que va aumentando exponencialmente. Para ganar una apuesta combinada de todos los juegos seleccionados debés acertar la totalidad de tus predicciones dentro de la apuesta. Atentos que en Codere a veces aumentamos la cantidad de ganancia por las líneas dentro de una apuesta combinada, es decir damos un porcentaje extra por selecciones adicionales.",
        },
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>
          Apuestas Deportivas y Casino Online » Bono $10.000 | Codere®
        </title>
        <meta
          name="description"
          content="Codere online, la casa #1 de apuestas deportivas y casino en linea de toda Argentina, Patrocinador Oficial del Club River Plate ⚽."
        />
        <link rel="canonical" href="https://www.codere.bet.ar/" />

        <script type="application/ld+json">{JSON.stringify(json)}</script>
        <script type="application/ld+json">{JSON.stringify(json2)}</script>
      </Helmet>
      <MySwiper flag={props.flag} />
      <Games />
      <Content />
    </>
  );
}
