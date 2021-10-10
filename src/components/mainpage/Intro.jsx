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
import nothing from "../../data/nothing.json";
import geoOneJSON from "../../data/geo1.json";

import lichthofGeo from "../../img/geo_1_lichthof.jpg";
import geoDronePhoto from "../../img/GEO1_jan_lehmann.jpg";

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
const geoCenter = [51.969371, 7.592296];

//mobile centers
const germanyCenterMobile = [51.746079, 10.601846];
const nrwCenterMobile = [51.960667, 7.626135];
const muensterCenterMobile = [51.961869, 7.383207];
const stadtCenterMobile = [51.960667, 7.626135];
const geoCenterMobile = [51.969371, 7.595696];

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
    if (data === 5) {
      setCurrentCenter(isTabletOrMobile ? geoCenterMobile : geoCenter);
      setCurrentZoom(isTabletOrMobile ? 17 : 17);
      setGeoData(nothing);
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
                    Schön, dass du dich entschieden hast, nach Münster zu
                    kommen! Umso schöner, dass du ab sofort Geoinformatik
                    studieren wirst!
                  </p>
                  <p>
                    Damit du einen guten Start in dein Studierendenleben hast,
                    wollen wir dir auf dieser Seite hilfreiche Tipps geben und
                    dir die schönsten Orte in Münster zeigen. Ganz auf die
                    Geoinformatiker-Art haben wir dafür diese Website mit
                    interaktiven Karten versehen. Diese erste Karte, die du im
                    Hintergrund sehen kannst, wird dich Schritt für Schritt nach
                    Münster bringen. Damit du nie die Orientierung verlierst,
                    ist das GEO1-Gebäude die ganze Zeit mit dem ifgi-Logo
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
                    Welcome to Münster and welcome to the Institute for
                    Geoinformatics.
                  </p>
                  <p>
                    To help you start your life in Münster, we want to give you
                    some tips and basic information and show you the most
                    important places in Münster. In true geoinformatics fashion,
                    we provide this website with interactive maps. On this first
                    map, which you can see in the background, you will be guided
                    step by step to the city of Münster. The ifgi-logo marks the
                    GEO1-building, home of our institute.
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
                    Münster is in the far west of Germany near the border to the
                    Netherlands, as you can see on the map. Scroll down to go
                    on.
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
                    North Rhine-Westphalia (NRW) is the most densely populated
                    federal state of Germany. With over 300,000 inhabitants,
                    Münster is one of the top ten cities in NRW.
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
                    throughout NRW at no additional cost. This means that you
                    can travel from Bonn to Cologne, from Münster to Düsseldorf,
                    from Dortmund to Aachen or from Domplatz in Münster to the
                    main train station, to name just a few possibilities.
                    Partly, the ticket can bring you even further than the
                    borders of NRW, which is displayed on the map.
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
                    Der höchste Punkt des Münsterlandes ist der Westerberg mit
                    gerade einmal 188,7 Metern und genau aus diesem Grund ist
                    das Fahrrad der absolute Renner in Münster und Umgebung.
                    Jede Strecke lässt sich ohne große Anstrengung bewältigen,
                    das macht Spaß und schont Geldbeutel und Umwelt. Außerdem
                    kann sich das Münsterland sehen lassen. Eine Vielzahl von
                    Burgen und Schlössern sowie viel Natur laden zu entspannten
                    Ausflügen ein. Um mehr über das Münsterland zu erfahren,
                    besuche gerne die{" "}
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
                    With only 188.7 meters, the Westerberg is already the
                    highest point of the Münsterland. Therefore, it is always
                    the right decision to ride your bicycle. It is easy to use
                    because of the flat terrain, it is cheap and environmentally
                    friendly, and it is a lot of fun. With a huge number of
                    castles and palaces and beautiful nature, the Münsterland is
                    always worth a tour. To learn more about the Münsterland,
                    check out the{" "}
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
                    zusammen als das Münsterland bezeichnet werden.
                  </p>
                </>
              ) : language === "englisch" ? (
                <>
                  <p>
                    In addition to Münster, the districts of Borken, Coesfeld,
                    Steinfurt and Warendorf can also be seen on our map, which
                    are collectively called Münsterland.
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
                    für dich vorbereitet. Sei also gespannt.
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
                    city with much to offer. To give you a brief overview, we
                    have an interactive map at the very end of this page with
                    the most beautiful places in Münster. So stay curious.
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
                    Münsters erkennen. Das GEO1 befindet sich, wie du siehst,
                    sehr nahe der Innenstadt und somit in bester Lage.
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
              className={
                isTabletOrMobile
                  ? "storymap-description mobile overflow-x"
                  : "storymap-description"
              }>
              {language === "german" ? (
                <>
                  <h2>Dein Institut</h2>
                  <p>
                    Das Institut für Geoinformatik (ifgi) befindet sich im
                    nordwestlichen Teil von Münster auf dem
                    naturwissenschaftlichen Campus. Hier sitzen wir – zusammen
                    mit den Instituten für Landschaftsökologie, Geographie und
                    Didaktik der Geographie – im schönen „GEO1“-Gebäude. Die
                    Räume des ifgi befinden sich hauptsächlich in den ersten
                    beiden Obergeschossen. Einige eurer Veranstaltungen werden
                    auch im GEO1 stattfinden, z.B. im großen GEO1-Hörsaal.
                  </p>
                </>
              ) : language === "englisch" ? (
                <>
                  <h2>Your Institute</h2>
                  <p>
                    The Institute for Geoinformatics (ifgi) is located in the
                    northwestern part of Muenster on the campus of natural
                    sciences. Here we reside in the beautiful “GEO1” building
                    together with the institutes of Landscape Ecology, Geography
                    and Didactics of Geography. The rooms of ifgi are mainly
                    located on the 1st and 2nd floor. Some of your courses and
                    lectures will also take place in GEO1, e.g., in the GEO1
                    lecture hall.
                  </p>
                </>
              ) : (
                <></>
              )}
              <img
                src={geoDronePhoto}
                width='100%'
                height='auto'
                title={
                  language === "german"
                    ? "Foto von Jan Lehmann"
                    : "photo by Jan Lehmann"
                }
                alt={
                  language === "german"
                    ? "GEO-Gebäudes, Foto von Jan Lehmann"
                    : "GEO-building, photo by Jan Lehmann"
                }
              />
            </div>
          </Step>
          <Step data={6} key={6}>
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
      </div>
    </>
  );
}

export default Intro;
