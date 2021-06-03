import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useMediaQuery } from "react-responsive";
import collapseIcon from "../../img/icons/iconmonstr-collapse-white.svg";

import foodWhiteIco from "../../img/icons/iconmonstr-fast-food-white.svg";
import buildingWhiteIco from "../../img/icons/iconmonstr-building-white.svg";
import compassFilledWhiteIco from "../../img/icons/iconmonstr-compass-filled-white.svg";
import infoWhiteIco from "../../img/icons/iconmonstr-info-white.svg";
import treeWhiteIco from "../../img/icons/iconmonstr-tree-white.svg";
import soccerWhiteIcon from "../../img/icons/iconmonstr-soccer-white.svg";

import { useSelector } from "react-redux";
function Selection() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [collapse, setCollapse] = useState(false);
  const language = useSelector((state) => state.language);
  return (
    <>
      <div
        id='selection-container'
        className={isTabletOrMobile ? "mobile" : ""}>
        <div
          id='selection-button'
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
          onClick={() => {
            setCollapse(!collapse);
          }}></div>
        <div
          id='selection-content'
          className={collapse === true ? "selection-collapsed" : ""}>
          <div className='all-category-buttons'>
            <div className='category-button'>
              <img
                src={infoWhiteIco}
                className='icon'
                alt='Button for choosing the information category'
              />
            </div>
            <div className='category-button'>
              <img
                src={compassFilledWhiteIco}
                className='icon'
                alt='Button for choosing the sights category'
              />
            </div>
            <div className='category-button'>
              <img
                src={buildingWhiteIco}
                className='icon'
                alt='Button for choosing the culture category'
              />
            </div>
            <div className='category-button'>
              <img
                src={soccerWhiteIcon}
                className='icon'
                alt='Button for choosing the fun and sports category'
              />
            </div>
            <div className='category-button'>
              <img
                src={foodWhiteIco}
                className='icon'
                alt='Button for choosing the food category'
              />
            </div>
            <div className='category-button'>
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
