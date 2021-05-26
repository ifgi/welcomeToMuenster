export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_POINTS = "SET_POINTS";
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_CURRENT_SIGHT = "SET_CURRENT_SIGHT";
//action for setting the language of the page to (currently available) Englisch or German
export const setLanguage = (language) => {
  return {
    type: "SET_LANGUAGE",
    payload: { language: language },
  };
};
//action to update the current point pool depending on the activated groups or categories
export const setPoints = (categories) => {
  return {
    type: "SET_POINTS",
    payload: { categories: categories },
  };
};
//action for activating or disabeling a category
export const setCategory = (category) => {
  return {
    type: "SET_CATEGORY",
    payload: { category: category },
  };
};
//action for activating or disabeling a category
export const setCurrentSight = (sightId) => {
  return {
    type: "SET_CURRENT_SIGHT",
    payload: { sightId: sightId },
  };
};
