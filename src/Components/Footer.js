import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
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
            src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/splash/Sponsorship-RM.svg"
            alt="Codere-RealMadrid"
          />

          <img
            src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/splash/Sponsorship-Rayados.svg"
            alt="Codere-Rayados"
          />

          <img
            src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/splash/footerlogocodereriver.svg"
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
              ¡SEGUINOS EN NUESTRAS REDES SOCAILES!
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
                  <FontAwesomeIcon icon={faTwitter} />
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
                      href="/ayuda/juego-responsable"
                      title=""
                      rel="nofollow"
                    >
                      Juego Responsable
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.caba.codere.bet.ar/csbgonline/condicionesgenerales/condicionespoliticaargentina.pdf?_ga=1.6998646.512593250.1464854868"
                      title=""
                      rel="nofollow"
                    >
                      Contrato y política de privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ayuda/reglas"
                      title=""
                      rel="nofollow"
                    >
                      Reglas
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ayuda/contrato-y-politica-de-privacidad"
                      title=""
                      target={"_blank"}
                      rel="nofollow"
                    >
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ayuda/politica-de-cookies"
                      title=""
                      rel="nofollow"
                    >
                      Política de Cookies
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
                      href="/ayuda/resultados-y-estadisticas"
                      title=""
                      rel="nofollow"
                    >
                      Resultados y Estadísticas
                    </a>
                  </li>
                  <li>
                    <a href="/casino">Casino</a>
                  </li>
                  <li>
                    <a href="/casino/blackjack">
                      Blackjack
                    </a>
                  </li>
                  <li>
                    <a href="/casino/tragamonedas-slots-online">
                      Slots
                    </a>
                  </li>
                  <li>
                    <a href="/casino/ruleta-online">
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
                      href="/ayuda/deposito-online"
                      title=""
                    >
                      Info Depósitos y Cobros
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ayuda/como-y-donde-apostar"
                      title=""
                    >
                      Cómo Apostar
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
                    <a href="/ayuda" title="">
                      Términos y Condiciones
                    </a>
                  </li>

                  <li>
                    <a href="mailto:apuestas@codere.com" title="">
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
          codere.bet.ar es un sitio operado por Iberargen S.A. bajo permiso
          otorgado por LOTBA S.E. mediante DI-2021-238-GCABA-LOTBA. El ámbito de
          aplicación se circunscribe a la Ciudad Autónoma de Buenos Aires.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
