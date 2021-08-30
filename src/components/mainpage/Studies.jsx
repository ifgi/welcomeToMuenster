import { useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Collapse from "react-bootstrap/Collapse";
import { useMediaQuery } from "react-responsive";
import lichthofGeo from "../../img/geo_2_lichthof.jpg";
import masterModuleImg from "../../img/modulübersicht_master.png";
function Studies() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const language = useSelector((state) => state.language);

  return (
    <>
      <Container
        id='Studies'
        className={
          language === "englisch"
            ? isTabletOrMobile
              ? "master-links mobile overflow-x"
              : "master-links"
            : isTabletOrMobile
            ? "mobile overflow-x"
            : ""
        }>
        <Row className='studies-heading-row'>
          <Col>
            {language === "german" ? (
              <h2>Dein Studiengang</h2>
            ) : language === "englisch" ? (
              <h2>Your Study Program</h2>
            ) : (
              <></>
            )}
          </Col>
        </Row>
        <Row className='studies-row'>
          <Col
            xs='12'
            md='8'
            className={
              language === "englisch"
                ? isTabletOrMobile
                  ? "studies-col englisch text-col-mobile"
                  : "studies-col englisch text-col"
                : isTabletOrMobile
                ? "studies-col text-col-mobile"
                : "studies-col text-col"
            }>
            {language === "german" ? (
              <>
                <p>
                  Bevor du dich beworben hast, hast du dich sicherlich bereits
                  mit den grundlegenden Inhalten des Studiums beschäftigt, die
                  auf{" "}
                  <a
                    href='https://bachelor-geoinformatik.de/'
                    target='_blank'
                    rel='noreferrer'>
                    unserer Info-Hompage des Studiengangs beschrieben werden
                  </a>
                  . Nun solltest du dich, wenn noch nicht geschehen, auch schon
                  einmal genauer mit dem Aufbau deines Studiums beschäftigen.
                  Unten siehst du eine Übersicht über die Modulstruktur.
                </p>
                <p>
                  Zunächst musst du dir allerdings keine Sorgen machen, dass du
                  irgendeine Anmeldefrist verpasst. In der Einführungswoche für
                  Erstsemester, die von den Fachschaften Geoinformatik und
                  Geographie/ Landschaftsökologie organisiert wird, wirst du
                  alle weiteren Informationen zum Thema Kurswahlen und
                  Prüfungsanmeldung erhalten. Außerdem bietet sich neben der
                  Möglichkeit Rückfragen zu klären, die Chance deine
                  Kommilitoninnen und Kommilitonen kennenzulernen. Die
                  Fachschafte organisieren hierfür alljährlich eine ganze Woche
                  voller Veranstaltungen für euch! Mehr zum Programm der
                  Einführungswoche findest du auf dieser Seite unter den meist
                  gestellten Fragen und{" "}
                  <a
                    href='https://geofs.uni-muenster.de/wp/erstsemester/erstiwoche/'
                    target='_blank'
                    rel='noreferrer'>
                    auf der entsprechenden Internetseite der Fachschaft
                  </a>
                  .
                </p>
                <p>
                  Auch wenn du dich um die Kursbuchung im Moment noch nicht
                  kümmern musst, solltest du schon jetzt einmal einen Blick in{" "}
                  <a
                    href='https://www.uni-muenster.de/studium/studienangebot/index.html'
                    target='_blank'
                    rel='noreferrer'>
                    das Kursbuchungsportal der Uni werfen
                  </a>
                  . Um dich für Kurse anzumelden, musst du dieses Buchungsportal
                  verwenden. Das Portal ist auch dein erster Anlaufpunkt, wenn
                  du weitere Informationen zu einzelnen Veranstaltungen (z.B.
                  Ort, Zeit, Dozent_In) suchst. So findest du auch heraus, wann
                  du wo zu deiner ersten Veranstaltung aufschlagen musst. Die
                  wichtigsten Kontaktpersonen für technische oder inhaltliche
                  Fragen zum Studienprogramm findest du unter der Modulübersicht
                  auf dieser Seite.
                </p>
              </>
            ) : (
              <>
                <p>
                  Before applying for this study program, you have probably
                  already checked the main contents of it by visiting{" "}
                  <a
                    href='https://master-geoinformatics.com/'
                    target='_blank'
                    rel='noreferrer'>
                    our info homepage
                  </a>
                  . Now is the time to have closer look at it and to understand
                  the course program structure. As you can see from the figure
                  below, the program of lectures and other courses is completed
                  in the first two semesters while the rest of your studies is
                  reserved for your external semester and the Master thesis.
                  Choosing courses for your first semester will be one of your
                  first tasks. Detailed information about the course program and
                  on how to choose courses{" "}
                  <a
                    href='https://dachro.github.io/study_program_intro/study_program_intro.html'
                    target='_blank'
                    rel='noreferrer'>
                    can be found here
                  </a>
                  .
                </p>
                <p>
                  <a
                    href='https://www.uni-muenster.de/studium/en/studienangebot/index.html'
                    target='_blank'
                    rel='noreferrer'>
                    You should also have a look at the course booking system
                  </a>
                  . You will use this system to enroll for courses. Although you
                  don´t need to worry about this right now (the registration
                  phase starts later during the semester) you should already
                  have a look at the system: it is also the starting point for
                  you to get more information about specific lectures, e.g.,
                  when and where they take place.
                </p>
                <p>
                  There will be a welcome meeting at the beginning of the
                  semester, where you will receive information and get to know
                  your fellow students, some lecturers and the people you can
                  approach in case you have any questions or issues. You can
                  also find the most important contacts below.
                </p>
              </>
            )}
          </Col>
          {isTabletOrMobile ? (
            <></>
          ) : (
            <Col
              xs='12'
              md='4'
              className={
                language === "englisch"
                  ? "studies-col englisch picture-col"
                  : "studies-col picture-col"
              }>
              {" "}
              <img
                src={lichthofGeo}
                width='100%'
                height='auto'
                alt={
                  language === "german"
                    ? "Lichthof des GEO-Gebäudes"
                    : "Hall of the GEO-building"
                }
              />
              <div
                className={
                  language === "englisch"
                    ? "colored-background englisch picture-col master-backgroundcolor"
                    : "colored-background picture-col"
                }></div>
            </Col>
          )}
        </Row>
        <Row className='studies-row table-row'>
          <Col
            xs='12'
            md='12'
            className={
              language === "englisch" ? "studies-col englisch" : "studies-col"
            }>
            {language === "german" ? (
              <h2>Modulübersicht</h2>
            ) : (
              <h2>Module Overview</h2>
            )}
            {language === "german" ? (
              <div id='table-div'>
                <img
                  src={masterModuleImg}
                  width='100%'
                  height='auto'
                  alt='Module Overview: Master of Geoinformatics'
                />
              </div>
            ) : (
              <div id='table-div'>
                <img
                  src={masterModuleImg}
                  width='100%'
                  height='auto'
                  alt='Module Overview: Master of Geoinformatics'
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Studies;
