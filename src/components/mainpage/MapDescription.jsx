import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useMediaQuery } from "react-responsive";
//load category-icons
//in primary color
import foodPrimaryIco from "../../img/icons/iconmonstr-fast-food-primary.svg";
import buildingPrimaryIco from "../../img/icons/iconmonstr-building-primary.svg";
import compassFilledPrimaryIco from "../../img/icons/iconmonstr-compass-filled-primary.svg";
import infoPrimaryIco from "../../img/icons/iconmonstr-info-primary.svg";
import treePrimaryIco from "../../img/icons/iconmonstr-tree-primary.svg";
import soccerPrimaryIcon from "../../img/icons/iconmonstr-soccer-primary.svg";
//in secondary color for master page
import foodMasterIco from "../../img/icons/iconmonstr-fast-food-master.svg";
import buildingMasterIco from "../../img/icons/iconmonstr-building-master.svg";
import compassFilledMasterIco from "../../img/icons/iconmonstr-compass-filled-master.svg";
import infoMasterIco from "../../img/icons/iconmonstr-info-master.svg";
import treeMasterIco from "../../img/icons/iconmonstr-tree-master.svg";
import soccerMasterIcon from "../../img/icons/iconmonstr-soccer-master.svg";
function MapDescription() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const language = useSelector((state) => state.language);
  return (
    <>
      <Container
        id='Discover'
        className={
          language === "englisch"
            ? isTabletOrMobile
              ? "master-links mobile overflow-x"
              : "master-links"
            : isTabletOrMobile
            ? "mobile overflow-x"
            : ""
        }>
        <Row className='description-row'>
          <Col xs='12' md='12'>
            <h2>
              {" "}
              {language === "german" ? (
                <>Erkunde Münster</>
              ) : language === "englisch" ? (
                <>Discover Münster</>
              ) : (
                <></>
              )}
            </h2>
          </Col>
          <Col xs='12' md='12'>
            <p>
              In der nachfolgenden Karte habe wir die wichtigsten Anlaufstellen
              und die schönsten Orte in Münster für dich zusammengetragen. Damit
              du den Überblick behälst, sind die Standorte in Gruppen
              eingeteilt. Am rechten Rand der Karte ist ein Menü, in dem du die
              einzelnen Gruppen über ihre Symbole ab- und wieder anschalten
              kannst. Die einzelnen Kategorien sind:
            </p>
          </Col>
        </Row>
        <Row className='description-row'>
          <Col xs='2' md='1' className='description-icons'>
            <img
              src={language === "englisch" ? infoMasterIco : infoPrimaryIco}
              className='icon'
              alt='Button for choosing the information category'
            />
          </Col>
          <Col xs='10' md='3' className='description-explain'>
            <p>
              Unter den Info-Punkten sind alle Orte zu finden, die wichtig für
              dein Studium sind.
            </p>
          </Col>
          <Col xs='2' md='1' className='description-icons'>
            <img
              src={
                language === "englisch"
                  ? compassFilledMasterIco
                  : compassFilledPrimaryIco
              }
              className='icon'
              alt='Button for choosing the information category'
            />
          </Col>
          <Col xs='10' md='3' className='description-explain'>
            <p>
              Unter den Info-Punkten sind alle Orte zu finden, die wichtig für
              dein Studium sind.
            </p>
          </Col>

          <Col xs='2' md='1' className='description-icons'>
            <img
              src={
                language === "englisch" ? buildingMasterIco : buildingPrimaryIco
              }
              className='icon'
              alt='Button for choosing the information category'
            />
          </Col>
          <Col xs='10' md='3' className='description-explain'>
            <p>
              Unter den Info-Punkten sind alle Orte zu finden, die wichtig für
              dein Studium sind.
            </p>
          </Col>
          <Col xs='2' md='1' className='description-icons'>
            <img
              src={
                language === "englisch" ? soccerMasterIcon : soccerPrimaryIcon
              }
              className='icon'
              alt='Button for choosing the information category'
            />
          </Col>
          <Col xs='10' md='3' className='description-explain'>
            <p>
              Unter den Info-Punkten sind alle Orte zu finden, die wichtig für
              dein Studium sind.
            </p>
          </Col>

          <Col xs='2' md='1' className='description-icons'>
            <img
              src={language === "englisch" ? foodMasterIco : foodPrimaryIco}
              className='icon'
              alt='Button for choosing the information category'
            />
          </Col>
          <Col xs='10' md='3' className='description-explain'>
            <p>
              Unter den Info-Punkten sind alle Orte zu finden, die wichtig für
              dein Studium sind.
            </p>
          </Col>
          <Col xs='2' md='1' className='description-icons'>
            <img
              src={language === "englisch" ? treeMasterIco : treePrimaryIco}
              className='icon'
              alt='Button for choosing the information category'
            />
          </Col>
          <Col xs='10' md='3' className='description-explain'>
            <p>
              Unter den Info-Punkten sind alle Orte zu finden, die wichtig für
              dein Studium sind.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MapDescription;
