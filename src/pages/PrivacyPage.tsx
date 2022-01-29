import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { PrivacyPolicy } from '../components/PrivacyPolicy';

export class PrivacyPage extends Component {
  render() {
    return <Container>
      <div>
        <br></br>
        <PrivacyPolicy />
      </div>
    </Container>;
  }
}
