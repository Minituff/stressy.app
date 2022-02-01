import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { RenderMarkdown } from '../components/RenderMarkdown';
import markdownFile from '../terms.md';

export class TermsPage extends Component {
  render() {
    return <Container>
      <div>
        <br></br>
        <RenderMarkdown mdFile={markdownFile} className='markdown'/>
      </div>
    </Container>;
  }
}
