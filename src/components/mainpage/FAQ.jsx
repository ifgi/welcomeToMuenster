import { useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import geo1LichthofImage from "../../img/geo_1_lichthof.jpg";
function FAQ() {
  const language = useSelector((state) => state.language);
  const [open, setOpen] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
  });
  return (
    <>
      <Container id='FAQ'>
        <Row id='faq-row'>
          <Col xs='12' md='12'>
            <h2>
              {" "}
              {language === "german" ? (
                <>Das Wichtigste zuerst: Die meistgestelleten Fragen</>
              ) : language === "englisch" ? (
                <>First Things First: Frequency Asked Questions</>
              ) : (
                <></>
              )}
            </h2>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [1]: !open[1],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Ich habe Fragen zum Studium. WO bekommen ich Antworten?</>
              ) : language === "englisch" ? (
                <>
                  I have got some questions regarding the studies. Where can I
                  get answers?
                </>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[1]}>
              <div>
                <div id='faq-1' className='faq-text'>
                  {language === "german" ? (
                    <>
                      <p>
                        Zunächsteinmal kann diese Seite hier vielleicht schon
                        ein paar deiner Fragen beantworten.
                      </p>
                      <p>
                        Falls dies nicht reichen sollte, hast du verschieden
                        Möglichkeiten deine Antworten zu bekommen. Bei Fragen
                        rund um das Studium kannst du dich immer in unserem
                        Front-Office melden oder auch die Fachschaft um Rat
                        bitten. Hier wird dir immer geholfen, egal welches
                        Anliegen du hast.
                      </p>
                    </>
                  ) : language === "englisch" ? (
                    <p>
                      If you have any questions regarding your studies you can
                      always call the front-office of our institute. Beside
                      that, you also can contact the Fachschaft (student
                      association ). They will help you in any case, no matter
                      where you are stucked or what your problems are.
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [2]: !open[2],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Muss ich mich schon um Kursanmeldungen kümmmern?</>
              ) : language === "englisch" ? (
                <>Do I have to enroll for courses already?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[2]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [3]: !open[3],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Was hat die Fachschaft?</>
              ) : language === "englisch" ? (
                <>What is the student association responsible for?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[3]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [4]: !open[4],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Wie finanziere ich mein Studium?</>
              ) : language === "englisch" ? (
                <>How canhow do I finance my studies?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[4]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [5]: !open[5],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Wie finde ich am besten eine Wohung oder eine WG?</>
              ) : language === "englisch" ? (
                <>How do I find nice place to live?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[5]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [6]: !open[6],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Was ist das ZDM?</>
              ) : language === "englisch" ? (
                <>What is the ZDM?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[6]}>
              <div>
                <div id='faq-1' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [7]: !open[7],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Was ist ERASMUS?</>
              ) : language === "englisch" ? (
                <>What is ERASMUS?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[7]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [8]: !open[8],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>
                  Brauche ich wirklich dringend ein Fahrrad und wo kaufe ich
                  eins?
                </>
              ) : language === "englisch" ? (
                <>Do I really need a bicycle and where can i get one?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[8]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [9]: !open[9],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Wie gut ist das Internet in der Uni?</>
              ) : language === "englisch" ? (
                <>Can I rely on the university's Wifi?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[9]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [10]: !open[10],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Mesakarte beantragen nicht vergessen!</>
              ) : language === "englisch" ? (
                <>Don't forget to apply for your Mensacard (Canteen Card)</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[10]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [11]: !open[11],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Was ist das Kultursemesterticket?</>
              ) : language === "englisch" ? (
                <>
                  What is the Kultursemesterticket (cultural semester ticket)?
                </>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[11]}>
              <div>
                <div id='faq-1' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [12]: !open[12],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Lohnt sich der Hochschulsport?</>
              ) : language === "englisch" ? (
                <>Is the Hochschulsport (university sports) worthwhile?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[12]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [13]: !open[13],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>
                  Gibt es eine Einführungswoche/Orientierungswoche für
                  Erstsemester?
                </>
              ) : language === "englisch" ? (
                <>Is there a welcome event for new students?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[13]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [14]: !open[14],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              click
            </Button>
            <Collapse in={open[14]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [15]: !open[15],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              click
            </Button>
            <Collapse in={open[15]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FAQ;
