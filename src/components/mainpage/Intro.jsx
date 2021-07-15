import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import { Scrollama, Step } from "react-scrollama";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useMediaQuery } from "react-responsive";
import L from "leaflet";
import ChangeView from "./ChangeView.jsx";
import MarkerGeo from "./MarkerGeo.jsx";
import germany from "../../data/germany.json";
import nrw from "../../data/nrw.json";
import muensterland from "../../data/muensterland.json";
import muenster from "../../data/muenster.json";
import geoOneJSON from "../../data/geo1.json";
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
import lichthofGeo from "../../img/geo_1_lichthof.jpg";
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
  const geoOne = geoOneJSON.features[0];
  const language = useSelector((state) => state.language);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [currentCenter, setCurrentCenter] = useState(
    isTabletOrMobile ? germanyCenterMobile : germanyCenter
  );
  const [currentZoom, setCurrentZoom] = useState(3);
  const [geoData, setGeoData] = useState(germany);
  const geoJsonLayer = useRef(null);
  //collapse boxes for the first steps part
  const [openInfo, setOpenInfo] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

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

  const style = { fillColor: " #4C4C4A", color: "#4C4C4A", fillOpacity: 0.6 };

  return (
    <>
      <div id='Intro'>
        <div id='storymap-container'>
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
            <MarkerGeo point={geoOne} key={geoOne.id} />
          </MapContainer>
        </div>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={1} key={1}>
            <div
              className={
                isTabletOrMobile
                  ? "storymap-description mobile first overflow-x"
                  : "storymap-description first"
              }>
              {language === "german" ? (
                <>
                  {" "}
                  <h2>Willkommen in deinem neuen Zuhause!</h2>
                  <p>
                    Schön, dass du dich entschieden hast, nach Münster zu kommen
                    und umso schöner, dass du ab sofort Geoinformatik studieren
                    wirst!
                  </p>
                  <p>
                    Damit du einen guten Start in dein Studierendenleben hast,
                    wollen wir dir auf dieser Seite hilfreiche Tipps geben und
                    dir die schönsten Orte in Münster zeigen. Ganz auf die
                    Geoinformatiker-Art haben wir dafür diese Website mit
                    interaktiven Karten versehen. Diese erste Karte, die du im
                    Hintergrund sehe kannst, Wird dich Schritt für Schritt nach
                    Münster bringen und damit du nie die Orientierung verlierst,
                    ist das GEO-Gebäude die ganze Zeit mit dem ifgi-Logo
                    markiert.
                  </p>
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
                  <p>
                    Münster liegt weit im Westen Deutschlands, nahe der
                    Niederländischen Grenze, wie du auf der Karte sehen kannst.
                    Scrolle jetzt nach unten, um fortzufahren.
                  </p>
                </>
              ) : language === "englisch" ? (
                <>
                  {" "}
                  <h2>Welcome to Your New Home!</h2>
                  <p>
                    Welcome to Münster and also welcome to the Institute of
                    Geoinformatics.
                  </p>
                  <p>
                    To help you starting your life in Münster, we want to give
                    you some tips and basic information and show you the most
                    important places in Münster. In true geoinformatics fashion,
                    we provide you this website with interactive maps. On this
                    first map which you can see in the background, you will be
                    guided step by step to the city of Münster. The ifgi-logo
                    marks the GEO-building to not get disorientated on the map.
                  </p>
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
                  <p>
                    Münster is far in the west of Germany near the border to the
                    Netherlands as you can see on the map. Now, scroll down to
                    go on.
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
                  ? "storymap-description mobile overflow-x"
                  : "storymap-description"
              }>
              {language === "german" ? (
                <>
                  <h2>Ein Teil Nordrhein-Westfalens</h2>
                  <p>
                    Nordrhein-Westfalen (NRW) ist das bevölkerungsreichste
                    Bundesland Deutschlands. Und mit über 300.000 Einwohnerinnen
                    und Einwohnern ist Münster unter den Top-Ten Städten NRWs.
                  </p>
                </>
              ) : language === "englisch" ? (
                <>
                  <h2>Part of North Rhine-Westphalia</h2>
                  <p>
                    North Rhine-Westphalia (NRW) is the most populated federal
                    state of Germany. With over 300,000 inhabitants Münster is
                    on of the top ten citys in NRW.
                  </p>
                </>
              ) : (
                <></>
              )}
              <a
                data-flickr-embed='true'
                data-header='true'
                href='https://www.flickr.com/photos/132810489@N02/41935417150/in/photolist-26TFYvC-fARTxu-fABBdR-fABR96-fAS98u-68TqNH-fABQnP-fABKP4-fABCX6-fAS6Th-fAS7iC-fABRVR-fAS341-fABD3i-fABQHt-fABDiR-2jqPVHw-MmAkxj-fABB3z-fARVoy-fARTmf-fABCaH-RvUoFZ-fAS3V5-fARUh9-fARTM3-fAS8wj-2jYQSxF-6FLeSk-fAS65u-2jnkCgD-fAS3oN-fAS9gm-fARZuu-fARUrq-fABMLv-fABSo2-23ZHyN1-2fdQ8QC-fABKUt-fAS2yf-fAS2qC-fABKEV-fABCPe-fAS7VU-fAS2hE-fAS7Aj-fABCFZ-fAS3vC-fAS8Ho'
                title='Köln'>
                <img
                  src='https://live.staticflickr.com/941/41935417150_cffb157d6c_c.jpg'
                  width='100%'
                  height='auto'
                  alt='Köln'
                />
              </a>
              {language === "german" ? (
                <>
                  <p>
                    Als Teil deines Studienbeitrags zahlst du jedes Semester ein
                    Semesterticket, mit dem du kostenlos den Öffentlichen
                    Personennahverkehr in ganz NRW nutzen kannst. Du kannst also
                    ohne weitere Kosten von Bonn nach Köln, von Münster nach
                    Düsseldorf, von Dortmund nach Aachen oder vom Domplatz in
                    Münster zum Hauptbahnhof fahren, um nur einige Möglichkeiten
                    zu nennen. Dein Ticket reicht sogar etwas über die Grenzen
                    NRWs, das auf der Karte eingefärbt ist, hinaus.
                  </p>
                </>
              ) : language === "englisch" ? (
                <>
                  <p>
                    As part of your tuition fee, you pay for a semester ticket
                    every semester, which allows you to use public transport
                    throughout NRW free of charge. This means that you can
                    travel from Bonn to Cologne, from Münster to Düsseldorf,
                    from Dortmund to Aachen or from Domplatz in Münster to the
                    main train station, to name just a few possibilities, at no
                    additional cost. Partly, the ticket can bring you further
                    then the borders of NRW, which is displayed on the map.
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
                  ? "storymap-description mobile overflow-x"
                  : "storymap-description"
              }>
              {language === "german" ? (
                <>
                  <h2>Münsterland: Felder, Fahrräder und Freiheit.</h2>
                  <p>
                    Mit 188,7 Metern Höhe ist der Westerberg der höchste Punkt
                    des Münsterlandes und genau aus diesem Grund ist das Fahrrad
                    der absolute Renner in Münster und Umgebung. Jede Strecke
                    lässt sich ohne große Anstrengung bewältigen, macht Spaß und
                    schont Geldbeutel und Umwelt. Außerdem kann sich das
                    Münsterland sehen lassen. Eine Vielzahl von Burgen und
                    Schlössern, sowie viel Natur laden zu entspannten Ausflügen
                    ein. Um mehr über das Münsterland zu erfahren, besuche gerne
                    die{" "}
                    <a
                      href='https://www.muensterland.com/'
                      target='_blank'
                      rel='noreferrer'>
                      offizielle Homepage
                    </a>
                    .
                  </p>
                </>
              ) : language === "englisch" ? (
                <>
                  <h2>Münsterland. Fields, Bicycles and Beauty.</h2>
                  <p>
                    The Westerberg is the highest point of the Münsterland with
                    188.7 meters. Therefore, it is allways the right decision to
                    jump on your bicycle. It is easy to use because of the flat
                    terrain, it is cheap and environmentally friendly and beside
                    that it makes a lot of fun. With a huge number of castles
                    and palaces and a lot of nature the Münsterland is always
                    worth a tour. To learn more about the Münsterland, check out
                    the{" "}
                    <a
                      href='https://www.muensterland.com/en/'
                      target='_blank'
                      rel='noreferrer'>
                      official homepage
                    </a>
                    .
                  </p>
                </>
              ) : (
                <></>
              )}

              <a
                data-flickr-embed='true'
                data-header='true'
                href='https://www.flickr.com/photos/nstening/31218741111/in/photolist-PyGd66-2cdrW6M-no8QTm-yKg4HR-5Wfvt7-nZs8RW-p7RNu-Mkjdp1-2jfZcDi-2jibth3-2kDmh36-2h9qr1W-2hCKbZE-LTYMcL-2jaU9NG-MNLT9J-Kbo3MT-2j2fhsu-29fnmWj-MsZUDn-2ma6Fw8-2m9cX4W-2bq3Y9U-2kQ3rjf-2eWFnGZ-2j8ijRX-2jg38TK-4JEg4M-2kWRaDa-LYnGvH-2gW5Vs6-wM7pbm-f66WwC-23TE3he-QP5WBZ-XmXhak-NLVYbT-NrKk6N-HLHSeq-2iXT5JR-2e9VquU-Byqs6Y-2ki4Q35-Pm6AXC-NsGjyf-G4dJz7-2hffvW7-HukrjX-Qf4KMF-2g1ZFwP'
                title='Schloss Nordkirchen on the 1. Advent close to Münster Germany'>
                <img
                  src='https://live.staticflickr.com/5716/31218741111_dd517d7bc7_c.jpg'
                  width='100%'
                  height='auto'
                  alt='Schloss Nordkirchen on the 1. Advent close to Münster Germany'
                />
              </a>

              {language === "german" ? (
                <>
                  <p>
                    Neben Münster sind auch die Kreise Borken, Coesfeld,
                    Steinfurt und Warendorf auf unserer Karte zu erkennen, die
                    im Gesamten als das Münsterland bezeichnet werden.
                  </p>
                </>
              ) : language === "englisch" ? (
                <>
                  <p>
                    In addition to Münster, the districts of Borken, Coesfeld,
                    Steinfurt and Warendorf can also be seen on our map, which
                    are collectively referred to as the Münsterland.
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
                  ? "storymap-description mobile overflow-x"
                  : "storymap-description"
              }>
              {language === "german" ? (
                <>
                  <h2>Eine Hansestadt mit bewegter Vergangenheit</h2>
                  <p>
                    Münster ist eine Stadt mit viel Historie und entsprechend
                    viel gibt es hier zu erleben. Zwischen einer Vielzahl von
                    Sehenswürdigkeiten und kulturellen Einrichtungen bleibt
                    Platz für eine abwechslungsreiche Freizeit, denn Münster ist
                    lebendig und hat immer etwas zu bieten. Um einen kleinen
                    Überblick zu bekommen, haben wir ganz am Ende dieser Seite
                    eine interaktive Karte mit den schönsten Orten in Münster
                    für die vorbereitet. Sei also gespannt.
                  </p>
                </>
              ) : language === "englisch" ? (
                <>
                  <h2>Hanseatic City With an Eventful History</h2>
                  <p>
                    Münster is a city with a lot of history and correspondingly
                    there is much to experience here. Between a multitude of
                    sights and cultural institutions, there is also plenty of
                    room for a varied leisure time, because Münster is a lively
                    city and always has something to offer. To give you a brief
                    overview, we have an interactive map at the very end of this
                    page with the most beautiful places in Münster for you. So
                    stay curious.
                  </p>
                </>
              ) : (
                <></>
              )}
              <a
                data-flickr-embed='true'
                data-header='true'
                href='https://www.flickr.com/photos/155090883@N08/32597005718/in/photolist-REub8Y-2iDzH91-J6ZmqL-2m2vYyY-CNgHHE-b3D8L6-CNoVY6-DHtChE-DBwpyt-CNh5km-DHtty7-DBwDNk-CNp7Z4-DHsVzC-DchEvT-DKMptK-DiEDwE-DKMuHc-DHtEmj-DBw4XK-DBwJK4-DBvVht-DznAb1-CNgvxN-DKMGo6-DiEyef-DKMawM-CNhcij-DKMY5X-DiENk1-CNgBh3-CNgV5s-DKMCpz-DBwEGV-DciCRt-DiF4vS-DBvPbv-CNgVXE-DHtpzA-DBwhGc-Dzo6J9-DiFa5N-DKMQ2x-CNh7EG-pHteJg-24xd2P5-Hb3nXx-RTZHFt-2kkAfYx-2k8cQYy'
                title='Münster'>
                <img
                  src='https://live.staticflickr.com/4907/32597005718_761ed5a845_c.jpg'
                  width='100%'
                  height='auto'
                  alt='Münster'
                />
              </a>
              {language === "german" ? (
                <>
                  <p>
                    Auf der Karte kannst du nun die einzelnen Stadtteile
                    Münsters erkennen. Das Geo befindet sich, wie du siehst,
                    sehr nahe der Altstadt und somit in bester Lage.
                  </p>
                </>
              ) : language === "englisch" ? (
                <>
                  <p>
                    On the map you can see the outlines of the city of Münster
                    and its individual districts. The GEO is quite centrally
                    located and near the historic city center.
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
              End of storymap
            </div>
          </Step>
        </Scrollama>
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
          <Row>
            <Col>
              {language === "german" ? (
                <h2>Deine ersten Schritte:</h2>
              ) : language === "englisch" ? (
                <h2>Your First Steps:</h2>
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

                  <h3>Lerne Menschen kennen!</h3>

                  <Collapse in={openInfo[1]}>
                    <div id='example-collapse-text'>
                      <p>
                        Natürlich ist es möglich, das Studium im Alleingang
                        durchzuziehen, aber gemeinsam macht das Ganze doch viel
                        mehr Spaß. Die besten Möglichkeiten, deine
                        Kommilitoninnen und Kommilitonen kennenzulernen, bieten
                        die Angebote der Fachschaften.
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
                      src={dropdownIcon}
                      className={
                        openInfo[1]
                          ? "dropdown-opened dropdown-icon"
                          : "dropdown-icon"
                      }
                      alt='dropdownbutton'
                    />
                  </div>
                </>
              ) : language === "englisch" ? (
                <>
                  <img
                    src={courseIconMaster}
                    className='firststeps-icon'
                    alt='Icon for a course'
                  />
                  <h3>Course Enrolment</h3>

                  <Collapse in={openInfo[1]}>
                    <div id='example-collapse-text'>
                      <p>
                        If you are not already informed by our frontoffice you
                        can check out{" "}
                        <a
                          href='https://www.uni-muenster.de/Geoinformatics/en/Studies/study_programs/master/practical-information-for-msc-gi-students.html'
                          rel='noreferrer'
                          target='_blank'>
                          this page for all the practical information
                        </a>
                        . Here you will find explanations about the university's
                        enrolment system and everything else regarding your
                        course enrolment.
                      </p>
                    </div>
                  </Collapse>
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
                      src={dropdownIconMaster}
                      className={
                        openInfo[1]
                          ? "dropdown-opened dropdown-icon"
                          : "dropdown-icon"
                      }
                      alt='dropdownbutton'
                    />
                  </div>
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
                  <Collapse in={openInfo[2]}>
                    <div id='example-collapse-text'>
                      <p>
                        Damit du von der ersten Woche an sofort in der Mensa
                        essen gehen kannst, ohne ständig einen Aufpreis zahlen
                        zu müssen, vergiss nicht, deinen Studierendenausweis zu
                        beantragen.
                        <br />
                        <a
                          href='https://www.uni-muenster.de/studium/orga/studienverwaltung/studierendenkarte.html'
                          target='_blank'
                          rel='noreferrer'>
                          Schau dafür auf dieser Seite
                        </a>
                        , was du tun musst und was der Studierendenausweis noch
                        so alles kann.
                      </p>
                    </div>
                  </Collapse>
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
                      src={dropdownIcon}
                      className={
                        openInfo[2]
                          ? "dropdown-opened dropdown-icon"
                          : "dropdown-icon"
                      }
                      alt='dropdownbutton'
                    />
                  </div>
                </>
              ) : language === "englisch" ? (
                <>
                  <img
                    src={mensaCardIconMaster}
                    className='firststeps-icon'
                    alt='Icon of a Card'
                  />
                  <h3>Apply for Student ID / Mensacard (Canteen Card)</h3>
                  <Collapse in={openInfo[2]}>
                    <div id='example-collapse-text'>
                      <p>
                        To don't get in trouble by don't having a ID card for
                        the canteen or the library,{" "}
                        <a
                          href='https://www.uni-muenster.de/studium/orga/studienverwaltung/studierendenkarte.html'
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
                      src={dropdownIconMaster}
                      className={
                        openInfo[2]
                          ? "dropdown-opened dropdown-icon"
                          : "dropdown-icon"
                      }
                      alt='dropdownbutton'
                    />
                  </div>
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
                  <Collapse in={openInfo[3]}>
                    <div id='example-collapse-text'>
                      <p>
                        Wenn du dich schon im Vorhinein informieren möchtest
                        gibt es viele wichtige Seiten, auf die du dich stützen
                        kannst. Eine kleine Auswahl der wichtigsten Webseiten:{" "}
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
                      </ul>
                    </div>
                  </Collapse>
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
                      src={dropdownIcon}
                      className={
                        openInfo[3]
                          ? "dropdown-opened dropdown-icon"
                          : "dropdown-icon"
                      }
                      alt='dropdownbutton'
                    />
                  </div>
                </>
              ) : language === "englisch" ? (
                <>
                  <img
                    src={globeIconMaster}
                    className='firststeps-icon'
                    alt='Icon of a LGlobe'
                  />
                  <h3>Get well informed</h3>
                  <Collapse in={openInfo[3]}>
                    <div id='example-collapse-text'>
                      <p>
                        If you would like to get informed there are many
                        important websites you can rely on. A small selection of
                        the most important websites:
                        <ul>
                          <li>
                            <a
                              href='https://www.uni-muenster.de/Geoinformatics/'
                              target='_blank'
                              rel='noreferrer'>
                              the website of your new institute
                            </a>
                          </li>
                          <li>
                            <a
                              href='https://geofs.uni-muenster.de/wp/'
                              target='_blank'
                              rel='noreferrer'>
                              everything you need to know about the Fachschaft
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
                        </ul>
                      </p>
                    </div>
                  </Collapse>
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
                      src={dropdownIconMaster}
                      className={
                        openInfo[3]
                          ? "dropdown-opened dropdown-icon"
                          : "dropdown-icon"
                      }
                      alt='dropdownbutton'
                    />
                  </div>
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
                  <Collapse in={openInfo[4]}>
                    <div id='example-collapse-text'>
                      <p>
                        Der Wohnungsmarkt in Münster ist sehr angespannt und
                        gerade für diejenigen, die neu hierherkommen und nicht
                        das üppigste Portmonee besitzen, ist es manchmal schwer
                        eine Unterkunft zu finden. Wohnungen werden auf
                        bekannten Immobilien-Webseiten angeboten, liegen aber
                        häufig außerhalb des Budget von Studierenden.
                      </p>
                      <p>
                        Eine bessere Möglichkeit ist es, sich um{" "}
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
                        sich überlegen in eine WG zu ziehen oder sogar in eine
                        Verbindung einzutreten. Hier knüpfst du sofort Kontakte,
                        bist nicht alleine zuhause und sparst außerdem noch
                        Kosten. Wer also mit dem Gedanken spielt, sich aber noch
                        nicht sicher ist, sollte dem gemeinschaftlichen Wohnen
                        eine Chance geben. Für mehr Informationen schau in
                        unsere häufig gestellten Fragen, im nächsten Abschnitt.
                      </p>
                    </div>
                  </Collapse>
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
                      src={dropdownIcon}
                      className={
                        openInfo[4]
                          ? "dropdown-opened dropdown-icon"
                          : "dropdown-icon"
                      }
                      alt='dropdownbutton'
                    />
                  </div>
                </>
              ) : language === "englisch" ? (
                <>
                  <img
                    src={homeIconMaster}
                    className='firststeps-icon'
                    alt='Icon of a Card'
                  />
                  <h3>Find a New Home</h3>

                  <Collapse in={openInfo[4]}>
                    <div id='example-collapse-text'>
                      <p>
                        It is not the easiest task to find a good and
                        inexpensive flat in Münster so don't despair. The best
                        opportunities to find a flat is to register for the{" "}
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
                        . For more information scroll to the frequency asked
                        questions, the next section of this webpage.
                      </p>
                    </div>
                  </Collapse>
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
                      src={dropdownIconMaster}
                      className={
                        openInfo[4]
                          ? "dropdown-opened dropdown-icon"
                          : "dropdown-icon"
                      }
                      alt='dropdownbutton'
                    />
                  </div>
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
