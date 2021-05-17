import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bike from "../../img/iconmonstr-bicycle-1.svg";
import { Scrollama, Step } from "react-scrollama";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useMediaQuery } from "react-responsive";
import L from "leaflet";
import ChangeView from "./ChangeView.jsx";
import germany from "../../data/germany.json";
import nrw from "../../data/nrw.json";
import muensterland from "../../data/muensterland.json";
import muenster from "../../data/muenster.json";
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
    layer.options.fillColor = "#7ab629";
    layer.options.fillOpacity = 0.6;
    layer.options.color = "#7ab629";
  };

  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

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
                  onEachFeature={onEachPolygon}
                  style={mapStyle}
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
              <h2>Welcome to Your New Home!</h2>
              <p>
                This is going to be very very awesome.
                <b style={{ color: "#06aa6e" }}>“Trust me”</b>
                The directive of this movement is to curtail the plastic litter
                and its associated impact through{" "}
                <b style={{ color: "#06aa6e" }}>
                  “Transforming our world: the 2030 Agenda for Sustainable
                  Development”
                </b>
                . In a broader picture, the term{" "}
                <b style={{ color: "#06aa6e" }}>“waste”</b> contributes
                countless elements in our everyday routine.
              </p>
              <p>
                The waste statistics displays the household waste in tonnes for
                Europe as of 2018, of which the top ranked country is Turkey{" "}
                <b>(32.3 million)</b>, followed by the United Kingdom{" "}
                <b>(31.9 million)</b>, France <b>(21 million)</b> and{" "}
                <b style={{ color: "#00441b" }}>Germany (20.6 million)</b>.
              </p>
              <p>
                <b style={{ color: "red" }}>
                  Click on any country on the map to compare them.
                </b>
              </p>
            </div>
          </Step>
          <Step data={2} key={2}>
            <div
              className={
                isTabletOrMobile
                  ? "storymap-description mobile"
                  : "storymap-description"
              }>
              <h2>about Germany</h2>
              <p>
                According to the Federal Government report, a larger portion of
                household waste generated in Germany was increased by{" "}
                <b>0.8%</b> in <b>2019</b>. Ranking of states is based on waste
                generated per inhabitant in Kilograms (Kg/E). At a glance,
                states like Rheinland-Pfalz <b>(525 Kg)</b>, Niedersachsen{" "}
                <b>(511 Kg)</b>, Bayern <b>(479 Kg)</b>, Saarland{" "}
                <b>(476 Kg)</b> is followed by{" "}
                <b style={{ color: "#bd0026" }}>Nordrhein-Westfalen (461 Kg)</b>
                .
              </p>
              <p style={{ color: "#06aa6e" }}>
                Eager to know the condition of our state!
              </p>
            </div>
          </Step>
          <Step data={3} key={3}>
            <div
              className={
                isTabletOrMobile
                  ? "storymap-description mobile"
                  : "storymap-description"
              }>
              <h2>about North Rhine-Westphalia</h2>
              <p>
                Looking into the statistics of the five Regierungsbezirke in
                NRW, <b style={{ color: "#bd0026" }}>Münster</b> generates the
                highest amount of household waste per inhabitant{" "}
                <b>(496.71 Kg)</b>, followed by Köln <b>(477.26 Kg)</b>,
                Arnsberg <b>(461 Kg)</b>, Düsseldorf <b>(454.31 Kg)</b>, Detmold{" "}
                <b>(422.9 Kg)</b>.
              </p>
              <p style={{ color: "#06aa6e" }}>
                Time for action, Let’s start from our hometown!
              </p>
            </div>
          </Step>

          <Step data={4} key={4}>
            <div
              className={
                isTabletOrMobile
                  ? "storymap-description mobile"
                  : "storymap-description"
              }>
              <h2>about Münsterland</h2>
              <p>
                Here is a small comparison on each category of waste from
                Münster generated in <b>2018</b> and <b>2019</b>, where
                household and bulky waste was <b>1799.8 kg/E</b>, which surged
                to <b>1808.8 kg/E</b> in <b>2019</b>. There was a decrease in
                the total amount of organic and green waste generated in{" "}
                <b>2019 (1374.01 kg/E)</b> when compared to{" "}
                <b>2018 (1381.2 kg/E)</b>. Similarly, there was a decline in the
                generation of glass wastes from<b> 183.7 kg/E</b> to{" "}
                <b>182 kg/E</b> between the years <b>2018</b> and <b>2019</b>.
                There was an increase in the generation of paper waste in
                Münster, which rose from <b>590.7 kg/E</b> in <b>2018</b> to{" "}
                <b>597.03 kg/E</b> in <b>2019</b> quantifying waste from each
                category.
              </p>
              <p style={{ color: "#06aa6e" }}>
                Gain a better insight on the amount of household waste produced
                per inhabitant in your Stadtteil today!
              </p>
              <p style={{ color: "#06aa6e" }}>
                Small steps make a big difference, Towards <b>MÜNSTAINABLE!</b>
              </p>
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
        <Container id='intro-container'>
          <Row>
            <Col>
              <h2>Discover Your New Home</h2>
              <img src={bike} className='icon' alt='Icon of a Bike' />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Intro;
