import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { RenderMarkdown } from '../components/RenderMarkdown';
import markdownFile from '../delete_account.md';

export class DeleteAccountPage extends Component {

  render() {
    return <Container className='markdown-container'>
        <br></br>
        <RenderMarkdown mdFile={markdownFile} className='markdown' />
    </Container>;
  }
}
