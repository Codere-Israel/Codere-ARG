import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

// Codere Footer \\
function Footer() {
  return (
    <div>
      {/* <hr /> */}
      <footer className="nb-footer">
        <div className="sponsor">
          <img
            src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/splash/RealMadrid.svg"
            alt="Codere-RealMadrid"
          />

          <img className="mx-4"
            src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/splash/Rayados.svg"
            alt="Codere-Rayados"
          />

          <img
            src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/splash/River.svg"
            alt="Codere-RiverPlate"
          />
        </div>
        <div className="methods">
          <img
            src="https://www.codere.bet.ar/_catalogs/masterpage/codere/img/logotransfbancaria.png"
            alt="Transferencia Bancaria"
          />
          <img
            src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/FooterMasterCard.png"
            alt="Master-Card"
          />
          <img
            src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/Debin.png"
            alt="Debin"
          />
          <img
            src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/mercado-pago.svg"
            alt="Mercado Pago"
          />
        </div>
        <div className="about">
          <div className="social-media">
            <p style={{ color: "#79c000" }}>
              ¡SEGUINOS EN NUESTRAS REDES SOCIALES!
            </p>
            <ul className="list-inline">
              <li>
                <a
                  href="https://www.facebook.com/CodereArgentina/"
                  title=""
                  rel="nofollow"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/codereargentina/"
                  title=""
                  rel="nofollow"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/CodereArgentina"
                  title=""
                  rel="nofollow"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5491136822558"
                  title=""
                  rel="nofollow"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer-info-single">
                <span className="title">SOBRE NOSOTROS</span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://www.codere.bet.ar/juego-responsable"
                      title=""
                      rel="nofollow"
                    >
                      Juego Responsable
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.caba.codere.bet.ar/csbgonline/condicionesgenerales/contratoArgentinaCaba.pdf?m=si"
                      title=""
                      rel="nofollow"
                      target="_blank"
                    >
                      Contrato
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://m.caba.codere.bet.ar/csbgonline/condicionesgenerales/politicaprivacidadargentinacaba.pdf"
                      title=""
                      target="_blank"
                      rel="nofollow"
                    >
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codere.bet.ar/informaci%C3%B3n-legal/reglas"
                      title=""
                      rel="nofollow"
                    >
                      Reglas
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codere.bet.ar/informaci%C3%B3n-legal/politica-de-cookies"
                      title=""
                      rel="nofollow"
                    >
                      Política de Cookies
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codere-partners.com/es/"
                      title=""
                      rel="nofollow"
                      target="_blank"
                    >
                      Afiliados de Codere
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="footer-info-single">
                <span className="title">LINKS DESTACADOS</span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://www.codere.bet.ar/resultados-y-estad%C3%ADsticas"
                      title=""
                      rel="nofollow"
                      target="_blank"
                    >
                      Resultados y Estadísticas
                    </a>
                  </li>
                  <li>
                    <a href="https://www.codere.bet.ar/casino">Casino</a>
                  </li>
                  <li>
                    <a href="https://www.codere.bet.ar/casino/casino-en-vivo">
                      Casino en vivo
                    </a>
                  </li>
                  <li>
                    <a href="https://www.codere.bet.ar/casino/blackjack">
                      Blackjack
                    </a>
                  </li>
                  <li>
                    <a href="https://www.codere.bet.ar/casino/tragamonedas-slots-online">
                      Slots
                    </a>
                  </li>
                  <li>
                    <a href="https://www.codere.bet.ar/casino/ruleta-online">
                      Ruleta
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="footer-info-single">
                <span className="title">DEPORTES</span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://blog.codere.bet.ar/"
                      title=""
                      target="_blank"
                    >
                      Blog Codere
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codere.bet.ar/dep%C3%B3sitos/dep%C3%B3sito-online"
                      title=""
                      rel="nofollow"
                    >
                      Info Depósitos y Cobros
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codere.bet.ar/apuestas/c%C3%B3mo-y-d%C3%B3nde-apostar"
                      title=""
                      rel="nofollow"
                    >
                      Cómo Apostar
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.caba.codere.bet.ar/deportes/#/HomePage"
                      title=""
                      rel="nofollow"
                    >
                      Apuestas en Vivo
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="footer-info-single">
                <span className="title">AYUDA</span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://www.codere.bet.ar/ayuda"
                      title=""
                      rel="nofollow"
                    >
                      Términos y Condiciones
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:apuestas@codere.com"
                      title=""
                      rel="nofollow"
                    >
                      Contacto: apuestas@codere.com
                    </a>
                  </li>
                  <li style={{ color: "#fff" }}>0810-345-CODERE (2633)</li>
                  <li>
                    <a
                      href="https://wa.me/50769314912"
                      title=""
                      rel="nofollow"
                      target="_blank"
                      className="whatsapp"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                      {"  "} +549 1136 822558
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ marginBottom: "2vw" }} />

        <div className="juegas-banners">
          <a
            href="https://www.saberjugar.gob.ar/?page=linea-orientacion"
            rel="nofollow"
            target="_blank"
          >
            <img
              src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/logo-lineagratuita.png"
              alt="Línea gratuita"
            />
          </a>
          <img
            src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/logomas18b.png"
            alt="Mayor 18"
          />

          <a
            href="https://m.caba.codere.bet.ar/deportes/#/SelfExclusion"
            rel="nofollow"
          >
            <img
              src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/logo-autoexcluyete.png"
              alt="Autoexclusión"
            />
          </a>
          <a
            href="https://www.saberjugar.gob.ar/"
            rel="nofollow"
            target="_blank"
          >
            <img
              src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/logoyLotba.svg"
              alt="LOTBA"
            />
          </a>
          <a
            href="https://www.saberjugar.gob.ar/"
            rel="nofollow"
            target="_blank"
          >
            <img
              src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/logobSJ.svg"
              alt="Saber Jugar"
            />
          </a>
        </div>

        <div id="legals" style={{ marginBottom: "2vw" }}>
          EL JUEGO COMPULSIVO ES PERJUDICIAL PARA VOS Y TU FAMILIA
          <br />
          codere.bet.ar es un sitio operado por Codere Online Argentina S.A.
          bajo permiso otorgado por LOTBA S.E. mediante DI-2021-238-GCABA-LOTBA
          y DI-2023-359-GCABA-LOTBA. El ámbito de aplicación se circunscribe a
          la Ciudad Autónoma de Buenos Aires.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
