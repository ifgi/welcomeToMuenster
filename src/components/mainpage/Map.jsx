import { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bike from "../../img/iconmonstr-bicycle-1.svg";
import { Scrollama, Step } from "react-scrollama";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useMediaQuery } from "react-responsive";
import L from "leaflet";
import ChangeView from "./ChangeView.jsx";
import germany from "../../data/sights.json";
import nrw from "../../data/nrw.json";
import muensterland from "../../data/muensterland.json";
import muenster from "../../data/muenster.json";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png",
});

//centers for the map at all scrollama steps
const stadtCenter = [51.961563, 7.628202];

function Intro() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1150px)" });
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const [currentZoom, setCurrentZoom] = useState(3);
  const [geoData, setGeoData] = useState(germany);
  const geoJsonLayer = useRef(null);

  useEffect(() => {
    if (geoJsonLayer.current) {
      geoJsonLayer.current.clearLayers().addData(geoData);
    }
  }, [geoData]);

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
      <div id='Discover'>
        <Container id='storymap-container'>
          <Row>
            <Col>
              <MapContainer
                scrollWheelZoom={false}
                zoomControl={false}
                dragging={false}
                tap={false}
                center={stadtCenter}
                zoom={13}
                id='storymap'>
                <ChangeView center={stadtCenter} zoom={13} />
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
        y
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
