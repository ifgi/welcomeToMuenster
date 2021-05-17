import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
function Footer() {
  const language = useSelector((state) => state.language);
  return (
    <>
      <Container id='Footer'>
        <Row>
          <Col>
            {" "}
            {language === "german" ? (
              <a href='https://www.uni-muenster.de/de/datenschutzerklaerung.html'>
                Datenschutzerklärung
              </a>
            ) : language === "englisch" ? (
              <a href='https://www.uni-muenster.de/de/datenschutzerklaerung.html'>
                Privacy Statement
              </a>
            ) : (
              <></>
            )}{" "}
          </Col>
          <Col>
            {language === "german" ? (
              <p>Impressum</p>
            ) : language === "englisch" ? (
              <p>Imprint</p>
            ) : (
              <></>
            )}{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
