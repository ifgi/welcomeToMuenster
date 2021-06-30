import { Marker } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSight } from "../../actions";
import L from "leaflet";
import geoIconPrimary from "../../img/ifgiLogoPrimary.svg";
import geoIconMaster from "../../img/ifgiLogoMaster.svg";

const MarkerGeo = (point) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const currentIco = () => {
    return language === "german" ? geoIconPrimary : geoIconMaster;
  };
  var ownIcon = L.icon({
    iconUrl: currentIco(),
    iconSize: [40, 40], // size of the icon
    shadowAnchor: [4, 62], // the same for the shadow
    iconAnchor: [20, 20],
    popupAnchor: [0, -50], // point from which the popup should open relative to the iconAnchor
  });
  return (
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
      }}
    />
  );
};
export default MarkerGeo;
