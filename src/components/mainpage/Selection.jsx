import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
function Selection() {
  const language = useSelector((state) => state.language);
  return (
    <>
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
      </Container>
    </>
  );
}

export default Selection;
