import * as React from 'react';
import CTAOption from '../CTAOption/CTAOption';

export default class InfoColumns extends React.Component {
  render() {
    return (
      <div className='InfoColumns'>
        <CTAOption label='Credit Card'/>
        <CTAOption label='PayPal'/>
        <CTAOption label='Contact Us'/>
      </div>
    );
  }
}
