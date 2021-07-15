import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import Container from "react-bootstrap/Container";
import { useMediaQuery } from "react-responsive";
//loading images
import schlossImage from "../../img/muenster_schloss.jpg";
import ifgiLogo from "../../img/ifgiLogo.svg";

function Landing() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const language = useSelector((state) => state.language);

  return (
    <>
      <Container id='Top' className={isTabletOrMobile ? "mobile-landing" : ""}>
        <div id='heading'>
          <h1>Moin Münster</h1>
          <div id='p-container'>
            {language === "german" ? (
              <p>
                Alles, was du für deinen Studienstart benötigst auf einer Seite.
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
