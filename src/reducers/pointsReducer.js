import { SET_POINTS } from "../actions";

const sightPoints = require("../data/sights.json");

/**
 * A function to find every feature of a specific category in a property of a GeoJson file
 * In the future that should all be dynamically and has therefore be ansync
 * @param {String} cat the category for wich every point should be found
 */
const getPoints = (cat) => {
  let array = [];
  for (var prop in cat) {
    console.log("test" + prop + cat[prop]);
    if (cat[prop] === true) {
      let current = [];
      if (prop === "food") {
        current = sightPoints.features.filter(
          (element) =>
            element.properties.CATEGORY === prop ||
            element.properties.CATEGORY === "canteen"
        );
      } else {
        if (prop === "info") {
          current = sightPoints.features.filter(
            (element) =>
              element.properties.CATEGORY === "uni-buildings" ||
              element.properties.CATEGORY === "library" ||
              element.properties.CATEGORY === "contact-points"
          );
        } else {
          current = sightPoints.features.filter(
            (element) => element.properties.CATEGORY === prop
          );
        }
      }
      array = array.concat(current);
    }
  }

  return array;
};

const pointReducer = (state = sightPoints, action) => {
  switch (action.type) {
    case SET_POINTS:
      let cat = action.payload.categories;
      let points = {
        type: "FeatureCollection",
        features: getPoints(cat),
      };

      return points;

    default:
      return state;
  }
};

export default pointReducer;
