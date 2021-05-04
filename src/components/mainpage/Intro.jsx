import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bike from "../../img/iconmonstr-bicycle-1.svg";
function Intro() {
  return (
    <>
      <Container id='intro-container'>
        <Row>
          <Col>
            <h2>Discover Your New Home</h2>
            <img src={bike} className='icon' alt='Icon of a Bike' />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Intro;
