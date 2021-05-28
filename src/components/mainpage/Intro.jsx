import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Scrollama, Step } from "react-scrollama";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useMediaQuery } from "react-responsive";
import L from "leaflet";
import ChangeView from "./ChangeView.jsx";
import germany from "../../data/germany.json";
import nrw from "../../data/nrw.json";
import muensterland from "../../data/muensterland.json";
import muenster from "../../data/muenster.json";

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

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png",
});

//centers for the map at all scrollama steps
const germanyCenter = [51.8, 3.4];
const nrwCenter = [51.5, 5.2];
const muensterCenter = [52.05, 6.3];
const stadtCenter = [51.9583, 7.4];
//mobile centers
const germanyCenterMobile = [51.746079, 10.601846];
const nrwCenterMobile = [51.960667, 7.626135];
const muensterCenterMobile = [51.961869, 7.383207];
const stadtCenterMobile = [51.960667, 7.626135];

function Intro() {
  const language = useSelector((state) => state.language);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1150px)" });
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [currentCenter, setCurrentCenter] = useState(
    isTabletOrMobile ? germanyCenterMobile : germanyCenter
  );
  const [currentZoom, setCurrentZoom] = useState(3);
  const [geoData, setGeoData] = useState(germany);
  const geoJsonLayer = useRef(null);

  useEffect(() => {
    if (geoJsonLayer.current) {
      geoJsonLayer.current.clearLayers().addData(geoData);
    }
  }, [geoData]);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    if (data === 0 || data === 1) {
      setCurrentCenter(isTabletOrMobile ? germanyCenterMobile : germanyCenter);
      setCurrentZoom(isTabletOrMobile ? 5 : 5.9);
      setGeoData(germany);
    }
    if (data === 2) {
      setCurrentCenter(isTabletOrMobile ? nrwCenterMobile : nrwCenter);
      setCurrentZoom(isTabletOrMobile ? 7 : 7.5);
      setGeoData(nrw);
    }
    if (data === 3) {
      setCurrentCenter(
        isTabletOrMobile ? muensterCenterMobile : muensterCenter
      );
      setCurrentZoom(isTabletOrMobile ? 8 : 8.7);
      setGeoData(muensterland);
    }
    if (data === 4) {
      setCurrentCenter(isTabletOrMobile ? stadtCenterMobile : stadtCenter);
      setCurrentZoom(isTabletOrMobile ? 10.5 : 10.9);
      setGeoData(muenster);
    }
    return null;
  };

  const onEachPolygon = (polygon, layer) => {
    layer.options.fillColor = language === "german" ? "#7ab629" : "#009DD2";
    layer.options.fillOpacity = 0.6;
    layer.options.color = language === "german" ? "#7ab629" : "#009DD2";
  };

  const style = { fillColor: " #4C4C4A", color: "#4C4C4A", fillOpacity: 0.6 };

  return (
    <>
      <div id='Intro'>
        <Container id='storymap-container'>
          <Row>
            <Col>
              <MapContainer
                scrollWheelZoom={false}
                zoomControl={false}
                dragging={false}
                tap={false}
                center={germanyCenter}
                zoom={5}
                id='storymap'>
                <ChangeView center={currentCenter} zoom={currentZoom} />
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <GeoJSON
                  ref={geoJsonLayer}
                  key={"theOneGEOJSON"}
                  data={geoData}
                  //onEachFeature={onEachPolygon}
                  style={style}
                />
              </MapContainer>
            </Col>
          </Row>
        </Container>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={1} key={1}>
            <div
              className={
                isTabletOrMobile
                  ? "storymap-description mobile first"
                  : "storymap-description first"
              }>
              {language === "german" ? (
                <>
                  {" "}
                  <h2>Willkommen in deinem neuen Zuhause!</h2>
                  <p>
                    Schön, dass du dich entschieden hast, nach Münster zu kommen
                    und noch viel schöner, dass du ab sofort Geoinformatik
                    studiert!
                  </p>
                  <p>
                    Aus diesem Grund wollen wir dir auf dieser Seite einerseits
                    hilfreiche Tipps für deinen Start in Münster geben und
                    außerdem schonmal einen kleinen Vorgeschmack geben, was mit
                    Karten alles möglich ist und du im Studium lernst.
                    Stadterkundung und Studienstart auf die Geoinformatiker-Art.
                  </p>
                </>
              ) : language === "englisch" ? (
                <>
                  {" "}
                  <h2>Welcome to Your New Home!</h2>
                  <p>
                    This is going to be very very awesome.
                    <b style={{ color: "#06aa6e" }}>“Trust me”</b>
                    The directive of this movement is to curtail the plastic
                    litter and its associated impact through{" "}
                    <b style={{ color: "#06aa6e" }}>
                      “Transforming our world: the 2030 Agenda for Sustainable
                      Development”
                    </b>
                    . In a broader picture, the term{" "}
                    <b style={{ color: "#06aa6e" }}>“waste”</b> contributes
                    countless elements in our everyday routine.
                  </p>
                  <p>
                    The waste statistics displays the household waste in tonnes
                    for Europe as of 2018, of which the top ranked country is
                    Turkey <b>(32.3 million)</b>, followed by the United Kingdom{" "}
                    <b>(31.9 million)</b>, France <b>(21 million)</b> and{" "}
                    <b style={{ color: "#00441b" }}>Germany (20.6 million)</b>.
                  </p>
                  <p>
                    <b style={{ color: "red" }}>
                      Click on any country on the map to compare them.
                    </b>
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
          </Step>
          <Step data={2} key={2}>
            <div
              className={
                isTabletOrMobile
                  ? "storymap-description mobile"
                  : "storymap-description"
              }>
              {language === "german" ? (
                <>
                  <h2>Im Herzen Nordrheinwestfalens</h2>
                  <p>
                    Nordrheinwestfalen ist das befölkerungsreichste Bundesland
                    Deutschlands.
                  </p>
                </>
              ) : language === "englisch" ? (
                <>
                  <h2>Part of Northrhine Westfalia</h2>
                  <p>
                    Northrhein Westfalie (NRW) is the most populated federal
                    state of Germany.{" "}
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
          </Step>
          <Step data={3} key={3}>
            <div
              className={
                isTabletOrMobile
                  ? "storymap-description mobile"
                  : "storymap-description"
              }>
              {language === "german" ? (
                <>
                  <h2>Münsterland. Felder, Fahrräder und Schönheit.</h2>
                  <p>
                    Mit X Metern Höhe ist der X der höchste Punkt des
                    Münsterlandes und genau aus diesem Grund ist das Fahrrad der
                    absolute Renner in Münster. ZAHLEN FAKTEN UNSW.
                  </p>
                </>
              ) : language === "englisch" ? (
                <>
                  <h2>Münsterland. Fields, Bicycles and Beauty.</h2>
                  <p>
                    Northrhein Westfalie (NRW) is the most populated federal
                    state of Germany.{" "}
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
          </Step>

          <Step data={4} key={4}>
            <div
              className={
                isTabletOrMobile
                  ? "storymap-description mobile"
                  : "storymap-description"
              }>
              {language === "german" ? (
                <>
                  <h2>Eine Hansestadt mit bewegter Geschichte</h2>
                  <p>
                    Münster ist seit jeher ein zentraler Handelknotenpunkt und
                    ist auch heute noch ein Zentrum für eine übergeordnete
                    Region.
                  </p>
                </>
              ) : language === "englisch" ? (
                <>
                  <h2>Hanseatic City With an Eventful History</h2>
                  <p>
                    Münster has always been an important trading hub and so it
                    is still a central city .{" "}
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
          </Step>
          <Step data={5} key={5}>
            <div
              style={{
                marginTop: "100vh",
                marginLeft: "5vw",
                marginRight: "5vw",
                border: "1px solid gray",
                backgroundColor: "white",
                opacity: "0.0",
                padding: "30px",
              }}>
              This is the End
            </div>
          </Step>
        </Scrollama>
        <Container
          id='firststeps-container'
          className={language === "englisch" ? "master-links" : ""}>
          <Row>
            <Col>
              {language === "german" ? (
                <h1>Deine ersten Schritte:</h1>
              ) : language === "englisch" ? (
                <h1>Your First Steps:</h1>
              ) : (
                <></>
              )}
            </Col>
          </Row>
          <Row>
            <Col
              xs='12'
              md='6'
              className={
                language === "englisch"
                  ? "firststeps-col englisch"
                  : "firststeps-col"
              }>
              {language === "german" ? (
                <>
                  <img
                    src={speechBubbleIcon}
                    className='firststeps-icon'
                    alt='Icon of speechbubbles'
                  />

                  <h3>Mensakarte beantragen!</h3>
                  <p>
                    Damit du von der ersten Woche an sofort in der Mensa essen
                    gehen kannst, ohne ständig einen Aufpreis zahlen zu müssen,
                    vergiss nicht, deinen Studierendenausweis zu beantragen.
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
                  <img
                    src={dropdownIcon}
                    className='dropdown-icon'
                    alt='dropdownbutton'
                  />
                </>
              ) : language === "englisch" ? (
                <>
                  <img
                    src={courseIconMaster}
                    className='firststeps-icon'
                    alt='Icon for a course'
                  />
                  <h3>Course Enrolment</h3>

                  <p>
                    To don't get in trouble by don't having a ID card for the
                    canteen or the library,{" "}
                    <a
                      href='https://www.uni-muenster.de/studium/orga/studienverwaltung/studierendenkarte.html'
                      target='_blank'
                      rel='noreferrer'>
                      check out this page
                    </a>
                    . Here you will get all the information you need for getting
                    your ID card and all the things you can do with it.
                  </p>
                  <img
                    src={dropdownIconMaster}
                    className='dropdown-icon'
                    alt='dropdownbutton'
                  />
                </>
              ) : (
                <></>
              )}
            </Col>
            <Col
              xs='12'
              md='6'
              className={
                language === "englisch"
                  ? "firststeps-col englisch"
                  : "firststeps-col"
              }>
              {language === "german" ? (
                <>
                  <img
                    src={mensaCardIcon}
                    className='firststeps-icon'
                    alt='Icon of a Card'
                  />
                  <h3>Mensakarte beantragen!</h3>
                  <p>
                    Damit du von der ersten Woche an sofort in der Mensa essen
                    gehen kannst, ohne ständig einen Aufpreis zahlen zu müssen,
                    vergiss nicht, deinen Studierendenausweis zu beantragen.
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
                  <img
                    src={dropdownIcon}
                    className='dropdown-icon'
                    alt='dropdownbutton'
                  />
                </>
              ) : language === "englisch" ? (
                <>
                  <img
                    src={mensaCardIconMaster}
                    className='firststeps-icon'
                    alt='Icon of a Card'
                  />
                  <h3>Apply for Student ID / Mensacard (Canteen Card)</h3>

                  <p>
                    To don't get in trouble by don't having a ID card for the
                    canteen or the library,{" "}
                    <a
                      href='https://www.uni-muenster.de/studium/orga/studienverwaltung/studierendenkarte.html'
                      target='_blank'
                      rel='noreferrer'>
                      check out this page
                    </a>
                    . Here you will get all the information you need for getting
                    your ID card and all the things you can do with it.
                  </p>
                  <img
                    src={dropdownIconMaster}
                    className='dropdown-icon'
                    alt='dropdownbutton'
                  />
                </>
              ) : (
                <></>
              )}
            </Col>{" "}
            <Col xs='12' md='6' className='firststeps-col'>
              {" "}
              {language === "german" ? (
                <>
                  <img
                    src={globeIcon}
                    className='firststeps-icon'
                    alt='Icon of a LGlobe'
                  />
                  <h3>Informiere dich</h3>
                  <p>
                    Damit du von der ersten Woche an sofort in der Mensa essen
                    gehen kannst, ohne ständig einen Aufpreis zahlen zu müssen,
                    vergiss nicht, deinen Studierendenausweis zu beantragen.
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
                  <img
                    src={dropdownIcon}
                    className='dropdown-icon'
                    alt='dropdownbutton'
                  />
                </>
              ) : language === "englisch" ? (
                <>
                  <img
                    src={globeIconMaster}
                    className='firststeps-icon'
                    alt='Icon of a LGlobe'
                  />
                  <h3>Get well informed</h3>

                  <p>
                    To don't get in trouble by don't having a ID card for the
                    canteen or the library,{" "}
                    <a
                      href='https://www.uni-muenster.de/studium/orga/studienverwaltung/studierendenkarte.html'
                      target='_blank'
                      rel='noreferrer'>
                      check out this page
                    </a>
                    . Here you will get all the information you need for getting
                    your ID card and all the things you can do with it.
                  </p>
                  <img
                    src={dropdownIconMaster}
                    className='dropdown-icon'
                    alt='dropdownbutton'
                  />
                </>
              ) : (
                <></>
              )}
            </Col>
            <Col xs='12' md='6' className='firststeps-col'>
              {language === "german" ? (
                <>
                  <img
                    src={homeIcon}
                    className='firststeps-icon'
                    alt='Icon of a Card'
                  />
                  <h3>Finde ein neues Zuhause</h3>
                  <p>
                    Damit du von der ersten Woche an sofort in der Mensa essen
                    gehen kannst, ohne ständig einen Aufpreis zahlen zu müssen,
                    vergiss nicht, deinen Studierendenausweis zu beantragen.
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
                  <img
                    src={dropdownIcon}
                    className='dropdown-icon'
                    alt='dropdownbutton'
                  />
                </>
              ) : language === "englisch" ? (
                <>
                  <img
                    src={homeIconMaster}
                    className='firststeps-icon'
                    alt='Icon of a Card'
                  />
                  <h3>Find a New Home</h3>

                  <p>
                    To don't get in trouble by don't having a ID card for the
                    canteen or the library,{" "}
                    <a
                      href='https://www.uni-muenster.de/studium/orga/studienverwaltung/studierendenkarte.html'
                      target='_blank'
                      rel='noreferrer'>
                      check out this page
                    </a>
                    . Here you will get all the information you need for getting
                    your ID card and all the things you can do with it.
                  </p>
                  <img
                    src={dropdownIconMaster}
                    className='dropdown-icon'
                    alt='dropdownbutton'
                  />
                </>
              ) : (
                <></>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Intro;
