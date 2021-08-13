import { useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Collapse from "react-bootstrap/Collapse";
import { useMediaQuery } from "react-responsive";
import lichthofGeo from "../../img/geo_2_lichthof.jpg";

function Studies() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isOverflowBachelor = useMediaQuery({ query: "(max-width: 1499px)" });
  const isOverflowMaster = useMediaQuery({ query: "(max-width: 951px)" });
  const language = useSelector((state) => state.language);

  const germanTable = (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <h3>Semester 1</h3>
            29 LP
          </th>
          <th>
            <h3>Semester 2</h3>
            32 LP
          </th>{" "}
          <th>
            <h3>Semester 3</h3>
            29/31 LP
          </th>{" "}
          <th>
            <h3>Semester 4</h3>
            34/32 LP
          </th>{" "}
          <th>
            <h3>Semester 5</h3>
            28/28 LP
          </th>{" "}
          <th>
            <h3>Semester 6</h3>
            28/28 LP
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Java-Programmierkurs</td>
          <td>Allgemeine Studien</td>
          <td>Einführung in die physische Geographie (VL)</td>
          <td>Einführung in die physische Geographie (Ü)</td>
          <td>Spezialisierung Informatik/Geoinformatik</td>
          <td>Spezialisierung Informatik/Geoinformatik</td>
        </tr>
        <tr>
          <td>Informatik 1</td>
          <td>Informatik 2</td>
          <td>Softwareentwicklung</td>
          <td>Datenbanken</td>
          <td>Projektplanung und -management</td>
          <td>Allgemeine Studien</td>
        </tr>
        <tr>
          <td>GIS Grundkurs</td>
          <td>Lineare Algebra für Informatiker</td>
          <td>Geospatial Data Infrastructure & Geoinformationsdienste</td>
          <td>Einführung in die Fernerkundung</td>
          <td>Vorbereitung Bachelorarbeit</td>
          <td>Bachelorarbeit</td>
        </tr>
        <tr>
          <td>Analysis für Informatiker</td>
          <td>Angewandte Kartographie</td>
          <td>
            Einführung in die Modellierung dynamischer räumlicher Prozesse
          </td>
          <td>Reference Systems</td>
          <td>Projekt</td>
          <td>{""}</td>
        </tr>
        <tr>
          <td>Einführung in die Geoinformatik</td>
          <td>Einführung in die Geostatistik</td>
          <td>Einführung in die Humangeographie / Raumplanung (Wahl)</td>
          <td>Geosoftware 1</td>
          <td>Geosoftware 2</td>
          <td>{""}</td>
        </tr>
        <tr>
          <td>{""}</td>
          <td>{""}</td>
          <td>{""}</td>
          <td>Einführung Humangeographie / Allgemeine Studien (Wahl)</td>
          <td>
            Die Erde/ Bodenkunde/ Vegetationsökologie/ Hydrologie/ Klimatologie
            (Wahl)
          </td>
          <td>{""}</td>
        </tr>
      </tbody>
    </Table>
  );

  const englischTable = (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <h3>Semester 1</h3>
            31 CP
          </th>{" "}
          <th>
            <h3>Semester 2</h3>
            29 CP
          </th>{" "}
          <th>
            <h3>Semester 3</h3>
            30 CP
          </th>{" "}
          <th>
            <h3>Semester 4</h3>
            30 CP
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Geoinformatics Forum</td>
          <td>Core Topics in GI Science</td>
          <td>External Studies + Wrap-up Seminar</td>
          <td>Master thesis including disputation</td>
        </tr>
        <tr>
          <td>Wayfinding and Navigation</td>
          <td>Advanced Research Methods and Skills</td>
          <td>or</td>
          <td></td>
        </tr>
        <tr>
          <td>Analysis of Spatio-Temporal Data</td>
          <td>Geoinformatics Forum</td>
          <td>
            Internship in Industry, Government or Research + Wrap-up Seminar
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Geoinformation in Society</td>
          <td>Location Based Services</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Elective Course</td>
          <td>Geosimulation Modelling</td>
          <td></td>

          <td></td>
        </tr>
        <tr>
          <td>Study Project</td>
          <td>Elective Course</td>
          <td></td>

          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>Study Project</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );

  const onWheel = (e) => {
    window.addEventListener(
      "onWheel",
      function (event) {
        event.preventDefault();
      },
      { passive: false }
    );
    e.preventDefault();
    const container = document.getElementById("table-div");
    const containerScrollPosition =
      document.getElementById("table-div").scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: "smooth",
    });
  };

  const changeScroll = () => {
    let style = document.body.style.overflow;
    document.body.style.overflow = style === "hidden" ? "auto" : "hidden";
  };

  const showScroll = () => {
    let style = document.body.style.overflow;
    document.body.style.overflow = "auto";
  };

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
              <h2>Your Study Programm</h2>
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
                  In einer Zeit, in der rechnergestützte Systeme immer breiteren
                  Raum in allen Lebensbereichen einnehmen, werden auch
                  raumbezogene Informationen zunehmend digital bereitgestellt.
                  Genau hier setzt die Geoinformatik an: Sie sucht nach Lösungen
                  für raumbezogene Problemstellungen mit Hilfe von
                  computergestützten Anwendungen.
                </p>
                <p>
                  Dein Bachelorstudium in Geoinformatik ist ein integrierter
                  Studiengang ohne Haupt- und Nebenfächer, der vom Fachbereich
                  Informatik/Mathematik (Institut für Informatik) und vom
                  Fachbereich Geowissenschaften (Institut für Geoinformatik)
                  gemeinsam durchgeführt wird. Nach einer Regelstudienzeit von 6
                  Semestern erlangst du den Universitätsgrad ‚Bachelor of
                  Science in Geoinformatik‘. Darauf aufbauend kannst du
                  ebenfalls am Institut für Geoinformatik ein Master-Studiengang
                  besuchen, mit dem der Universitätsgrad ‚Master of Science in
                  Geoinformatics‘ erworben wird.
                </p>
                <p>
                  Zunächst musst du dich weder um Kurswahlen noch um
                  Prüfungsanmeldungen kümmern. In der Einführungswoche für
                  Erstsemester, die von den Fachschaften Geoinformatik und
                  Geographie/ Landschaftsökologie organisiert wird, wirst du
                  alle weiteren Informationen zu diesen Themen erhalten. Mehr
                  dazu findest du auf dieser Seite unter den meist gestellten
                  Fragen und{" "}
                  <a
                    href='https://geofs.uni-muenster.de/wp/erstsemester/erstiwoche/'
                    target='_blank'
                    rel='noreferrer'>
                    auf der entsprechenden Internetseite der Fachschaft
                  </a>
                  . Wenn du dich bereits jetzt schon etwas schlau machen
                  möchtest, hilft dir der vereinfachte Studienverlaufsplan
                  unten. Der Bachelorstudiengang umfasst formal insgesamt 180
                  Leistungspunkte (LP) was auf sechs Semester verteilt im
                  Schnitt 30 LP pro Semester ergibt, abhängig von deinen
                  Kurswahlen. Für mehr Informationen zum Studium{" "}
                  <a
                    href='https://bachelor-geoinformatik.de/'
                    target='_blank'
                    rel='noreferrer'>
                    schaue auf diese Informationsseite
                  </a>{" "}
                  oder{" "}
                  <a
                    href='https://www.uni-muenster.de/Geoinformatics/Studies/study_programs/bachelor/ordnung.html'
                    target='_blank'
                    rel='noreferrer'>
                    wirf einen Blick in die Prüfungsordnung und den
                    detaillierten Studienverlaufsplan
                  </a>
                  .
                </p>
              </>
            ) : (
              <>
                <p>
                  Building on a Bachelor of Science in Geoinformatics or a
                  related discipline, the Master of Science in Geoinformatics
                  and Spatial Data Science program will further develop your
                  problem-solving skills, analytic capabilities, and teach
                  innovative and creative scientific research methods. Obtaining
                  a Master’s degree from the Institute for Geoinformatics will
                  prepare you for a leading position in industry and academics.
                  Medium of instruction is English.
                </p>
                <p>
                  There will be a formal information presentation in one of the
                  first lectures of the semester and you will receive an e-mail
                  to be informed when this will take place. There is a deadline
                  for course enrollment and exam registration. You will be
                  informed by e-mail about the respective deadline. The
                  Studieplan gives a rough overview of the studies. The total
                  workload of the study program is 120 credit points (ECTS)
                  distributed over 8 modules (out of 10) and 4 semesters. For
                  more information about the studies and course enrollment{" "}
                  <a
                    href='https://dachro.github.io/study_program_intro/study_program_intro.html'
                    target='_blank'
                    rel='noreferrer'>
                    take a look at this infopage
                  </a>{" "}
                  or{" "}
                  <a
                    href='https://www.uni-muenster.de/Geoinformatics/en/Studies/study_programs/master/master-study-program.html'
                    target='_blank'
                    rel='noreferrer'>
                    check out the more detailed study plan and the examination
                    regulations
                  </a>
                  .
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
              <h2>Studienverlaufsplan</h2>
            ) : (
              <h2>Study Plan</h2>
            )}
            {language === "german" ? (
              isOverflowBachelor ? (
                <div
                  id='table-div'
                  onWheel={onWheel}
                  onMouseEnter={changeScroll}
                  onMouseLeave={showScroll}>
                  {language === "german" ? germanTable : englischTable}
                </div>
              ) : (
                <div id='table-div' onWheel={onWheel}>
                  {language === "german" ? germanTable : englischTable}
                </div>
              )
            ) : isOverflowMaster ? (
              <div
                id='table-div'
                onWheel={onWheel}
                onMouseEnter={changeScroll}
                onMouseLeave={showScroll}>
                {language === "german" ? germanTable : englischTable}
              </div>
            ) : (
              <div id='table-div' onWheel={onWheel}>
                {language === "german" ? germanTable : englischTable}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Studies;
