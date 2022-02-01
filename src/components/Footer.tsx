
import { Container, Row, Col} from "react-bootstrap";

const Footer = () => {
  return (
      <Container id='footer'>
          <br></br>
        <Row>
          <Col>
            <a href="/#/privacy" style={{"color": "white"}}>Privacy Policy</a>
          </Col>
          <Col>
          <a href="/#/terms" style={{"color": "white"}}>Terms of Use</a>
          </Col>
          <Col>
            <a href="mailto:support@stressy.app?subject=Feedback" style={{"color": "white"}}>Send Feedback</a>
          </Col>
        </Row>
        <br></br>
      </Container>
  );
};
export default Footer;