import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Lazy } from "swiper";
import SlideButton from "./Slide-Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Timer2 from "./Timer2.0";
import banners from "../JSON/data.json";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { isMobileContext } from "../App";
import { useState } from "react";

var imgs = [];

function MySwiper(props) {
  const DATE_TO_COUNT = "2022-12-18T15:00:00Z";
  const [regisButtonText, setRegisButtonText] = useState("Registrate");
  const [regis, setRegis] = useState();
  const [showTimer, setShowTimer] = useState(false);
  const [flag, setFlag] = useState(1);

  const indexHandler = (swiper) => {
    if (swiper.realIndex > 0) {
      setShowTimer(false);
      setFlag(0);
    } else if (flag == 0) setShowTimer(true);
    // ctaURL
    imgs[swiper.realIndex].ctaText
      ? setRegisButtonText(imgs[swiper.realIndex].ctaText)
      : setRegisButtonText("Registrate");
    imgs[swiper.realIndex].ctaURL
      ? setRegis(imgs[swiper.realIndex].ctaURL)
      : setRegis(props.regis);
  };

  function dateInBetween(banner) {
    return (
      new Date() >= new Date(banner.startDate) &&
      new Date() <= new Date(banner.endDate)
    );
  }

  function BannerFilter(banner) {
    if (!banner.scheduled) return banner;
    else {
      if (dateInBetween(banner)) return banner;
    }
  }

  return (
    <isMobileContext.Consumer>
      {(isMobile) => {
        if (!isMobile) imgs = banners.desktop_slide_list.filter(BannerFilter);
        else imgs = banners.mobile_slide_list.filter(BannerFilter);

        return (
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
              onImagesReady={() => setShowTimer(true)}
            >
              {imgs.map((item, index) => (
                <SwiperSlide key={index}>
                  <a href={regis}>
                    <img src={item.image} alt={item.img_alt} />
                  </a>

                  {!isMobile ? (
                    <div id="des-reg">
                      <Button
                        className="central-regis gl-effect"
                        href={regis}
                        rel={"nofollow"}
                      >
                        {regisButtonText}
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
                      {item.tycLink && (
                        <a className="tyc" href={item.tycLink}>
                          Términos y condiciones
                        </a>
                      )}
                    </div>
                  ) : (
                    <>
                      {item.tycLink && (
                        <div className="mob-tyc">
                          <a className="tyc" href={item.tycLink}>
                            Términos y condiciones
                          </a>
                        </div>
                      )}
                    </>
                  )}
                  {/* Timer for live Text */}
                  {showTimer && new Date() < new Date(DATE_TO_COUNT) && (
                    <Timer2 />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
            {isMobile && (
              <SlideButton regis={regis} regisButtonText={regisButtonText} />
            )}
          </div>
        );
      }}
    </isMobileContext.Consumer>
  );
}
export default MySwiper;
