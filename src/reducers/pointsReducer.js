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
    if (cat[prop] === true) {
      let current = sightPoints.features.filter(
        (element) => element.properties.CATEGORY === prop
      );
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
      if (points.features.length === 0) {
        return sightPoints;
      } else {
        return points;
      }
    default:
      return state;
  }
};

export default pointReducer;
