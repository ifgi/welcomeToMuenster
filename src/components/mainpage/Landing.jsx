import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../actions";
import { Link } from "react-scroll";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useMediaQuery } from "react-responsive";
import { useCookies } from "react-cookie";
//loading images
import schlossImage from "../../img/muenster_schloss.jpg";
import ifgiLogo from "../../img/ifgiLogo.svg";

function Landing() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["language", "welcomeModal"]);
  let modalSeen = cookies.welcomeModal === "hide" ? false : true;
  console.log("modalseen: ", modalSeen);
  const [show, setShow] = useState(modalSeen);
  const handleClose = () => setShow(false);

  const handleStudies = (studieprogramm) => {
    if (studieprogramm === "bachelor") {
      dispatch(setLanguage("german"));
      setCookie("language", "german", { path: "/" });
    }
    if (studieprogramm === "master") {
      dispatch(setLanguage("englisch"));
      setCookie("language", "englisch", { path: "/" });
    }
    //make the modal hide for 30 days (in seconds). Save this information as a cookie
    let expire = 30 * 24 * 60 * 60 * 1000;
    setCookie("welcomeModal", "hide", { maxAge: expire });
  };
  return (
    <>
      <Container id='Top' className={isTabletOrMobile ? "mobile-landing" : ""}>
        <Modal show={show} onHide={handleClose} id='welcome-modal'>
          <Modal.Header>
            <Modal.Title>
              Bist du Bachelor oder Masterstudent_In? / <br />
              Are You a Bachelor- or Masterstudent?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Du kannst die Einstellung jederzeit im Navigationsmenü am oberen
              Rand ändern. / <br />
              You can change the setting at any time using the navigation menu
              at the top.
            </p>
            <div className='choose-studies'>
              <Button
                variant='primary'
                onClick={() => {
                  handleStudies("bachelor");
                  handleClose();
                }}
                className={
                  isTabletOrMobile
                    ? "mobile-studies studies-button"
                    : "studies-button"
                }>
                Bachelor
              </Button>
              <Button
                variant='info '
                onClick={() => {
                  handleStudies("master");
                  handleClose();
                }}
                className={
                  isTabletOrMobile
                    ? "mobile-studies studies-button"
                    : "studies-button"
                }>
                Master
              </Button>
            </div>
          </Modal.Body>
        </Modal>
        <div id='heading'>
          <h1>Moin Münster</h1>
          <div id='p-container'>
            {language === "german" ? (
              <p>
                Alles, was du für deinen Studienstart benötigst, auf einer
                Seite.
              </p>
            ) : language === "englisch" ? (
              <p>Everything you need to start your studies on a single page.</p>
            ) : (
              <></>
            )}
          </div>
        </div>{" "}
        <Link
          activeClass='active'
          to='Intro'
          spy={true}
          smooth={true}
          duration={500}>
          <div
            id='start-journey-container'
            className={
              language === "englisch"
                ? isTabletOrMobile
                  ? "master-backgroundcolor mobile overflow-x"
                  : "master-backgroundcolor"
                : isTabletOrMobile
                ? "mobile overflow-x"
                : ""
            }>
            {language === "german" ? (
              <p>starte deinen Rundgang</p>
            ) : language === "englisch" ? (
              <p>start your journey</p>
            ) : (
              <></>
            )}
          </div>
        </Link>
        <div
          className='landing-img-col'
          xs={{ span: 12, order: 2 }}
          md={{ span: 6, order: 2 }}>
          <img
            src={schlossImage}
            className='landing-img'
            alt='Münsters Schloss'
          />
        </div>
      </Container>
      <div id='powered-paragraph'>
        <p>
          powered by
          <a
            href='https://www.uni-muenster.de/Geoinformatics/'
            target='_blank'
            rel='noreferrer'>
            <img src={ifgiLogo} className='logo' alt='Logo of ifgi' />
          </a>
        </p>
      </div>
    </>
  );
}

export default Landing;
