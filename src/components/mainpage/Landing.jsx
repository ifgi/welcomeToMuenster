import { useSelector } from "react-redux";
import ifgiLogo from "../../img/ifgiLogo.svg";
import giLogo from "../../img/giLogo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useMediaQuery } from "react-responsive";
import { InView } from "react-intersection-observer";
import Dropdown from "react-bootstrap/Dropdown";
import landingImage from "../../img/pexels.jpg";
import Button from "react-bootstrap/Button";

function Landing() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const language = useSelector((state) => state.language);

  const welcomeText = () => {
    if (language === "german") {
      return <p>Dies ist ein Test</p>;
    }
    if (language === "englisch") {
      return (
        <p>
          {" "}
          You are starting Geoinformatic studies at ifgi in Münster? <br />
          Also, you are going to live in Münster and want to have the time of
          your life?Than this page could be the perfect starting-point for your
          adventure. Powered by ifgi and the student council of Geoinformatics,
          Moin Münster will guid your first steps in Münster.
        </p>
      );
    }
  };
  return (
    <Container id='landing-container'>
      <Row>
        <Col
          className='col'
          xs={{ span: 12, order: 1 }}
          md={{ span: 7, order: 1 }}>
          <div id='heading'>
            <h1>Moin Münster</h1>
            <div id='p-container'>{welcomeText()}</div>
            <div id='powered-paragraph'>
              <p>
                powered by
                <a
                  href='https://www.uni-muenster.de/Geoinformatics/'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={ifgiLogo} className='logo' alt='Logo of ifgi' />
                </a>
                &
                <a
                  href='https://geofs.uni-muenster.de/wp/'
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    src={giLogo}
                    className='logo'
                    alt='Logo of Fachschaft Geoinformatik'
                  />
                </a>
              </p>
            </div>
            <br />
          </div>
        </Col>
        <Col
          className='col'
          xs={{ span: 12, order: 2 }}
          md={{ span: 5, order: 2 }}>
          <img
            src={landingImage}
            className='landing-img'
            alt='Münster from pexels.com'
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
