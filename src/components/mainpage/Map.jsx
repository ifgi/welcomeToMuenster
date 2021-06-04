import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Selection from "./Selection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import MarkerClusterGroup from "react-leaflet-markercluster";
import OwnMarker from "./Marker";
import { MapContainer, TileLayer } from "react-leaflet";
import { useMediaQuery } from "react-responsive";
import L from "leaflet";
import sights from "../../data/sights.json";
import googleMaps from "../../img/icons/google.png";
import copy from "../../img/copy.svg";
import globeIco from "../../img/icons/iconmonstr-globe-white.svg";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png",
});

//centers for the map at all scrollama steps
const stadtCenter = [51.961563, 7.628202];

function Map() {
  const [showTooltip, setShowTooltip] = useState(false);
  const targetTooltip = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1150px)" });
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const points = useSelector((state) => state.points);
  const currentSight = useSelector((state) => state.currentSight);
  const language = useSelector((state) => state.language);
  const [currentZoom, setCurrentZoom] = useState(3);
  const [geoData, setGeoData] = useState(sights);
  const geoJsonLayer = useRef(null);

  //the polygon styling for the clustergroups
  const polygonStyle = () => {
    return {
      // the fillColor is adapted from a property which can be changed by the user (segment)
      fillColor: "#ACACAA",
      //stroke-width: to have a constant width on the screen need to adapt with scale
      opacity: 1,
      color: "#ACACAA",
      fillOpacity: 0.5,
    };
  };

  useEffect(() => {
    if (geoJsonLayer.current) {
      geoJsonLayer.current.clearLayers().addData(geoData);
    }
  }, [geoData]);

  return (
    <>
      <Container id='Discover' className={isTabletOrMobile ? "mobile" : ""}>
        <Row>
          <Col xs='12' md='4'>
            <h2>
              {currentSight === 0 ||
              points.features.find((element) => element.id === currentSight) ===
                undefined ? (
                language === "german" ? (
                  "Wähle einen Punkt"
                ) : (
                  "Choose a Points"
                )
              ) : language === "german" ? (
                points.features.find((element) => element.id === currentSight)
                  .properties.NAME_D
              ) : language === "englisch" ? (
                points.features.find((element) => element.id === currentSight)
                  .properties.NAME
              ) : (
                <></>
              )}
            </h2>
            <div id='marker-information-col'>
              {currentSight === 0 ||
              points.features.find((element) => element.id === currentSight) ===
                undefined ? (
                language === "german" ? (
                  <p>
                    {" "}
                    "oder navigiere zum Mittelpunkt von Münster oder kopiere die
                    Koordinaten in deine Zwischenablage."{" "}
                  </p>
                ) : (
                  <p>
                    {" "}
                    "or use one of the buttons below to navigate to Münster's
                    city Center or copy it's position to clipboard."{" "}
                  </p>
                )
              ) : language === "german" ? (
                <>
                  <p>
                    {
                      points.features.find(
                        (element) => element.id === currentSight
                      ).properties.DESCRIPTION_D
                    }
                  </p>
                  <p>
                    {
                      points.features.find(
                        (element) => element.id === currentSight
                      ).properties.HINT_D
                    }
                  </p>
                </>
              ) : language === "englisch" ? (
                <>
                  <p>
                    {" "}
                    {
                      points.features.find(
                        (element) => element.id === currentSight
                      ).properties.DESCRIPTION
                    }{" "}
                  </p>
                  <p>
                    {" "}
                    {
                      points.features.find(
                        (element) => element.id === currentSight
                      ).properties.HINT
                    }{" "}
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className='routing-link'>
              <a
                href={
                  currentSight === 0 ||
                  points.features.find(
                    (element) => element.id === currentSight
                  ) === undefined
                    ? "https://www.muenster.de/"
                    : points.features.find(
                        (element) => element.id === currentSight
                      ).properties.LINK
                }
                target='_blank'
                rel='noreferrer'
                className='google-link'>
                <Button
                  variant={language === "englisch" ? "info" : "primary"}
                  disabled={
                    currentSight === 0 ||
                    points.features.find(
                      (element) => element.id === currentSight
                    ) === undefined
                      ? true
                      : points.features.find(
                          (element) => element.id === currentSight
                        ).properties.LINK === null
                      ? true
                      : false
                  }>
                  <img src={globeIco} id='www-icon' alt={"www icon"} /> www.
                </Button>
              </a>
              <a
                href={
                  currentSight === 0 ||
                  points.features.find(
                    (element) => element.id === currentSight
                  ) === undefined
                    ? "http://www.google.com/maps/place/51.961563,7.628202"
                    : "http://www.google.com/maps/place/" +
                      points.features.find(
                        (element) => element.id === currentSight
                      ).geometry.coordinates[1] +
                      "," +
                      points.features.find(
                        (element) => element.id === currentSight
                      ).geometry.coordinates[0]
                }
                target='_blank'
                rel='noreferrer'
                className='google-link'>
                <Button variant={language === "englisch" ? "info" : "primary"}>
                  <img
                    src={googleMaps}
                    id='google-maps-icon'
                    alt={"Google Maps logo"}
                  />{" "}
                  Navigation
                </Button>
              </a>
              {currentSight === 0 ||
              points.features.find((element) => element.id === currentSight) ===
                undefined ? (
                <Button
                  variant={language === "englisch" ? "info" : "primary"}
                  onClick={() => {
                    setShowTooltip(true);

                    navigator.clipboard.writeText("51.961563, 7.628202");
                    setTimeout(() => {
                      setShowTooltip(false);
                    }, 2000);
                  }}>
                  {language === "german" ? (
                    <>
                      <img
                        src={copy}
                        id='clipboard-icon'
                        alt={"Copy to Clipboard icon"}
                      />
                      kopieren
                    </>
                  ) : language === "englisch" ? (
                    <>
                      <img
                        src={copy}
                        id='clipboard-icon'
                        alt={"Copy to Clipboard icon"}
                      />
                      copy
                    </>
                  ) : (
                    ""
                  )}
                </Button>
              ) : (
                <>
                  <Button
                    variant={language === "englisch" ? "info" : "primary"}
                    ref={targetTooltip}
                    onClick={() => {
                      setShowTooltip(true);
                      navigator.clipboard.writeText(
                        "" +
                          points.features.find(
                            (element) => element.id === currentSight
                          ).geometry.coordinates[1] +
                          ", " +
                          points.features.find(
                            (element) => element.id === currentSight
                          ).geometry.coordinates[0]
                      );
                      setTimeout(() => {
                        setShowTooltip(false);
                      }, 2000);
                    }}>
                    {language === "german" ? (
                      <>
                        <img
                          src={copy}
                          id='clipboard-icon'
                          alt={"Copy to Clipboard icon"}
                        />
                        kopieren
                      </>
                    ) : language === "englisch" ? (
                      <>
                        <img
                          src={copy}
                          id='clipboard-icon'
                          alt={"Copy to Clipboard icon"}
                        />
                        copy
                      </>
                    ) : (
                      ""
                    )}
                  </Button>
                  <Overlay
                    target={targetTooltip.current}
                    show={showTooltip}
                    placement='top'>
                    {({
                      placement,
                      arrowProps,
                      show: _show,
                      popper,
                      ...props
                    }) => (
                      <div {...props} className='tooltip-clipboard'>
                        {language === "german"
                          ? "kopiert"
                          : language === "englisch"
                          ? "copied"
                          : ""}
                      </div>
                    )}
                  </Overlay>
                </>
              )}
            </div>
          </Col>
          <Col xs='12' md='8' id='map-container'>
            <MapContainer
              scrollWheelZoom={true}
              zoomControl={true}
              dragging={true}
              tap={true}
              center={stadtCenter}
              zoom={13}
              id='map'>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              />

              <MarkerClusterGroup polygonOptions={polygonStyle()}>
                {isTabletOrMobile
                  ? points.features.map((p) => (
                      <OwnMarker point={p} key={p.id} />
                    ))
                  : points.features.map((p) => (
                      <OwnMarker point={p} key={p.id} />
                    ))}
              </MarkerClusterGroup>
            </MapContainer>
            <Selection />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Map;
