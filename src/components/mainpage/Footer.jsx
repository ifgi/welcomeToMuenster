import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ifgiLogo from "../../img/20-05-12_logo_ifgi_redesing.png";
import { useSelector } from "react-redux";
function Footer() {
  const language = useSelector((state) => state.language);
  return (
    <>
      <Container id='Footer'>
        <Row>
          <Col xs='12' md='6'>
            {" "}
            <a
              href='https://www.uni-muenster.de/Geoinformatics/'
              target='_blank'
              rel='noreferrer'>
              <img
                src={ifgiLogo}
                className='logo'
                id='white-logo'
                alt='Logo of ifgi'
              />
            </a>
          </Col>
          <Col xs='12' md='6'>
            {" "}
            {language === "german" ? (
              <div className='footer-links'>
                <p>Impressum</p>
                <a href='https://www.uni-muenster.de/de/datenschutzerklaerung.html'>
                  Datenschutzerklärung
                </a>
              </div>
            ) : language === "englisch" ? (
              <div className='footer-links'>
                <p>Imprint</p>
                <a href='https://www.uni-muenster.de/de/datenschutzerklaerung.html'>
                  Privacy Statement
                </a>
              </div>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
