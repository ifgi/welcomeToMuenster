import { useSelector } from "react-redux";
import { Link, animateScroll as scroll } from "react-scroll";
import Container from "react-bootstrap/Container";
import { useMediaQuery } from "react-responsive";
import { InView } from "react-intersection-observer";
//loading images
import landingImage from "../../img/pexels.jpg";
import lichthofImage from "../../img/geo_1_lichthof.jpg";
import schlossImage from "../../img/muenster_schloss.jpg";
import ifgiLogo from "../../img/ifgiLogo.svg";

function Landing() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const language = useSelector((state) => state.language);

  return (
    <Container id='Top'>
      <div id='heading'>
        <h1>Moin Münster</h1>
        <div id='p-container'>
          {language === "german" ? (
            <p>Dies ist ein Test</p>
          ) : language === "englisch" ? (
            <p>
              {" "}
              You are starting Geoinformatic studies at ifgi in Münster? <br />
              Also, you are going to live in Münster and want to have the time
              of your life?Than this page could be the perfect starting-point
              for your adventure. Powered by ifgi and the student council of
              Geoinformatics, Moin Münster will guid your first steps in
              Münster.
            </p>
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
          className={language === "englisch" ? "master-backgroundcolor" : ""}>
          {language === "german" ? (
            <p>starte deinen Rundgang</p>
          ) : language === "englisch" ? (
            <p>start the journey</p>
          ) : (
            <></>
          )}
          <p></p>
        </div>
      </Link>
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
      <div
        className='landing-img-col'
        xs={{ span: 12, order: 2 }}
        md={{ span: 6, order: 2 }}>
        <img
          src={schlossImage}
          className='landing-img'
          alt='Münsters Schloss'
        />
        {/*
        <Carousel className='landing-image-carousel' controls={false} fade>
          <Carousel.Item>
            <img
              src={landingImage}
              className='landing-img'
              alt='Münster from pexels.com'
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={lichthofImage}
              className='landing-img'
              alt='GEO1 building entrance hall. Rights by WWU'
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={schlossImage}
              className='landing-img'
              alt='Münsters Schloss'
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src='https://live.staticflickr.com/65535/48500869161_14a7e4e133_c.jpg'
              className='landing-img'
              alt='Münster from above'
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src='https://live.staticflickr.com/7294/26828660931_68f1c3de92_h.jpg'
              className='landing-img'
              alt='Münster bikes'
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
            </Carousel>*/}
      </div>
    </Container>
  );
}

export default Landing;
