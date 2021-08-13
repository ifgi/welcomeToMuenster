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
              <h2>Important Contacts</h2>
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
            }>
            <div className='contact-div'>
              {language === "german" ? (
                <>
                  {" "}
                  <h3>Technische Betreuung / Organisatorisches / Kurswahlen</h3>
                  <p>
                    <br />
                    <b>Karsten Höwelhans</b>
                    <br />
                    <b>Telefon:</b> +49 (251) 83-33 083
                    <br />
                    <b>E-Mail:</b> khoew_01@uni-muenster.de
                  </p>
                </>
              ) : (
                <>
                  {" "}
                  <h3>
                    Technical support / Organizational matters / Course
                    selection matters
                  </h3>
                  <p>
                    <br />
                    <b>Karsten Höwelhans</b>
                    <br />
                    <b>Phone:</b> +49 (251) 83-33 083
                    <br />
                    <b>Mail:</b> khoew_01@uni-muenster.de
                  </p>
                </>
              )}
            </div>
          </Col>
          <Col
            xs='12'
            md='6'
            className={
              language === "englisch"
                ? "contactPoints-col englisch"
                : "contactPoints-col"
            }>
            <div className='contact-div'>
              {language === "german" ? (
                <>
                  <h3>Fragen zur Studienplanung</h3>
                  <p>
                    <br />
                    <b>Christian Knoth</b>
                    <br />
                    <b>Telefon:</b> +49 (251) 83-33 056
                    <br />
                    <b>E-Mail:</b> christianknoth@uni-muenster.de
                  </p>
                </>
              ) : (
                <>
                  <h3>Questions Regarding Study Planning</h3>
                  <p>
                    <br />
                    <b>Christian Knoth</b>
                    <br />
                    <b>Phone:</b> +49 (251) 83-33 056
                    <br />
                    <b>Mail:</b> christianknoth@uni-muenster.de
                  </p>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactPoints;
