import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useMediaQuery } from "react-responsive";
import { InView } from "react-intersection-observer";
import Carousel from "react-bootstrap/Carousel";
//loading images
import landingImage from "../../img/pexels.jpg";
import lichthofImage from "../../img/geo_1_lichthof.jpg";
import schlossImage from "../../img/muenster_schloss.jpg";
import ifgiLogo from "../../img/ifgiLogo.svg";
import bike from "../../img/icons/iconmonstr-bicycle-white.svg";
import eat from "../../img/icons/iconmonstr-fast-food-white.svg";
import soccer from "../../img/icons/iconmonstr-soccer-white.svg";
import compass from "../../img/icons/iconmonstr-compass-white.svg";
import building from "../../img/icons/iconmonstr-building-white.svg";
import info from "../../img/icons/iconmonstr-info-white.svg";
import tree from "../../img/icons/iconmonstr-tree-white.svg";
function Landing() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const language = useSelector((state) => state.language);

  return (
    <Container id='landing-container'>
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
          <Container
            id='contentlist-container'
            className={language === "englisch" ? "master-backgroundcolor" : ""}>
            <Row>
              <Col>
                {" "}
                <img src={bike} className='icon' alt='Icon of a Bike' />
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={info} className='icon' alt='Icon of a Infobubble' />{" "}
              </Col>
              <Col>
                <img src={eat} className='icon' alt='Icon of a Pizza' />
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <img src={compass} className='icon' alt='Icon of a Compass' />
              </Col>
              <Col>
                {" "}
                <img src={soccer} className='icon' alt='Icon of a Football' />
              </Col>
            </Row>

            <Row>
              <Col>
                {" "}
                <img src={building} className='icon' alt='Icon of a Building' />
              </Col>
              <Col>
                {" "}
                <img src={tree} className='icon' alt='Icon of a Tree' />
              </Col>
            </Row>
          </Container>
        </div>
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
        <br />
      </div>
      <div
        className='landing-img-col'
        xs={{ span: 12, order: 2 }}
        md={{ span: 6, order: 2 }}>
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
        </Carousel>
      </div>
    </Container>
  );
}

export default Landing;
