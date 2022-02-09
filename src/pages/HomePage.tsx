import { Col, Container, Row } from 'react-bootstrap';
import { SwiperApp } from '../components/SwiperApp';

import playstore from "../assets/badges/google-play-badge.svg"
import appstore from "../assets/badges/app-store-black.svg"
import image1 from "../assets/screenshots/image1-trim.png"



import "../pages/HomePage.css"
import "../pages/SharedCSS.css"



export const HomePage = () => {

  const googlePlayLink = ''
  const appStoreLink = 'https://apps.apple.com/app/stressy/id1607621903'


  return <div className='HomePage'>
    <Container id='homepage-container'>

      <Row>
        <Col sm id='headline-col'>
          <h1 style={{ "textAlign": "center" }}>Track and share your stress</h1>
          <Row id='badge-row'>
            <a href={appStoreLink} style={{ "display": "contents" }}>
              <img src={appstore} alt='appstore-logo' className='store-logo' id='appstore-logo' />
            </a>
            <a href={googlePlayLink} style={{ "display": "contents" }}>
              <img src={playstore} alt='playstore-logo' className='store-logo' id='playstore-logo' />
            </a>
          </Row>

        </Col>
        <Col sm id='right-col'>
          <img src={image1} alt='image1' id='header-img' />
        </Col>
      </Row>

      <Row style={{"padding": "50px"}}/>

      <SwiperApp></SwiperApp>

      <Row style={{"padding": "50px"}}/>

    </Container>
  </div>;
};
