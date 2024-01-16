import {
  Button,
  Container,
  Nav,
  Navbar,
  Dropdown,
  Accordion,
  InputGroup,
} from "react-bootstrap";
import { dateInBetween, isMobileContext } from "../App";
import React, { useState } from "react";
// import Axios from "axios";
import { elastic as Menu } from "react-burger-menu";

import { Link, NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Arrowrightw, Arrowdown, Deportes, LocalesMenuIcon, Promociones, Ruletasenvivo, CasinoMenuIcon, Directo, ArrowdownBlack } from '../icons';

function Header(props) {
  const acceder =
    "https://m.caba.codere.bet.ar/deportes/#/HomePage?openlogin=true";

  const logoSchedule = {
    startDate: "2023-12-01T07:00:00Z",
    endDate: "2023-12-30T22:00:00Z",
  };

  const christmassLogo =
    "https://www.codere.bet.ar/_catalogs/masterpage/codere/images/splash/christmassLogo.gif";
  const riverPlateLogo =
    "https://www.codere.bet.ar/_catalogs/masterpage/codere/images/Splash/riverPlateTopLogo.svg";

  const LOGO = dateInBetween(logoSchedule) ? christmassLogo : riverPlateLogo;

  // Hooks
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPassword] = useState("");
  const [hamburger, setHamburger] = useState(false);
  const [onShow, setOnShow] = useState("");

  const menu = [
    {
      icon: Deportes,
      name: "Deportes",
      url: "https://m.caba.codere.bet.ar/deportes/#/HomePage",
      target: "_self",
    },
    {
      icon: Directo,
      name: "Directo",
      url: "https://m.caba.codere.bet.ar/deportes/#/DirectosPage",
      target: "_self",
    },
    {
      icon: CasinoMenuIcon,
      name: "Casino",
      url: "https://m.caba.codere.bet.ar/deportes/#/CasinoPage",
      target: "_self",
    },
    {
      icon: Ruletasenvivo,
      name: "En Vivo",
      url: "https://m.caba.codere.bet.ar/deportes/#/CasinoenVivoPage",
      target: "_self",
    },

    {
      icon: Promociones,
      name: "Promociones",
      url: "https://m.caba.codere.bet.ar/deportes/#/PromotionsPage",
      target: "_self",
    },
    {
      icon: LocalesMenuIcon,
      name: "Nuestras Salas",
      url: "https://bingos.codere.bet.ar",
      target: "_blank",
    },
  ];

  const seo_menu = [
    { name: "Casino", url: "/casino",  isSPA: true },
    {
      name: "Casino en vivo",
      url: "/casino/casino-en-vivo",
      isSPA: true,
    },
    {
      name: "Ruleta",
      url: "/casino/ruleta",
      isSPA: true,
    },
    {
      name: "Slots",
      url: "/casino/slots",
      isSPA: true,
    },
    {
      name: "Blackjack",
      url: "/casino/blackjack",
    },
    {
      name: "Eventos Deportivos",
      url: "/eventos-deportivos",
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

  const hamburgerHandler = () => {
    hamburger ? setOnShow("") : setOnShow("open");
    setHamburger(!hamburger);
  };
  return (
    <isMobileContext.Consumer>
      {(isMobile) => {
        return (
          <Navbar className="header_nav stroke" variant="dark">
            {isMobile ? (
              <div id="father">
                <div id="outer-container">
                  <Menu
                    id="elastic"
                    left
                    customCrossIcon={false}
                    pageWrapId={"page-wrap"}
                    outerContainerId={"outer-container"}
                    burgerButtonClassName={onShow}
                    isOpen={hamburger}
                    onOpen={hamburgerHandler}
                    onClose={hamburgerHandler}
                  >
                    {menu.map((m, k) => (
                      <NavLink
                        key={k}
                        to={m.url}
                        target={m.target}
                        rel="nofollow"
                      >
                        <div className={'mobMenuSVGwrapper'}>
                          {(React.createElement (m.icon, { className: "mobileMenuIcon" }))}
                          {m.name}
                        </div>

                        <div className={'arrowright'}>
                          < Arrowrightw/>
                        </div>
                      </NavLink>
                    ))}

                    <Accordion className="hamb-accordion">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header className={'codereAcordeonTX'}>¿Cómo jugar?</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            {seo_menu.map((s, k) => (
                              <li key={k}>
                                <Link to={s.url} onClick={hamburgerHandler}>
                                  {s.name}
                                  < Arrowrightw/>
                                </Link>
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
                <InputGroup className="header-group-left">
                  <Nav.Link
                    href="https://m.caba.codere.bet.ar/deportes/#/HomePage"
                    rel="nofollow"
                  >
                    <LazyLoadImage
                      src={LOGO}
                      alt="Logo Casa de Apuestas Codere - Real Madrid "
                    />
                  </Nav.Link>

                  <Nav className="me-auto">
                    {menu.map((m, k) => (
                      <Nav.Link
                        key={k}
                        href={m.url}
                        target={m.target}
                        rel="nofollow"
                      >
                        <span style={{ textTransform: "uppercase" }}>
                          {m.name}
                        </span>
                      </Nav.Link>
                    ))}
                  </Nav>
                </InputGroup>
                <div className="header-group-right">
                  <Dropdown>
                    <Dropdown.Toggle className="header_btn">
                      <ArrowdownBlack className={"arrowdownBlack"}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {seo_menu.map((s, k) => (
                        <Dropdown.Item
                          as={Link}
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
                </div>
              </Container>
            )}
          </Navbar>
        );
      }}
    </isMobileContext.Consumer>
  );
}

export default Header;
