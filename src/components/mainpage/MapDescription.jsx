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
            {language === "german" ? (
              <p>
                In der nachfolgenden Karte habe wir die wichtigsten
                Anlaufstellen und die schönsten Orte in Münster für dich
                zusammengetragen. Damit du den Überblick behälst, sind die
                Standorte in Gruppen eingeteilt. Am rechten Rand der Karte ist
                ein Menü, in dem du die einzelnen Gruppen über ihre Symbole ab-
                und wieder anschalten kannst. Die einzelnen Kategorien sind:
              </p>
            ) : language === "englisch" ? (
              <p>
                In the following map are the most important locations of Münster
                shown. You can find contact points for your studies and also
                interesting and fun places. To have a good overview, all
                locations are split into categories. These categories can be
                deactivated or activated in the extendable sidebar on the right
                hand side of the map. The categories are:
              </p>
            ) : (
              <></>
            )}
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
            {language === "german" ? (
              <p>
                Unter den Info-Punkten sind alle Orte zu finden, die wichtig für
                dein Studium sind.
              </p>
            ) : language === "englisch" ? (
              <p>
                The information-locations are places, that are important for
                your studies and your stay in Münster.
              </p>
            ) : (
              <></>
            )}
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
            {language === "german" ? (
              <p>Der Kompass zeigt dir Sehenswürdigkeiten in Münster.</p>
            ) : language === "englisch" ? (
              <p>
                The compass shows you some of the most important sightseeing
                locations in Münster.
              </p>
            ) : (
              <></>
            )}
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
            {language === "german" ? (
              <p>
                Hinter diesem monumentalen Gebäude verbergen sich Museen und
                kulturelle Einrichtungen in deiner neuen Stadt.
              </p>
            ) : language === "englisch" ? (
              <p>
                This building shows you museums and cultural institutions in
                your new hometown.
              </p>
            ) : (
              <></>
            )}
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
            {language === "german" ? (
              <p>
                Der Fußball steht symbolisch für alles was Spaß macht und deine
                Freizeit mit kurzweiligen Aktivitäten füllt.
              </p>
            ) : language === "englisch" ? (
              <p>
                The football stands for all the things that may lighten up your
                day with fun activities.
              </p>
            ) : (
              <></>
            )}
          </Col>

          <Col xs='2' md='1' className='description-icons'>
            <img
              src={language === "englisch" ? foodMasterIco : foodPrimaryIco}
              className='icon'
              alt='Button for choosing the information category'
            />
          </Col>
          <Col xs='10' md='3' className='description-explain'>
            {language === "german" ? (
              <p>
                Unter diesem Stück Pizza finden sich alle Mensen der
                Universität, sowie der ein oder andere kulinarische Tipp.
              </p>
            ) : language === "englisch" ? (
              <p>
                The pizza shows you all the canteens of the university and some
                good food tips.
              </p>
            ) : (
              <></>
            )}
          </Col>
          <Col xs='2' md='1' className='description-icons'>
            <img
              src={language === "englisch" ? treeMasterIco : treePrimaryIco}
              className='icon'
              alt='Button for choosing the information category'
            />
          </Col>
          <Col xs='10' md='3' className='description-explain'>
            {language === "german" ? (
              <p>
                Jeder, der gerne in der Natur unterwegs ist, ob auf dem Fahrrad
                oder zu Fuß sollte Ausschau nach Bäumen auf der Karte halten.
              </p>
            ) : language === "englisch" ? (
              <p>
                For those who enjoys being out in nature, whether on a bike or
                on foot, should keep an eye out for the tree symbol on our map.
              </p>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MapDescription;
