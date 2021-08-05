import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useMediaQuery } from "react-responsive";

function ContactPoints() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const language = useSelector((state) => state.language);
  return (
    <>
      <Container
        id='ContactPoints'
        className={
          language === "englisch"
            ? isTabletOrMobile
              ? "master-links mobile overflow-x"
              : "master-links"
            : isTabletOrMobile
            ? "mobile overflow-x"
            : ""
        }>
        <Row className='contactPoints-heading-row'>
          <Col>
            {language === "german" ? (
              <h2>Wichtige Kontakte</h2>
            ) : language === "englisch" ? (
              <h2>Important Contact Points</h2>
            ) : (
              <></>
            )}
          </Col>
        </Row>
        <Row className='contactPoints-row'>
          <Col
            xs='12'
            md='6'
            className={
              language === "englisch"
                ? "contactPoints-col englisch"
                : "contactPoints-col"
            }></Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactPoints;
