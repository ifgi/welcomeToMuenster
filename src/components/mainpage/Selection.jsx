import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import collapseIcon from "../../img/icons/iconmonstr-layer.svg";
import foodWhiteIco from "../../img/icons/iconmonstr-fast-food-white.svg";
import buildingWhiteIco from "../../img/icons/iconmonstr-building-white.svg";
import compassFilledWhiteIco from "../../img/icons/iconmonstr-compass-filled-white.svg";
import infoWhiteIco from "../../img/icons/iconmonstr-info-white.svg";
import treeWhiteIco from "../../img/icons/iconmonstr-tree-white.svg";
import soccerWhiteIcon from "../../img/icons/iconmonstr-soccer-white.svg";
import { setCategory, setCurrentSight, setPoints } from "../../actions";
function Selection() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [collapse, setCollapse] = useState(false);
  const language = useSelector((state) => state.language);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPoints(categories));
  }, [categories, dispatch]);

  return (
    <>
      <div
        className={
          isTabletOrMobile
            ? "selection-container mobile"
            : "selection-container"
        }>
        <div
          id='selection-button'
          className={
            language === "englisch"
              ? collapse === true
                ? "master-backgroundcolor selection-collapsed"
                : "master-backgroundcolor"
              : collapse === true
              ? "selection-collapsed"
              : ""
          }
          onClick={() => {
            setCollapse(!collapse);
          }}>
          <img
            src={collapseIcon}
            className={
              collapse === true
                ? "selection-collapsed collapse-icon"
                : "collapse-icon"
            }
            alt='collapsebutton for selection of topics'
          />
        </div>
        <div
          id='selection-banner'
          className={
            language === "englisch"
              ? collapse === true
                ? "master-backgroundcolor selection-collapsed"
                : "master-backgroundcolor"
              : collapse === true
              ? "selection-collapsed"
              : ""
          }
          onClick={() => {
            setCollapse(!collapse);
          }}></div>
      </div>
      <div
        className={
          isTabletOrMobile
            ? "selection-container mobile"
            : "selection-container"
        }>
        <div
          id='selection-content'
          className={
            language === "englisch"
              ? collapse === true
                ? "master-backgroundcolor selection-collapsed"
                : "master-backgroundcolor"
              : collapse === true
              ? "selection-collapsed"
              : ""
          }>
          <div className='all-category-buttons'>
            <div
              className={
                categories.info === true
                  ? "active-button category-button"
                  : "category-button"
              }
              onClick={() => {
                dispatch(setCurrentSight(0));
                dispatch(setCategory("info"));
              }}>
              <img
                src={infoWhiteIco}
                className='icon'
                alt='Button for choosing the information category'
              />
            </div>
            <div
              className={
                categories.sights === true
                  ? "active-button category-button"
                  : "category-button"
              }
              onClick={() => {
                dispatch(setCurrentSight(0));
                dispatch(setCategory("sights"));
              }}>
              <img
                src={compassFilledWhiteIco}
                className='icon'
                alt='Button for choosing the sights category'
              />
            </div>
            <div
              className={
                categories.culture === true
                  ? "active-button category-button"
                  : "category-button"
              }
              onClick={() => {
                dispatch(setCurrentSight(0));
                dispatch(setCategory("culture"));
              }}>
              <img
                src={buildingWhiteIco}
                className='icon'
                alt='Button for choosing the culture category'
              />
            </div>
            <div
              className={
                categories.fun === true
                  ? "active-button category-button"
                  : "category-button"
              }
              onClick={() => {
                dispatch(setCurrentSight(0));
                dispatch(setCategory("fun"));
              }}>
              <img
                src={soccerWhiteIcon}
                className='icon'
                alt='Button for choosing the fun and sports category'
              />
            </div>
            <div
              className={
                categories.food === true
                  ? "active-button category-button"
                  : "category-button"
              }
              onClick={() => {
                dispatch(setCurrentSight(0));
                dispatch(setCategory("food"));
              }}>
              <img
                src={foodWhiteIco}
                className='icon'
                alt='Button for choosing the food category'
              />
            </div>
            <div
              className={
                categories.nature === true
                  ? "active-button category-button"
                  : "category-button"
              }
              onClick={() => {
                dispatch(setCurrentSight(0));
                dispatch(setCategory("nature"));
              }}>
              <img
                src={treeWhiteIco}
                className='icon'
                alt='Button for choosing the nature category'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Selection;
