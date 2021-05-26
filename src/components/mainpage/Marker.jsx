import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentSight } from "../../actions";

import L from "leaflet";

//load picture placeholders for popups
import noPicturePrimary from "../../img/no-picture-primary.svg";
import noPictureBlue from "../../img/no-picture-blue.svg";
//load the icons
import infoIco from "../../img//marker/info_primary.svg";
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
import infoIcoMaster from "../../img//marker/info_primary_master.svg";
import sightsIcoMaster from "../../img//marker/sights_primary_master.svg";
import cultureIcoMaster from "../../img//marker/culture_primary_master.svg";
import soccerIcoMaster from "../../img//marker/soccer_primary_master.svg";
import foodIcoMaster from "../../img//marker/food_primary_master.svg";
import natureIcoMaster from "../../img//marker/nature_primary_master.svg";
const OwnMarker = (point) => {
  const dispatch = useDispatch();

  const language = useSelector((state) => state.language);
  const currentSight = useSelector((state) => state.currentSight);
  const currentIco = () => {
    if (currentSight === point.point.id) {
      if (
        point.point.properties.CATEGORY === "canteen" ||
        point.point.properties.CATEGORY === "food" ||
        point.point.properties.CATEGORY === "coffee-shop"
      ) {
        return language === "german"
          ? foodIco
          : language === "englisch"
          ? foodIcoMaster
          : foodIco;
      }
      if (
        point.point.properties.CATEGORY === "bike" ||
        point.point.properties.CATEGORY === "nature" ||
        point.point.properties.CATEGORY === "hiking"
      ) {
        return language === "german"
          ? natureIco
          : language === "englisch"
          ? natureIcoMaster
          : natureIco;
      }
      if (
        point.point.properties.CATEGORY === "contact-points" ||
        point.point.properties.CATEGORY === "library" ||
        point.point.properties.CATEGORY === "uni-buildings"
      ) {
        return language === "german"
          ? infoIco
          : language === "englisch"
          ? infoIcoMaster
          : infoIco;
      }
      if (point.point.properties.CATEGORY === "culture") {
        return language === "german"
          ? cultureIco
          : language === "englisch"
          ? cultureIcoMaster
          : cultureIco;
      }
      if (point.point.properties.CATEGORY === "sights") {
        return language === "german"
          ? sightsIco
          : language === "englisch"
          ? sightsIcoMaster
          : sightsIco;
      }
      if (
        point.point.properties.CATEGORY === "sports" ||
        point.point.properties.CATEGORY === "fun"
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
        point.point.properties.CATEGORY === "canteen" ||
        point.point.properties.CATEGORY === "food" ||
        point.point.properties.CATEGORY === "coffee-shop"
      ) {
        return foodIcoGrey;
      }
      if (
        point.point.properties.CATEGORY === "bike" ||
        point.point.properties.CATEGORY === "nature" ||
        point.point.properties.CATEGORY === "hiking"
      ) {
        return natureIcoGrey;
      }
      if (
        point.point.properties.CATEGORY === "contatct-points" ||
        point.point.properties.CATEGORY === "library" ||
        point.point.properties.CATEGORY === "uni-buildings"
      ) {
        return infoIcoGrey;
      }
      if (point.point.properties.CATEGORY === "culture") {
        return cultureIcoGrey;
      }
      if (point.point.properties.CATEGORY === "sights") {
        return sightsIcoGrey;
      }
      if (
        point.point.properties.CATEGORY === "sports" ||
        point.point.properties.CATEGORY === "fun"
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
        key={"sightNo" + point.point.id + point.point.geometry.coordinates[1]}
        position={[
          point.point.geometry.coordinates[1],
          point.point.geometry.coordinates[0],
        ]}
        eventHandlers={{
          click: (e) => {
            dispatch(setCurrentSight(point.point.id));
          },
        }}>
        <Popup
          autoPan={false}
          key={"keyPopup" + point.point.geometry.coordinates + point.point.id}
          className='request-popup'>
          <div className='picture-div'>
            {point.point.properties.IMG_LINK === null ? (
              language === "german" ? (
                <>
                  <img
                    src={noPicturePrimary}
                    width='90%'
                    height='auto'
                    alt='Platzhalter'
                  />
                  <p>Für dieses Highlight gibt es aktuell leider kein Bild.</p>
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
            ) : point.point.properties.FLICKR_REF === null ? (
              <img
                src={point.point.properties.IMG_LINK}
                width='100%'
                height='auto'
                alt={
                  language === "german"
                    ? point.point.properties.NAME_D
                    : point.point.properties.NAME
                }
              />
            ) : (
              <a
                className='flickr-picture'
                data-flickr-embed='true'
                data-header='true'
                target='_blank'
                rel='noreferrer'
                href={point.point.properties.FLICKR_REF}
                title={
                  language === "german"
                    ? point.point.properties.NAME_D
                    : point.point.properties.NAME
                }>
                <img
                  src={point.point.properties.IMG_LINK}
                  width='100%'
                  height='auto'
                  alt={
                    language === "german"
                      ? point.point.properties.NAME_D
                      : point.point.properties.NAME
                  }
                />
              </a>
            )}
          </div>
        </Popup>
      </Marker>
    </>
  );
};
export default OwnMarker;
