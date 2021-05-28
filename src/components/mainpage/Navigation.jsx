import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { scroller, Link, animateScroll as scroll } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../actions";
function Navigation() {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const whatLanguage = () => {
    if (language === "german") {
      return "Bachelor (German)";
    } else {
      return "Master (Englisch)";
    }
  };

  const navigators = () => {
    if (language === "german") {
      return (
        <>
          {" "}
          <Nav className='m-auto'>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("Top", {
                  smooth: true,
                  offset: -56,
                  duration: 500,
                })
              }>
              Start
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("Intro", {
                  smooth: true,
                  duration: 500,
                })
              }>
              Intro
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("FAQ", {
                  smooth: true,
                  duration: 500,
                })
              }>
              FAQ
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("Münster", {
                  smooth: true,
                  duration: 500,
                })
              }>
              Münster
            </Nav.Link>

            <Nav.Link
              onClick={() =>
                scroller.scrollTo("Studies", {
                  smooth: true,
                  duration: 500,
                })
              }>
              Studium
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("Discover", {
                  smooth: true,
                  duration: 500,
                })
              }>
              Erkundung
            </Nav.Link>
          </Nav>
        </>
      );
    }
    if (language === "englisch") {
      return (
        <>
          {" "}
          <Nav className='m-auto'>
            <Nav.Link href='#Top'>Start</Nav.Link>
            <Nav.Link href='#Intro'>Intro</Nav.Link>
            <Nav.Link href='#Münster'>Münster</Nav.Link>
            <Nav.Link href='#Studies'>Studies</Nav.Link>
            <Nav.Link href='#Explore'>Explore</Nav.Link>
          </Nav>
        </>
      );
    }
  };
  return (
    <>
      <Navbar expand='lg' fixed='top'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <NavDropdown title={whatLanguage()} id='basic-nav-dropdown'>
            <NavDropdown.Item
              onClick={() => {
                dispatch(setLanguage("german"));
              }}>
              Bachelor (German)
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                dispatch(setLanguage("englisch"));
              }}>
              Master (Englisch)
            </NavDropdown.Item>
          </NavDropdown>
          {navigators()}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
