import * as React from 'react';

export default class CTAOption extends React.Component {
  props: {
    label: string
  }
  render() {
    const {label} = this.props;
    return (
      <div className='CTAOption'>
        <div className='CTAOption__icon'></div>
        <a href="" className='CTAOption__link'>
          <span>
            {label}
          </span>
        </a>
      </div>
    );
  }
}
