import { Component } from 'react';
import { MemoryRouter } from 'react-router-dom';

export class AllowLinks extends Component {
  render() {
    return <MemoryRouter>{this.props.children}</MemoryRouter>;
  }
}
