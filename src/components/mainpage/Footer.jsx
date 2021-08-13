import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ifgiLogo from "../../img/ifgiLogoWhite.svg";
import { useSelector } from "react-redux";
function Footer() {
  const language = useSelector((state) => state.language);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const openModal = () => {
    handleShow();
  };

  return (
    <>
      <Container
        id='Footer'
        className={language === "englisch" ? "master-links" : ""}>
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
          <Col xs='12' md='6' id='links-col-footer'>
            {" "}
            {language === "german" ? (
              <div className='footer-links'>
                <Button
                  variant='link'
                  onClick={() => {
                    openModal();
                  }}>
                  Impressum
                </Button>
                <br />
                <a href='https://www.uni-muenster.de/de/datenschutzerklaerung.html'>
                  Datenschutzerklärung
                </a>
              </div>
            ) : language === "englisch" ? (
              <div className='footer-links'>
                <Button
                  variant='link'
                  onClick={() => {
                    openModal();
                  }}
                  className='master-color englisch-imprint'>
                  Imprint
                </Button>
                <br />
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {language === "german" ? (
            <>
              <h2>Kontakt</h2>
              <p>
                Institut für Geoinformatik
                <br />
                Heisenbergstraße 2<br />
                48149 Münster
              </p>
              <p>
                Tel: +49 251 – 83 33 08 3<br />
                Fax: +49 251 – 83 39 76 3<br />
                geoinformatik@uni-muenster.de
              </p>

              <h2>Impressum</h2>
              <p>Westfälischen Wilhelms-Universität Münster</p>
              <p>
                Fachbereich 14 Geowissenschaften
                <br />
                Heisenbergstr. 2, 48149 Münster
                <br />
                Tel.: +49 251 83-30001
                <br />
                E-Mail: gfgeo@uni-muenster.de
              </p>
              <p>
                Der Fachbereich 14 Geowissenschaften ist eine Einrichtung der
                Westfälischen Wilhelms-Universität Münster, WWU. Die WWU ist
                eine Körperschaft des öffentlichen Rechts und zugleich eine
                Einrichtung des Landes Nordrhein-Westfalen. Sie wird vertreten
                durch Rektor Prof. Dr. Johannes Wessels.
              </p>
              <h2>Haftungshinweis</h2>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
                Haftung für die Inhalte externer Links. Für den Inhalt der
                verlinkten Seiten sind ausschließlich deren Betreiber
                verantwortlich.
              </p>
            </>
          ) : (
            <>
              <>
                <h2>Contact</h2>
                <p>
                  Institut für Geoinformatik
                  <br />
                  Heisenbergstraße 2<br />
                  48149 Münster
                </p>
                <p>
                  Tel: +49 251 – 83 33 08 3<br />
                  Fax: +49 251 – 83 39 76 3<br />
                  geoinformatik@uni-muenster.de
                </p>
                <>
                  <h2>Imprint</h2>
                  <p>Westfälischen Wilhelms-Universität Münster</p>
                  <p>
                    Fachbereich 14 Geowissenschaften
                    <br />
                    Heisenbergstr. 2, 48149 Münster
                    <br />
                    Tel.: +49 251 83-30001
                    <br />
                    E-Mail: gfgeo@uni-muenster.de
                  </p>
                  <p>
                    Der Fachbereich 14 Geowissenschaften ist eine Einrichtung
                    der Westfälischen Wilhelms-Universität Münster, WWU. Die WWU
                    ist eine Körperschaft des öffentlichen Rechts und zugleich
                    eine Einrichtung des Landes Nordrhein-Westfalen. Sie wird
                    vertreten durch Rektor Prof. Dr. Johannes Wessels.
                  </p>
                  <h2>Legal Notice</h2>
                  <p>
                    Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir
                    keine Haftung für die Inhalte externer Links. Für den Inhalt
                    der verlinkten Seiten sind ausschließlich deren Betreiber
                    verantwortlich.
                  </p>
                </>
              </>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Footer;
