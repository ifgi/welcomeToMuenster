import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentSight } from "../../actions";
import Button from "react-bootstrap/Button";
import { useMediaQuery } from "react-responsive";
import L from "leaflet";

//load picture placeholders for popups
import noPicturePrimary from "../../img/no-picture-primary.svg";
import noPictureBlue from "../../img/no-picture-blue.svg";
//load the icons
import infoIco from "../../img/marker/info_primary.svg";
import infoIcoGrey from "../../img/marker/info_grey.svg";
import sightsIco from "../../img//marker/sights_primary.svg";
import sightsIcoGrey from "../../img/marker/sights_grey.svg";
import cultureIco from "../../img//marker/culture_primary.svg";
import cultureIcoGrey from "../../img/marker/culture_grey.svg";
import soccerIco from "../../img//marker/soccer_primary.svg";
import soccerIcoGrey from "../../img/marker/soccer_grey.svg";
import foodIco from "../../img//marker/food_primary.svg";
import foodIcoGrey from "../../img/marker/food_grey.svg";
import natureIco from "../../img//marker/nature_primary.svg";
import natureIcoGrey from "../../img/marker/nature_grey.svg";
import infoIcoMaster from "../../img/marker/info_primary_master.svg";
import sightsIcoMaster from "../../img/marker/sights_primary_master.svg";
import cultureIcoMaster from "../../img/marker/culture_primary_master.svg";
import soccerIcoMaster from "../../img/marker/soccer_primary_master.svg";
import foodIcoMaster from "../../img/marker/food_primary_master.svg";
import natureIcoMaster from "../../img/marker/nature_primary_master.svg";
function OwnMarker(props) {
  const dispatch = useDispatch();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const language = useSelector((state) => state.language);
  const currentSight = useSelector((state) => state.currentSight);

  const openModal = () => {
    props.handleShow();
  };
  const currentIco = () => {
    if (currentSight === props.point.id) {
      if (
        props.point.properties.CATEGORY === "canteen" ||
        props.point.properties.CATEGORY === "food" ||
        props.point.properties.CATEGORY === "coffee-shop"
      ) {
        return language === "german"
          ? foodIco
          : language === "englisch"
          ? foodIcoMaster
          : foodIco;
      }
      if (
        props.point.properties.CATEGORY === "bike" ||
        props.point.properties.CATEGORY === "nature" ||
        props.point.properties.CATEGORY === "hiking"
      ) {
        return language === "german"
          ? natureIco
          : language === "englisch"
          ? natureIcoMaster
          : natureIco;
      }
      if (
        props.point.properties.CATEGORY === "contact-points" ||
        props.point.properties.CATEGORY === "library" ||
        props.point.properties.CATEGORY === "uni-buildings"
      ) {
        return language === "german"
          ? infoIco
          : language === "englisch"
          ? infoIcoMaster
          : infoIco;
      }
      if (props.point.properties.CATEGORY === "culture") {
        return language === "german"
          ? cultureIco
          : language === "englisch"
          ? cultureIcoMaster
          : cultureIco;
      }
      if (props.point.properties.CATEGORY === "sights") {
        return language === "german"
          ? sightsIco
          : language === "englisch"
          ? sightsIcoMaster
          : sightsIco;
      }
      if (
        props.point.properties.CATEGORY === "sports" ||
        props.point.properties.CATEGORY === "fun"
      ) {
        return language === "german"
          ? soccerIco
          : language === "englisch"
          ? soccerIcoMaster
          : soccerIco;
      } else {
        return language === "german"
          ? infoIco
          : language === "englisch"
          ? infoIcoMaster
          : infoIco;
      }
    } else {
      if (
        props.point.properties.CATEGORY === "canteen" ||
        props.point.properties.CATEGORY === "food" ||
        props.point.properties.CATEGORY === "coffee-shop"
      ) {
        return foodIcoGrey;
      }
      if (
        props.point.properties.CATEGORY === "bike" ||
        props.point.properties.CATEGORY === "nature" ||
        props.point.properties.CATEGORY === "hiking"
      ) {
        return natureIcoGrey;
      }
      if (
        props.point.properties.CATEGORY === "contatct-points" ||
        props.point.properties.CATEGORY === "library" ||
        props.point.properties.CATEGORY === "uni-buildings"
      ) {
        return infoIcoGrey;
      }
      if (props.point.properties.CATEGORY === "culture") {
        return cultureIcoGrey;
      }
      if (props.point.properties.CATEGORY === "sights") {
        return sightsIcoGrey;
      }
      if (
        props.point.properties.CATEGORY === "sports" ||
        props.point.properties.CATEGORY === "fun"
      ) {
        return soccerIcoGrey;
      } else {
        return infoIcoGrey;
      }
    }
  };
  var ownIcon = L.icon({
    iconUrl: currentIco(),
    iconSize: [26, 42], // size of the icon
    shadowAnchor: [4, 62], // the same for the shadow
    iconAnchor: [13, 42],
    popupAnchor: [0, -50], // point from which the popup should open relative to the iconAnchor
  });
  return (
    <>
      <Marker
        icon={ownIcon}
        key={"sightNo" + props.point.id + props.point.geometry.coordinates[1]}
        position={[
          props.point.geometry.coordinates[1],
          props.point.geometry.coordinates[0],
        ]}
        eventHandlers={{
          click: (e) => {
            dispatch(setCurrentSight(props.point.id));
          },
        }}>
        {isTabletOrMobile ? (
          <Popup
            autoPan={true}
            key={"keyPopup" + props.point.geometry.coordinates + props.point.id}
            className='request-popup mobile overflow-x'>
            <div className='picture-div'>
              <h3>
                {language === "german" ? (
                  props.point.properties.NAME_D
                ) : language === "englisch" ? (
                  props.point.properties.NAME
                ) : (
                  <></>
                )}
              </h3>
              <Button
                variant={language === "englisch" ? "info" : "primary"}
                onClick={() => {
                  openModal();
                }}>
                {language === "german" ? (
                  <>mehr Information</>
                ) : language === "englisch" ? (
                  <>more information</>
                ) : (
                  ""
                )}
              </Button>
            </div>
          </Popup>
        ) : (
          <Popup
            autoPan={true}
            key={"keyPopup" + props.point.geometry.coordinates + props.point.id}
            className={"request-popup"}>
            <div className='picture-div'>
              {props.point.properties.IMG_LINK === null ? (
                language === "german" ? (
                  <>
                    <img
                      src={noPicturePrimary}
                      width='90%'
                      height='auto'
                      alt='Platzhalter'
                    />
                    <p>
                      Für dieses Highlight gibt es aktuell leider kein Bild.
                    </p>
                  </>
                ) : (
                  <>
                    <img
                      src={noPictureBlue}
                      width='90%'
                      height='auto'
                      alt='placeholder'
                    />
                    <p>There is currently no picture for this highlight.</p>
                  </>
                )
              ) : props.point.properties.FLICKR_REF === null ? (
                <img
                  src={props.point.properties.IMG_LINK}
                  width='100%'
                  height='auto'
                  alt={
                    language === "german"
                      ? props.point.properties.NAME_D
                      : props.point.properties.NAME
                  }
                />
              ) : (
                <a
                  className='flickr-picture'
                  data-flickr-embed='true'
                  data-header='true'
                  target='_blank'
                  rel='noreferrer'
                  href={props.point.properties.FLICKR_REF}
                  title={
                    language === "german"
                      ? props.point.properties.NAME_D
                      : props.point.properties.NAME
                  }>
                  <img
                    src={props.point.properties.IMG_LINK}
                    width='100%'
                    height='auto'
                    alt={
                      language === "german"
                        ? props.point.properties.NAME_D
                        : props.point.properties.NAME
                    }
                  />
                </a>
              )}
            </div>
          </Popup>
        )}
      </Marker>
    </>
  );
}
export default OwnMarker;
