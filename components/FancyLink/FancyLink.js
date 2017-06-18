import * as React from 'react';

export default class FancyLink extends React.Component {
  props: {
    children: any
  };
  render() {
    return (
      <a className='FancyLink'>
        {this.props.children}
      </a>
    );
  }
}
