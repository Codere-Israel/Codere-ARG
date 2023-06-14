import { Helmet } from "react-helmet";
import Content from "./Content";
import Games from "./Games";
import MySwiper from "./MySwiper";

export default function Inicio() {
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
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.codereonline.com/overview/default.aspx"
        />
        <link rel="alternate" hreflang="es-es" href="https://www.codere.es/" />
        <link rel="alternate" hreflang="en-es" href="https://www.codere.es/" />
        <link rel="alternate" hreflang="es-mx" href="https://www.codere.mx/" />
        <link rel="alternate" hreflang="en-mx" href="https://www.codere.mx/" />
        <link rel="alternate" hreflang="es-pa" href="https://www.codere.pa/" />
        <link rel="alternate" hreflang="en-pa" href="https://www.codere.pa/" />
        <link
          rel="alternate"
          hreflang="es-co"
          href="https://www.codere.com.co/"
        />
        <link
          rel="alternate"
          hreflang="en-co"
          href="https://www.codere.com.co/"
        />
        <link
          rel="alternate"
          hreflang="es-ar"
          href="https://www.codere.bet.ar/"
        />
        <link
          rel="alternate"
          hreflang="en-ar"
          href="https://www.codere.bet.ar/"
        />
      </Helmet>
      <MySwiper />
      <Games />
      <Content />
    </>
  );
}
