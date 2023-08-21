import { Zoom } from "react-awesome-reveal";
import { Table, Accordion } from "react-bootstrap";
import React from "react";

var questions = [
  "¿Cómo puedo registrarme para realizar apuestas deportivas?",
  "¿Dónde puedo mirar estadísticas y pronósticos en la casa de apuestas Codere?",
  "¿Cuáles son los tipos de apuestas deportivas en futbol?",
  "¿Qué es un Freebet y cómo lo puedo utilizar?",
  "¿Qué es una apuesta combinada?",
];
var answers = [
  "Para registrarte en Codere y poder realizar apuestas deportivas primero tenés que crearte una cuenta. Hacé clic en la pestaña “Registrarse” y completá tus datos personales para crear tu perfil. Tené a mano tu DNI ya que te solicitaremos el número de trámite. Recordá que solo podrás apostar cuando te encuentres ubicado dentro de la Ciudad Autónoma de Buenos Aires. Aprovechá nuestro bono de bienvenida y usalo en apuestas deportivas. Luego de crear tu cuenta no olvides realizar la verificación documental.",
  "Antes de realizar tus apuestas deportivas en Codere, tenés la opción de ayudarte con nuestras estadísticas o pronósticos. Hacé clic en el evento deportivo sobre el que quieras apostar y entrá a uno de los partidos. Una vez dentro, verás que se abrirá un panel lateral con todo tipo de ayudas. Contarás con información sobre ambos equipos, el estadio donde se juega, horas que quedan para el inicio, árbitro, goles marcados esta temporada, máximos goleadores, etc. Además, habrá otras pestañas en las que podrás ver los enfrentamientos anteriores entre ambos, la probabilidad de victoria de cada uno, la ubicación en la tabla de posiciones y las alineaciones probables en el caso del fútbol.",
  "Existen infinidad de mercados para realizar apuestas deportivas. Pero por encima del resto hay unos cuantos que son los más elegidos por parte de los usuarios de Codere en otros países de América y Europa. Entre ellos destacan: Ganador del partido, Más o menos goles, Primer equipo en hacer un gol, Goleadores, Hándicap e incluso apuestas anticipadas para apostar al ganador de una competición.",
  "Un Freebet es una apuesta gratis que Codere te brinda. No ponés en riesgo tu dinero y podés obtener ganancias si ganás la apuesta. Existen freebets de diferentes montos que son entregadas dependiendo de la promoción vigente. En Codere, las Freebet de bono de bienvenida son otorgadas cuando un usuario se registra y hace su primer depósito. Todas las freebets pueden ser usadas en cualquier tipo de apuesta deportiva, siempre y cuando cumpla con los términos y condiciones. Al hacer tu apuesta, al lado del botón de hacer apuesta, estará un cuadro que dirá Freebet. Al hacer clic ahí, se muestra la cantidad de Freebet que tenés disponible y podrás realizar tu apuesta con Freebet.",
  "En Codere, al hacer una apuesta deportiva con varias selecciones de eventos o incidencias dentro del mismo evento, se le llama apuesta combinada. Cuantos más eventos incluyas en la apuesta, mayor es la ganancia posible que va aumentando exponencialmente. Para ganar una apuesta combinada de todos los juegos seleccionados debés acertar la totalidad de tus predicciones dentro de la apuesta. Atentos que en Codere a veces aumentamos la cantidad de ganancia por las líneas dentro de una apuesta combinada, es decir damos un porcentaje extra por selecciones adicionales.",
];

function Content(props) {
  return (
    <div className="content-container">
      <div className="row">
        <div className="col-12 col-sm-4 left-col">
          <Zoom triggerOnce>
            <h1 className="bottomContentSubTitle">
              Casa de Apuestas Deportivas Online en Argentina (CABA)
            </h1>
            <p className="bottomContentText">
              ¡Bienvenido a la mejor casa de apuestas en línea de Argentina!
              Hace tiempo venimos disfrutando juntos de un mundo de
              entretenimientos y ahora te brindamos la posibilidad de que te
              diviertas de manera online.
            </p>
            <p>
              Con Codere vas a vivir esa pasión por el deporte de la manera que
              nos caracteriza. Vas poner a prueba tus conocimientos y aprender
              estrategias fuertes que te lleven a ganar dinero real con apuestas
              online, en un sitio seguro y profesional, entre amigos, en el
              mejor sitio para apostar en línea del país.
            </p>
            <p>
              Podés hacer apuestas deportivas para hoy o cuando quieras. Recordá
              que solo podrás apostar cuando te encuentres ubicado dentro de la
              Ciudad Autónoma de Buenos Aires. Preparáte para gritar goles y
              celebrar victorias a toda hora. Todas tus apuestas son seguras,
              respaldadas por la marca Codere, empresa que no solo posee 13
              salas de bingo en Argentina, sino que opera las mejores casas de
              apuestas físicas y online en otros países de Sudamérica y Europa.
            </p>
            <p>
              Prepárate para vivir tu pasión de una manera única, desde
              cualquier lugar, divertite con nuestra increíble oferta en el
              mundo de las apuestas en línea, elaborada especialmente para
              cualquiera que disfrute vivir la pasión de estas competencias:
            </p>
            <ul>
              <li>Apuestas Fútbol</li>
              <li>Apuestas NBA</li>
              <li>Apuestas Tenis</li>
              <li>Apuestas NHL</li>
              <li>Apuestas NFL</li>
              <li>Apuestas MLB</li>
            </ul>

            <h2 className="bottomContentSubTitle">
              Guía Rápida para Apostar Online en Codere
            </h2>
            <div className="bottomContentText">
              <p>
                Las apuestas deportivas son un mundo emocionante y de puertas
                abiertas para todas las personas. Con algo de conocimiento e
                intuición, podrás diseñar estrategias ganadoras. Y ya que esto
                puede tomar algo de tiempo, en Codere podrás aprender de los
                profesionales y acelerar el proceso para asegurar ganancias
                consistentes.
              </p>
              <p>
                Contamos con todo tipo de apuestas en línea, ya sean simples,
                múltiples, combinadas y mucho otras. ¿Qué es una apuesta
                combinada? Es apostar por varios partidos en conjunto
                pronosticando ganadores o empates. Es una práctica muy popular
                con la que es posible ganar mucho dinero.
              </p>
              <p>
                Cada estrategia de apuestas online es personalizada, diseñada
                por y para cada uno jugador. Para que tu experiencia sea única y
                divertida, preparamos algunos Tips de Apuestas Deportivas, que
                te permitirán aprender cómo ganar dinero apostando y jugando
                como profesional, dejá que tu conocimiento se convierta en
                ganancias.
              </p>
            </div>
          </Zoom>
        </div>
        <div className="col-12 col-sm-4 middle-col">
          <Zoom triggerOnce>
            <h3 className="bottomContentSubTitle">Entender a los equipos</h3>
            <div className="bottomContentText">
              <p>
                ¿Sos de los que creen que ganar en apuestas deportivas online es
                casi imposible? Eso empieza cambiar a partir de hoy, ya que
                resultar ganador, no es tan complicado como parece.
              </p>
              <p>
                Comencemos poniendo sobre la mesa la primera verdad para hacer
                una apuesta deportiva exitosa: el conocimiento es poder. Conocer
                en profundidad los equipos, los jugadores, los momentos y todo
                lo que gira en torno a tus deportes favoritos, te traerá grandes
                ventajas para incrementar las probabilidades de ganar.
              </p>
              <p>
                Acá no hablamos solo de conocer la historia de los equipos y
                jugadores, sino también su situación actual, el día a día. Para
                conseguir ganancias consistentes en las apuestas deportivas hay
                que hacer la tarea: conocer los equipos, los jugadores, cómo
                llega el equipo a un partido, qué jugadores están sancionados,
                cuáles lesionados, etc.
              </p>
              <p>
                Para ser exitoso en el mundo de las apuestas deportivas, hay que
                volverse DT de los equipos y jugadores con quienes vas a armar
                tu estrategia. Toda esta información te va a permitir realizar
                apuestas certeras. Pero hay que hacer la tarea: ahí está la
                clave del éxito.
              </p>
            </div>
            <h3 className="bottomContentSubTitle">
              Conocer tus probabilidades
            </h3>
            <div className="bottomContentText">
              <p>
                Por supuesto, hay que tener un plan. En este determinamos
                ciertos parámetros que van a definir nuestro estilo para
                apostar: es clave establecer la cantidad de dinero a jugar y
                cómo distribuirlo entre las apuestas que nos interesan. Cada
                campeonato, cada equipo y cada jugador ofrece probabilidades
                diferentes, por lo que se deben estimar cuáles son esas
                probabilidades y con cuáles jugar.
              </p>
              <p>
                Conocer estos factores puede ayudarte más de lo que te imaginás,
                ya que podés tener absoluto control sobre tus parámetros de
                apuestas y así definir tus posibles ganancias y pérdidas.
              </p>
              <p>
                No siempre se puede invertir el máximo en cada partido, pero sí
                se puede dar lo mejor con tal de conseguir lo deseado en cada
                apuesta deportiva. Muchas veces podés ganar mucho con poco y
                algunas otras, obtenés poco apostando mucho. Todo depende de vos
                y tus estrategias.
              </p>
            </div>
            <h3 className="bottomContentSubTitle">Aprender las estrategias</h3>
            <div className="bottomContentText">
              <p>
                Como en cualquier ámbito de la vida, en las apuestas deportivas
                seguras conforme vas tomando experiencia, aprendés a conocer los
                caminos que pueden ayudarte a obtener los resultados deseados.
              </p>
              <p>
                Cada triunfo y cada tropiezo que cometas serán parte fundamental
                del jugador en que te convertirás en un futuro pues éstos
                definirán a detalle tus estrategias y los mercados de apuestas
                en los que invertirás tu dinero.
              </p>
              <p>
                Aprender las estrategias de apuestas deportivas y casino online
                es clave a la hora de apostar y de buscar ganancias inmediatas.
              </p>
            </div>
          </Zoom>
        </div>
        <div className="col-12 col-sm-4 right-col">
          <Zoom triggerOnce>
            <h3 className="bottomContentSubTitle">
              Tips para apostar responsablemente
            </h3>
            <div className="bottomContentText">
              <p>
                Las apuestas deportivas son un territorio exigente y de cuidado,
                en el que tenemos que estar alertas. Acá te brindamos algunos
                consejos que pueden ayudarte a apostar seguro y a disfrutar al
                máximo el uso de nuestras plataformas:
              </p>
              <p>
                Apostá siempre lo que puedas, nunca de más. Son muchas las
                emociones que se viven en este apasionante mundo, así que es
                necesario gestionarlas y adecuarlas a tu estrategia.
              </p>
              <p>
                Establecé límites y respetalos. La administración de tu
                presupuesto diario es clave para ganar. Si lográs administrarte
                bien, será más sencillo que puedas destacarte en las apuestas
                deportivas y casino online.
              </p>
              <p>
                Una buena idea es distribuir el presupuesto por días, partidos,
                campeonatos o como prefieras. Queremos que la pases bien y nos
                visites cuantas veces quieras; por eso, repartir tu presupuesto
                asegurará que puedas hacerlo.
              </p>
              <p>
                Muchos profesionales encuentran útil considerar el dinero
                apostado como dinero que ya se fue. Si se gana la apuesta y
                cobrás ganancias, excelente: ¡celebrá! Y si una apuesta no sale,
                ya te habías despedido de ese monto y será más fácil digerirlo.
              </p>
              <p>
                Nunca apuestes para recuperar. Lo que se perdió, se perdió y ya
                está en el pasado. Las oportunidades de ganar están adelante, en
                lo que queda por jugar. Apostá siempre con la mirada al frente.
              </p>
              <p>
                Jugá siempre de local. Conocer bien el territorio en donde
                invertirás tu dinero es esencial si lo que querés es ganar en
                apuestas deportivas.
              </p>
              <p>
                No gastes lo que tenés en competencias que desconocés por
                completo y mejor centrá tus esfuerzos en los que sí conozcas. Es
                más probable que tu decisión sea la correcta. Recordá que jugar
                de visitante, desconociendo todo, siempre es más complicado que
                hacerlo de local.
              </p>
              <p>
                Recordá que estamos apostando donde nuestra estrategia
                incremente las probabilidades.
              </p>
            </div>

            <h2 className="bottomContentSubTitle">
              Casino Online en Argentina (CABA)
            </h2>
            <div className="bottomContentText">
              <p>
                En Codere tenés mucho más que apuestas deportivas. Quizás ya nos
                conozcas por nuestras exclusivas y emocionantes salas de bingo.
                Ahora, es momento de que nos conozcas en nuestro casino online y
                sigas disfrutando de los mejores juegos de casino desde tu
                computadora o dispositivo móvil.
              </p>
              <p>
                En nuestro{" "}
                <a href="https://www.codere.bet.ar/casino">casino online</a>{" "}
                encontrarás todas las mesas y máquinas que te puedas imaginar:
                <a href="https://www.codere.bet.ar/casino/blackjack">
                  {" "}
                  BlackJack
                </a>
                , Póker,{" "}
                <a href="https://www.codere.bet.ar/casino/ruleta-online">
                  Ruleta
                </a>
                ,{" "}
                <a href="https://www.codere.bet.ar/casino/tragamonedas-slots-online">
                  tragamonedas
                </a>
                , Video Bingo y mucho más. Podés recorrer nuestras salas y
                elegir el juego que más te divierta, siempre con toda la
                tranquilidad y seguridad que solo Codere puede brindarte.
              </p>
              <p>
                Ningún otro casino online en Argentina te ofrecerá tanto.
                Siempre tendremos sorpresas, promociones, bonos y mucho más para
                vos. Todos nuestros esfuerzos buscan asegurarte una experiencia
                de casino increíble y haremos siempre todo lo que esté a nuestro
                alcance para que así sea.
              </p>
            </div>
          </Zoom>
        </div>
      </div>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>🏆 Inicio de operaciones </td>
            <td>1991</td>
          </tr>
          <tr>
            <td>⚽ Apuestas Deportivas</td>
            <td>Apuestas fútbol, Apuestas box, Apuestas baloncesto y más</td>
          </tr>
          <tr>
            <td>🎲 Licencia</td>
            <td>LOTBA S.E. mediante DI-2021-238-GCABA-LOTBA y DI-2023-359-GCABA-LOTBA.</td>
          </tr>
          <tr>
            <td>✔️ Moneda</td>
            <td>ARS</td>
          </tr>
          <tr>
            <td>💰 Depósito mínimo</td>
            <td>$500 ARS</td>
          </tr>
          <tr>
            <td>💸 Límites de pago </td>
            <td>No existen mínimos ni máximos.</td>
          </tr>
          <tr>
            <td>💳 Formas de Pago </td>
            <td>Transferencia Bancaria, Tarjeta de Débito y DEBIN</td>
          </tr>
        </tbody>
      </Table>

      <section id="acc-section">
        <h2 className="bottomContentTitle">
          Preguntas frecuentes sobre Apuestas deportivas en Argentina
        </h2>
        <Accordion
          className="content-accordion"
          defaultActiveKey={["0"]}
          alwaysOpen
        >
          {answers.map((answer, index) => {
            return (
              <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header as="h3">
                  <p>{questions[index]}</p>
                </Accordion.Header>
                <Accordion.Body>
                  <p>{answer}</p>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </section>
    </div>
  );
}

export default Content;
