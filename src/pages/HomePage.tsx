import { Col, Container, Row } from 'react-bootstrap';
import playstore from "../assets/badges/google-play-badge.svg"
import appstore from "../assets/badges/app-store-black.svg"
import image1 from "../assets/screenshots/image1-trim.png"
import image2 from "../assets/screenshots/image2.png"
import "../pages/HomePage.css"

export const HomePage = () => {
  return <div className='HomePage'>
    <Container id='homepage-container'>

      <Row>
        <Col sm id='headline-col'>
          <h1 style={{ "textAlign": "center" }}>Track and share your stress</h1>
          <Row id='badge-row'>
            <img src={appstore} alt='appstore-logo' className='store-logo' id='appstore-logo' />
            <img src={playstore} alt='playstore-logo' className='store-logo' id='playstore-logo' />
          </Row>

        </Col>
        <Col sm id='right-col'>
          <img src={image1} alt='image1' id='header-img' />
        </Col>
      </Row>
      <Row>
        {/* <img src={image2} alt='image2' /> */}
      </Row>
      {/* <img src={image2} alt='image2' /> */}



    </Container>
  </div>;
};
