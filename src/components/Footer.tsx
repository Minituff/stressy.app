
import { Row, Col } from "react-bootstrap";


const Footer = () => {
  return (
    <Row id="footer">
      <Col>
        <a href="/#/privacy" style={{ "color": "white" }}>Privacy Policy</a>
      </Col>
      <Col>
        <a href="/#/terms" style={{ "color": "white" }}>Terms of Use</a>
      </Col>
      <Col>
        <a href="mailto:support@stressy.app?subject=Feedback" style={{ "color": "white" }}>Send Feedback</a>
      </Col>
    </Row>
  );
};
export default Footer;