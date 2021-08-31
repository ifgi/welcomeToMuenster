import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useMediaQuery } from "react-responsive";

import infoSign from "../../img/info_schild.jpg";

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
              <>
                <h2>Wichtige Kontakte</h2>
                <p>
                  Falls du Fragen zu Kurswahlen, deinem Studienprogramm oder
                  beispielsweise den elektronischen Kurswahlen hast und auch die
                  Informationen auf dieser Seite dir nicht weiterhelfen, stehen
                  die folgenden Kontakte dir gerne zur Verfügung:
                </p>
              </>
            ) : language === "englisch" ? (
              <>
                <h2>Important Contacts</h2>
                <p>
                  If you have questions regarding your program of study or for
                  example the electronic course selections and the information
                  on this page does not help you, the following contacts may
                  assist you:
                </p>
              </>
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
                    <br />
                    <b>Telefon:</b> +49 (251) 83-33 083
                    <br />
                    <b>E-Mail:</b> khoew_01@uni-muenster.de
                    <br />
                    <b>Raum:</b> 123 (GEO1)
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
                    <br />
                    <b>Phone:</b> +49 (251) 83-33 083
                    <br />
                    <b>Mail:</b> khoew_01@uni-muenster.de
                    <br />
                    <b>Room:</b> 123 (GEO1)
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
                    <b>Dr. Thomas Bartoschek</b>
                    <br />
                    <br />
                    <b>Telefon:</b> +49 (251) 83-30 011
                    <br />
                    <b>E-Mail:</b> bartoschek@uni-muenster.de
                    <br />
                    <b>Raum:</b> 104 (GEO1)
                  </p>
                </>
              ) : (
                <>
                  <h3>Questions Regarding Study Planning</h3>
                  <p>
                    <br />
                    <b>Dr. Christian Knoth</b>
                    <br />
                    <br />
                    <b>Phone:</b> +49 (251) 83-33 056
                    <br />
                    <b>Mail:</b> christianknoth@uni-muenster.de
                    <br />
                    <b>Room:</b> 137 (GEO1)
                  </p>
                </>
              )}
            </div>
          </Col>
        </Row>
        <Row className='contactPoints-row'>
          <Col xs='12' md='2'>
            <img
              className='info-sign'
              src={infoSign}
              alt={
                language === "german"
                  ? "nach diesem Informationsschild solltest du Ausschau halten"
                  : "the Information Sign you should look for"
              }
            />
          </Col>
          <Col xs='12' md='10'>
            {language === "german" ? (
              <p>
                Falls du eine Person bzw. einen Raum im Geo suchst, halte in der
                Eingangshalle ausschau nach diesem Informations-Schild. Hier
                findest du ein interaktives Indoor-Leitsystem.
              </p>
            ) : (
              <p>
                If you are looking for a person or a room in the GEO building
                just look for this information-sign in the entrance hall. Here
                you will find an interactive indoor guidance system.
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactPoints;
