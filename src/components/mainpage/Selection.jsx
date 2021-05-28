import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import collapseIcon from "../../img/icons/iconmonstr-collapse-white.svg";

import foodWhiteIco from "../../img/icons/iconmonstr-fast-food-white.svg";
import buildingWhiteIco from "../../img/icons/iconmonstr-building-white.svg";
import compassFilledWhiteIco from "../../img/icons/iconmonstr-compass-filled-white.svg";
import infoWhiteIco from "../../img/icons/iconmonstr-info-white.svg";
import treeWhiteIco from "../../img/icons/iconmonstr-tree-white.svg";
import soccerWhiteIcon from "../../img/icons/iconmonstr-soccer-white.svg";

import { useSelector } from "react-redux";
function Selection() {
  const [collapse, setCollapse] = useState(false);
  const language = useSelector((state) => state.language);
  return (
    <>
      <div
        id='selection-container'
        className={collapse === true ? "selection-collapsed" : ""}>
        <div
          id='selection-button'
          onClick={() => {
            setCollapse(!collapse);
          }}>
          <img
            src={collapseIcon}
            className='collapse-icon'
            alt='collapsebutton for selection of topics'
          />
        </div>
        <div id='selection-content'></div>
      </div>
      {/*
      <Container id='Selection'>
        <Row>
          <Col>
            {language === "german" ? (
              <h2 id='selection-header'>Erkunde Münster</h2>
            ) : language === "englisch" ? (
              <h2 id='selection-header'>Discover Münster</h2>
            ) : (
              <></>
            )}
          </Col>
        </Row>
        <Row id='button-row'>
          <Col xs='6' md='4'>
            <div className='button'>
              <span className='icon icon-info'></span>
            </div>
          </Col>
          <Col xs='6' md='4'>
            <div className='button'>
              <span className='icon icon-compass'></span>
            </div>
          </Col>{" "}
          <Col xs='6' md='4'>
            <div className='button'>
              <span className='icon icon-building'></span>
            </div>
          </Col>{" "}
          <Col xs='6' md='4'>
            <div className='button'>
              <span className='icon icon-soccer'></span>
            </div>
          </Col>{" "}
          <Col xs='6' md='4'>
            <div className='button'>
              <span className='icon icon-food'></span>
            </div>
          </Col>{" "}
          <Col xs='6' md='4'>
            <div className='button'>
              <span className='icon icon-tree'></span>
            </div>
          </Col>
        </Row>
      </Container>*/}
    </>
  );
}

export default Selection;
