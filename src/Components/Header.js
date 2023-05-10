import {
  Button,
  Container,
  Nav,
  Navbar,
  Dropdown,
  Modal,
  Form,
  Accordion,
} from "react-bootstrap";
import { isMobileContext } from "../App";
import React, { useState, useEffect } from "react";
// import Axios from "axios";
import { elastic as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faGlobe,
  faCirclePlay,
  faBullhorn,
  faCrosshairs,
  faCoins,
  faFlag,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function Header(props) {
  const acceder =
    "https://m.caba.codere.bet.ar/deportes/#/HomePage?openlogin=true";

  const LOGO =
    new Date() >= new Date("2022-12-30T22:00:00Z")
      ? "https://www.codere.bet.ar/_catalogs/masterpage/codere/images/Splash/riverPlateTopLogo.svg"
      : "https://www.codere.bet.ar/_catalogs/masterpage/codere/images/splash/christmassLogo.gif";

  // Hooks
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPassword] = useState("");
  const [hamburger, setHamburger] = useState(false);

  const menu = [
    {
      icon: faCrosshairs,
      name: "Deportes",
      url: "https://m.caba.codere.bet.ar/deportes/#/HomePage",
      target: "_self"
    },
    {
      icon: faCirclePlay,
      name: "Directo",
      url: "https://m.caba.codere.bet.ar/deportes/#/DirectosPage",
      target: "_self"
    },
    {
      icon: faCoins,
      name: "Casino",
      url: "https://m.caba.codere.bet.ar/deportes/#/CasinoPage",
      target: "_self"
    },
    {
      icon: faBullhorn,
      name: "Promociones",
      url: "https://m.caba.codere.bet.ar/deportes/#/PromotionsPage",
      target: "_self"
    },
    {
      icon: faGlobe,
      name: "Nuestras Salas",
      url: "https://bingos.codere.bet.ar",
      target: "_blank"
    },
  ];

  const seo_menu = [
    { name: "Casino", url: "https://www.codere.bet.ar/casino", icon: faCoins },
    {
      name: "Casino en vivo",
      url: "https://www.codere.bet.ar/casino/casino-en-vivo",
      icon: faCoins,
    },
    {
      name: "Ruleta",
      url: "https://www.codere.bet.ar/casino/ruleta-online",
      icon: faStar,
    },
    {
      name: "Slots",
      url: "https://www.codere.bet.ar/casino/tragamonedas-slots-online",
      icon: faFlag,
    },
    {
      name: "Blackjack",
      url: "https://www.codere.bet.ar/casino/blackjack",
      icon: faHeart,
    },
  ];

  // Handlers
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const formHandler = (evt) => {
  //   evt.preventDefault();
  //   // console.log("been there done that");

  //   checkExistingUser();

  //   setEmail("");
  //   setPassword("");
  // };

  // const emailHandler = (evt) => {
  //   console.log(evt.target.value);
  //   setEmail(evt.target.value);
  // };

  // const pwHandler = (evt) => {
  //   console.log(evt.target.value);
  //   setPassword(evt.target.value);
  // };

  // function checkExistingUser() {
  //   Axios.post(URL, new PostUser(email, pw)).then((res) => {
  //     console.log("users >>");
  //     console.log(res.data);
  //   });
  // }

  // const modal = () => {
  //   return (
  //     <>
  //       <Modal id="modal_app" show={show} onHide={handleClose}>
  //         <Modal.Header closeButton>
  //           <Modal.Title>Log-In</Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>
  //           <Form className="test" onSubmit={formHandler}>
  //             <Form.Group
  //               className="mb-3"
  //               controlId="exampleForm.ControlInput1"
  //             >
  //               <Form.Control
  //                 type="text"
  //                 onChange={emailHandler}
  //                 placeholder="Usuario ó Correo Electrónico"
  //               />
  //             </Form.Group>
  //             <Form.Group className="mb-3" controlId="formBasicPassword">
  //               <Form.Control
  //                 type="password"
  //                 placeholder="Password"
  //                 onChange={pwHandler}
  //                 required
  //               />
  //             </Form.Group>
  //             <input type="submit" className="login_btn" value="Log-In" />
  //           </Form>
  //         </Modal.Body>
  //       </Modal>
  //     </>
  //   );
  // };

  const hamburgerHandler = (evt) => {
    let flag = false;
    // console.log(evt.target.className);
    if (!hamburger && evt.target.id.includes("react-burger-menu-btn")) {
      evt.target.parentNode.classList.add("open");
      flag = true;
    } else if (evt.target.id.includes("react-burger-menu-btn")) {
      evt.target.parentNode.classList.remove("open");
      flag = true;
    } else if (
      evt.target.className.includes("bm-overlay") ||
      evt.target.id.includes("react-burger-cross-btn")
    ) {
      document
        .getElementById("react-burger-menu-btn")
        .parentNode.classList.remove("open");
      flag = true;
    }
    if (flag) setHamburger(!hamburger);
  };

  return (
    <isMobileContext.Consumer>
      {(isMobile) => {
        return (
          <Navbar className="header_nav stroke" variant="dark">
            {isMobile ? (
              <div id="father">
                <div id="outer-container" onClick={hamburgerHandler}>
                  <Menu
                    id="elastic"
                    left
                    customCrossIcon={false}
                    pageWrapId={"page-wrap"}
                    outerContainerId={"outer-container"}
                  >
                    {menu.map((m, k) => (
                      <NavLink key={k} to={m.url} target={m.target} rel="nofollow">
                        <FontAwesomeIcon icon={m.icon} />
                        {m.name}
                        <FontAwesomeIcon icon={faAngleRight} />
                      </NavLink>
                    ))}

                    <Accordion className="hamb-accordion">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>¿Cómo jugar?</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            {seo_menu.map((s, k) => (
                              <li key={k}>
                                <NavLink to={s.url}>
                                  <FontAwesomeIcon icon={s.icon} />
                                  {s.name}
                                  <FontAwesomeIcon icon={faAngleRight} />
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Menu>
                  <main id="page-wrap"></main>
                </div>
                <a
                  href="https://m.caba.codere.bet.ar/deportes/#/HomePage"
                  rel="nofollow"
                >
                  <img
                    src={LOGO}
                    alt="Logo Casa de Apuestas Codere - Real Madrid "
                  />
                </a>
                <div id="header_buttons">
                  <Button
                    href={acceder}
                    className="acceder-button header_btn"
                    rel="nofollow"
                  >
                    Acceder
                  </Button>
                  <Button
                    href={props.regis}
                    className="registrate-button header_btn"
                    rel="nofollow"
                  >
                    Registrate
                  </Button>
                </div>
              </div>
            ) : (
              <Container>
                <a
                  href="https://m.caba.codere.bet.ar/deportes/#/HomePage"
                  rel="nofollow"
                >
                  <img
                    src={LOGO}
                    alt="Logo Casa de Apuestas Codere - Real Madrid "
                  />
                </a>

                <Nav className="me-auto">
                  {menu.map((m, k) => (
                    <Nav.Link key={k} href={m.url} target={m.target} rel="nofollow">
                      <span style={{ textTransform: "uppercase" }}>
                        {m.name}
                      </span>
                    </Nav.Link>
                  ))}
                </Nav>
                <Dropdown>
                  <Dropdown.Toggle className="header_btn">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {seo_menu.map((s, k) => (
                      <Dropdown.Item
                        as={s.isSPA ? Link : "a"}
                        key={k}
                        to={s.url}
                        href={s.url}
                      >
                        {s.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Button
                  href={acceder}
                  // onClick={handleShow}
                  className="acceder-button header_btn"
                  rel="nofollow"
                >
                  Acceder
                </Button>
                <Button
                  href={props.regis}
                  className="registrate-button header_btn"
                  rel="nofollow"
                >
                  Registrate
                </Button>
              </Container>
            )}
          </Navbar>
        );
      }}
    </isMobileContext.Consumer>
  );
}

export default Header;
