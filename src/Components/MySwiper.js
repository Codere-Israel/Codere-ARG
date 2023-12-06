import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Lazy } from "swiper";
import SlideButton from "./Slide-Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, Table } from "react-bootstrap";
import terms from "../JSON/tyc.json";

// import Timer2 from "./Timer2.0";
import banners from "../JSON/data.json";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { useState, useEffect } from "react";
import { dateInBetween } from "../App";

var imgs = [];

function MySwiper(props) {
  // console.log(terms);
  const [swiper, setSwiper] = useState(null);

  // const DATE_TO_COUNT = "2022-12-18T15:00:00Z";
  // const [regisButtonText, setRegisButtonText] = useState("Registrate");
  // const [regis, setRegis] = useState("asd");
  const [showTimer, setShowTimer] = useState(false);
  const [flag, setFlag] = useState(1);
  const [curSwiperIndex, setCurSwiperIndex] = useState(0);

  // TYC States
  const [currentTycType, setCurrentTycType] = useState(null);
  const [currentBannerName, setCurrentBannerName] = useState("");
  const [showTycModal, setShowTycModal] = useState(false);
  const [ctaText, setCtaText] = useState("Registrate");
  const [ctaLink, setCtaLink] = useState(
    "https://m.caba.codere.bet.ar/deportes/#/RegistroARPage"
  );

  if (!props.flag) imgs = banners.desktop_slide_list.filter(BannerFilter);
  else imgs = banners.mobile_slide_list.filter(BannerFilter);

  useEffect(() => {
    if (swiper) {
      if (showTycModal) swiper.autoplay.pause();
      else swiper.autoplay.run();
    }
  }, [showTycModal]);

  const indexHandler = (swiper) => {
    setSwiper(swiper);
    if (imgs[swiper.realIndex].ctaText) {
      setCtaText(imgs[swiper.realIndex].ctaText);
      setCtaLink(imgs[swiper.realIndex].ctaLink);
    } else {
      setCtaText("Regístrate");
      setCtaLink("https://m.caba.codere.bet.ar/deportes/#/RegistroARPage");
    }

    if (imgs[swiper.realIndex].tycType) {
      setCurrentTycType(imgs[swiper.realIndex].tycType);
    }
    if (imgs[swiper.realIndex].name) {
      setCurrentBannerName(imgs[swiper.realIndex].name);
    }
  };

  function BannerFilter(banner) {
    if (!banner.scheduled) return banner;
    else {
      if (dateInBetween(banner)) return banner;
    }
  }

  const modalGenerator = () => {
    return (
      <>
        <Modal
          centered
          show={showTycModal}
          onHide={() => setShowTycModal(false)}
          contentClassName="terms-tyc"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="test">
                <h5>Términos y condiciones</h5>
                <h5>{currentBannerName}</h5>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {currentTycType && tycGenerator(currentTycType)}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => setShowTycModal(false)}
              className="accept-btn"
            >
              Aceptar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  const tycGenerator = (type) => {
    let term = null;

    for (let i = 0; i < terms.length; i++) {
      if (terms[i].type === type) term = terms[i];
    }
    // console.log(term);
    return (
      <ol style={{ maxHeight: "50vh", overflowY: "scroll" }}>
        {term.ol.map((li, k) => (
          <li key={k}>
            {li.bolded && <strong>{li.bolded} </strong>}
            {li.text}
            {li.inner && (
              <ul>
                {li.inner.map((li2, k2) => (
                  <li key={k2}>{li2}</li>
                ))}
              </ul>
            )}
            {li.table && (
              <Table bordered className="mt-2">
                <thead>
                  <tr>
                    {li.table.th.map((h, k) => (
                      <th key={k}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {li.table.tr.map((tr, i) => (
                    <tr key={i}>
                      {tr.map((td, j) => (
                        <>
                          {Array.isArray(td) ? (
                            <ul>
                              {td.map((tds, k) => (
                                <li key={k}>{tds}</li>
                              ))}
                            </ul>
                          ) : (
                            <td key={j}>{td}</td>
                          )}
                        </>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </li>
        ))}
      </ol>
    );
  };

  return (
    <>
      <div id="carousel-section">
        <Swiper
          onSlideChange={(swiper) => indexHandler(swiper)}
          modules={[Pagination, EffectFade, Autoplay, Lazy]}
          pagination={{ clickable: true }}
          effect={"fade"}
          autoplay={{ delay: 3250, disableOnInteraction: true }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          init={false}
          // onImagesReady={() => setShowTimer(true)}
        >
          {imgs.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={ctaLink}>
                <img src={item.image} alt={item.img_alt} />
              </a>

              {!props.flag ? (
                <div id="des-reg">
                  <Button
                    href={ctaLink}
                    className="central-regis gl-effect"
                    rel={"nofollow"}
                  >
                    {ctaText}
                    <FontAwesomeIcon icon={faAngleRight} />
                  </Button>
                  <p
                    style={{
                      color: "#fff",
                      marginBottom: "0",
                      fontSize: ".8rem",
                      marginTop: ".25rem",
                    }}
                  >
                    Disponible únicamente dentro de CABA
                  </p>
                  {item.tycType && (
                    <span className="tyc" onClick={() => setShowTycModal(true)}>
                      Términos y condiciones
                    </span>
                  )}
                </div>
              ) : (
                <div className="ReactSwipeButton mobile_regis">
                  <SlideButton regis={ctaLink} regisButtonText={ctaText} />
                  {item.tycType && (
                    <div className="mob-tyc">
                      <span
                        className="tyc"
                        onClick={() => setShowTycModal(true)}
                      >
                        Términos y condiciones
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Timer for live Text */}
              {/* {showTimer && new Date() < new Date(DATE_TO_COUNT) && (
                    <Timer2 />
                  )} */}
            </SwiperSlide>
          ))}
        </Swiper>

        {modalGenerator()}
      </div>
    </>
  );
}
export default MySwiper;
