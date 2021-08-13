import Navbar from "react-bootstrap/Navbar";
import { useCookies } from "react-cookie";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { scroller } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../actions";
function Navigation() {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["language"]);
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
          <Nav className='m-auto'>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("Top", {
                  smooth: true,
                  offset: -56,
                  duration: 500,
                })
              }>
              Anfang
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("Intro", {
                  smooth: true,
                  duration: 500,
                })
              }>
              Rundgang
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
                scroller.scrollTo("FirstSteps", {
                  smooth: true,
                  duration: 500,
                })
              }>
              Erste Schritte
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("ContactPoints", {
                  smooth: true,
                  duration: 500,
                })
              }>
              Kontakte
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
                scroller.scrollTo("Discover", {
                  smooth: true,
                  duration: 500,
                })
              }>
              Karte
            </Nav.Link>
          </Nav>
        </>
      );
    }
    if (language === "englisch") {
      return (
        <>
          <Nav className='m-auto'>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("Top", {
                  smooth: true,
                  offset: -56,
                  duration: 500,
                })
              }>
              Top
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("Intro", {
                  smooth: true,
                  duration: 500,
                })
              }>
              Tour
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("Studies", {
                  smooth: true,
                  duration: 500,
                })
              }>
              Studies
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("FirstSteps", {
                  smooth: true,
                  duration: 500,
                })
              }>
              First Steps
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("ContactPoints", {
                  smooth: true,
                  duration: 500,
                })
              }>
              Contacts
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
                scroller.scrollTo("Discover", {
                  smooth: true,
                  duration: 500,
                })
              }>
              Map
            </Nav.Link>
          </Nav>
        </>
      );
    }
  };
  return (
    <>
      <Navbar expand='xl' fixed='top' collapseOnSelect>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <NavDropdown title={whatLanguage()} id='basic-nav-dropdown'>
            <NavDropdown.Item
              onClick={() => {
                dispatch(setLanguage("german"));
                setCookie("language", "german", { path: "/" });
              }}>
              Bachelor (German)
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                dispatch(setLanguage("englisch"));
                setCookie("language", "englisch", { path: "/" });
              }}>
              Master (English)
            </NavDropdown.Item>
          </NavDropdown>
          {navigators()}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
