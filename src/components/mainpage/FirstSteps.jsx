import { useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import { useMediaQuery } from "react-responsive";

import mensaCardIcon from "../../img/icons/iconmonstr-mensa-card.svg";
import globeIcon from "../../img/icons/iconmonstr-globe.svg";
import speechBubbleIcon from "../../img/icons/iconmonstr-speech-bubble.svg";
import homeIcon from "../../img/icons/iconmonstr-home.svg";
import dropdownIcon from "../../img/icons/iconmonstr-dropdown.svg";
import mensaCardIconMaster from "../../img/icons/iconmonstr-mensa-card-master.svg";
import courseIconMaster from "../../img/icons/iconmonstr-courses-master.svg";
import globeIconMaster from "../../img/icons/iconmonstr-globe-master.svg";
import homeIconMaster from "../../img/icons/iconmonstr-home-master.svg";
import dropdownIconMaster from "../../img/icons/iconmonstr-dropdown-master.svg";

function FAQ() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const language = useSelector((state) => state.language);
  //collapse boxes for the first steps part
  const [openInfo, setOpenInfo] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  return (
    <>
      <Container
        id='FirstSteps'
        className={
          language === "englisch"
            ? isTabletOrMobile
              ? "master-links mobile overflow-x"
              : "master-links"
            : isTabletOrMobile
            ? "mobile overflow-x"
            : ""
        }>
        <Row className='firststeps-heading-row'>
          <Col>
            {language === "german" ? (
              <h2>Deine ersten Schritte</h2>
            ) : language === "englisch" ? (
              <h2>Your First Steps</h2>
            ) : (
              <></>
            )}
          </Col>
        </Row>
        <Row className='firststeps-row'>
          <Col
            xs='12'
            md='6'
            className={
              language === "englisch"
                ? "firststeps-col englisch"
                : "firststeps-col"
            }>
            <img
              src={language === "german" ? speechBubbleIcon : courseIconMaster}
              className='firststeps-icon'
              alt='Icon for a course'
            />
            {language === "german" ? (
              <>
                <h3>Lerne Menschen kennen!</h3>
                <Collapse in={openInfo[1]}>
                  <div id='example-collapse-text'>
                    <p>
                      Natürlich ist es möglich, das Studium im Alleingang
                      durchzuziehen, aber gemeinsam macht das Ganze doch viel
                      mehr Spaß. Die besten Möglichkeiten, deine Kommilitoninnen
                      und Kommilitonen kennenzulernen, bieten die Angebote der
                      Fachschaften.
                      <br />
                      Informiere dich daher über die Ersti-Woche auf der{" "}
                      <a
                        href='https://geofs.uni-muenster.de/wp/erstsemester/studienstart/'
                        target='_blank'
                        rel='noreferrer'>
                        Homepage deiner Fachschaft
                      </a>
                      .
                    </p>
                    <p>
                      Neben der Einführungswoche gibt es auch ein
                      Ersti-Wochenende und verschiedene andere Veranstaltungen
                      zum Connecten.
                    </p>
                  </div>
                </Collapse>
              </>
            ) : language === "englisch" ? (
              <>
                <h3>Study Planning</h3>

                <Collapse in={openInfo[1]}>
                  <div id='example-collapse-text'>
                    <p>
                      Please check out{" "}
                      <a
                        href='https://master-geoinformatics.com/faq'
                        rel='noreferrer'
                        target='_blank'>
                        this page
                      </a>{" "}
                      for answers to the most frequently asked practical
                      questions about the study program. Here you will find
                      explanations about the university's enrollment system and
                      everything else regarding your course enrollment. For a
                      detailed description of the course program and a How-To
                      for choosing your courses,{" "}
                      <a
                        href='https://ifgi.github.io/study_program_intro/'
                        rel='noreferrer'
                        target='_blank'>
                        check this info homepage
                      </a>
                      .
                    </p>
                    <p>
                      You should check out the booking system and your study
                      plan to prepare your first semester. Also, you should have
                      a look at the courses offered and which one you are going
                      to take.{" "}
                    </p>
                  </div>
                </Collapse>
              </>
            ) : (
              <></>
            )}
            <div
              onClick={() =>
                setOpenInfo({
                  ...openInfo,
                  1: !openInfo[1],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={openInfo}>
              <img
                src={language === "german" ? dropdownIcon : dropdownIconMaster}
                className={
                  openInfo[1]
                    ? "dropdown-opened dropdown-icon"
                    : "dropdown-icon"
                }
                alt='dropdownbutton'
              />
            </div>
          </Col>
          <Col
            xs='12'
            md='6'
            className={
              language === "englisch"
                ? "firststeps-col englisch"
                : "firststeps-col"
            }>
            <img
              src={language === "german" ? mensaCardIcon : mensaCardIconMaster}
              className='firststeps-icon'
              alt='Icon of a Card'
            />
            {language === "german" ? (
              <>
                <h3>Mensakarte beantragen!</h3>
                <Collapse in={openInfo[2]}>
                  <div id='example-collapse-text'>
                    <p>
                      Damit du von der ersten Woche an sofort in der Mensa essen
                      gehen kannst, ohne ständig einen Aufpreis zahlen zu
                      müssen, vergiss nicht, deinen Studierendenausweis zu
                      beantragen.
                      <br />
                      <a
                        href='https://www.uni-muenster.de/studium/orga/studienverwaltung/studierendenkarte.html'
                        target='_blank'
                        rel='noreferrer'>
                        Schau dafür auf dieser Seite
                      </a>
                      , was du tun musst und was der Studierendenausweis noch so
                      alles kann.
                    </p>
                  </div>
                </Collapse>
              </>
            ) : language === "englisch" ? (
              <>
                <h3>Apply for Student ID card</h3>
                <Collapse in={openInfo[2]}>
                  <div id='example-collapse-text'>
                    <p>
                      To don't get in trouble by don't having a ID card for the
                      canteen or the library,{" "}
                      <a
                        href='https://www.uni-muenster.de/studium/en/orga/studienverwaltung/studierendenkarte.html'
                        target='_blank'
                        rel='noreferrer'>
                        check out this page
                      </a>
                      . Here you will get all the information you need for
                      getting your ID card and all the things you can do with
                      it.
                    </p>
                  </div>
                </Collapse>
              </>
            ) : (
              <></>
            )}
            <div
              onClick={() =>
                setOpenInfo({
                  ...openInfo,
                  2: !openInfo[2],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={openInfo}>
              <img
                src={language === "german" ? dropdownIcon : dropdownIconMaster}
                className={
                  openInfo[2]
                    ? "dropdown-opened dropdown-icon"
                    : "dropdown-icon"
                }
                alt='dropdownbutton'
              />
            </div>
          </Col>{" "}
          <Col xs='12' md='6' className='firststeps-col'>
            <img
              src={language === "german" ? globeIcon : globeIconMaster}
              className='firststeps-icon'
              alt='Icon of a LGlobe'
            />
            {language === "german" ? (
              <>
                <h3>Informiere dich</h3>
                <Collapse in={openInfo[3]}>
                  <div id='example-collapse-text'>
                    <p>
                      Wenn du dich schon im Vorhinein informieren möchtest, gibt
                      es viele wichtige Seiten, auf die du dich stützen kannst.
                      Eine kleine Auswahl der wichtigsten Webseiten:{" "}
                    </p>
                    <ul>
                      <li>
                        <a
                          href='https://www.uni-muenster.de/Geoinformatics/'
                          target='_blank'
                          rel='noreferrer'>
                          die Seite deines Institutes
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://geofs.uni-muenster.de/wp/'
                          target='_blank'
                          rel='noreferrer'>
                          alles über die Fachschaft
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.asta.ms/'
                          target='_blank'
                          rel='noreferrer'>
                          asta.ms
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.uni-muenster.de/studium/studienangebot/index.html'
                          target='_blank'
                          rel='noreferrer'>
                          über Studienveranstaltungen
                        </a>
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </>
            ) : language === "englisch" ? (
              <>
                <h3>Get Connected / Get Informed</h3>
                <Collapse in={openInfo[3]}>
                  <div id='example-collapse-text'>
                    <p>
                      There will be a welcome meeting at the beginning of the
                      semester, where you can meet your fellow students.{" "}
                    </p>
                    <p>
                      Furthermore the Fachschaft always provides good
                      opportunities to meet with other students. They plan
                      events around the Christmas time, they take care of your
                      concerns, and the best thing: it is easy to participate.
                      If you are interested{" "}
                      <a
                        href='https://geofs.uni-muenster.de/wp/'
                        target='_blank'
                        rel='noreferrer'>
                        check out the Fachschaft's homepage.
                      </a>
                    </p>
                    <p>
                      If you need any further information about the WWU or your
                      studies there are many important websites you can rely on.
                      A small selection of the most important websites:
                      <ul>
                        <li>
                          <a
                            href='https://www.uni-muenster.de/Geoinformatics/'
                            target='_blank'
                            rel='noreferrer'>
                            your institute
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://www.asta.ms/'
                            target='_blank'
                            rel='noreferrer'>
                            check out the asta.ms
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://dachro.github.io/study_program_intro/study_program_intro.html'
                            target='_blank'
                            rel='noreferrer'>
                            about course program and the booking system
                          </a>
                        </li>
                      </ul>
                    </p>
                  </div>
                </Collapse>
              </>
            ) : (
              <></>
            )}{" "}
            <div
              onClick={() =>
                setOpenInfo({
                  ...openInfo,
                  3: !openInfo[3],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={openInfo}>
              <img
                src={language === "german" ? dropdownIcon : dropdownIconMaster}
                className={
                  openInfo[3]
                    ? "dropdown-opened dropdown-icon"
                    : "dropdown-icon"
                }
                alt='dropdownbutton'
              />
            </div>
          </Col>
          <Col xs='12' md='6' className='firststeps-col'>
            <img
              src={language === "german" ? homeIcon : homeIconMaster}
              className='firststeps-icon'
              alt='Icon of a Card'
            />
            {language === "german" ? (
              <>
                <h3>Finde ein neues Zuhause</h3>
                <Collapse in={openInfo[4]}>
                  <div id='example-collapse-text'>
                    <p>
                      Der Wohnungsmarkt in Münster ist sehr angespannt und
                      gerade für diejenigen, die neu hierherkommen und nicht das
                      üppigste Portmonee besitzen, ist es manchmal schwer eine
                      Unterkunft zu finden. Wohnungen werden auf bekannten
                      Immobilien-Webseiten angeboten, liegen aber häufig
                      außerhalb des Budget von Studierenden.
                    </p>
                    <p>
                      Eine bessere Möglichkeit ist es, sich auf{" "}
                      <a
                        href='https://www.stw-muenster.de/studentisches-wohnen/wohnanlagen/'
                        target='_blank'
                        rel='noreferrer'>
                        Wohnungen des Studierendenwerkes
                      </a>{" "}
                      zu bewerben.{" "}
                    </p>
                    <p>
                      Wer das Studierendenleben voll auskosten möchte, sollte
                      sich überlegen in eine WG zu ziehen. Hier knüpfst du
                      sofort Kontakte, bist nicht alleine zuhause und sparst
                      außerdem noch Kosten. Wer also mit dem Gedanken spielt,
                      sich aber noch nicht sicher ist, sollte dem
                      gemeinschaftlichen Wohnen eine Chance geben.{" "}
                    </p>
                    <p>
                      Für mehr Informationen schaue in unsere häufig gestellten
                      Fragen, im nächsten Abschnitt.
                    </p>
                  </div>
                </Collapse>
              </>
            ) : language === "englisch" ? (
              <>
                <h3>Find a New Home</h3>

                <Collapse in={openInfo[4]}>
                  <div id='example-collapse-text'>
                    <p>
                      It is not the easiest task to find a good and inexpensive
                      flat in Münster but don't despair. The best opportunity to
                      find a flat is to register for the{" "}
                      <a
                        href='https://www.stw-muenster.de/studentisches-wohnen/wohnanlagen/'
                        target='_blank'
                        rel='noreferrer'>
                        official student residence
                      </a>{" "}
                      or to search for flat-sharing at{" "}
                      <a
                        href='https://www.wg-gesucht.de/'
                        target='_blank'
                        rel='noreferrer'>
                        wg-gesucht.de
                      </a>
                      . For more information scroll to the frequently asked
                      questions, the next section of this webpage.
                    </p>
                  </div>
                </Collapse>
              </>
            ) : (
              <></>
            )}{" "}
            <div
              onClick={() =>
                setOpenInfo({
                  ...openInfo,
                  4: !openInfo[4],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={openInfo}>
              <img
                src={language === "german" ? dropdownIcon : dropdownIconMaster}
                className={
                  openInfo[4]
                    ? "dropdown-opened dropdown-icon"
                    : "dropdown-icon"
                }
                alt='dropdownbutton'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FAQ;
