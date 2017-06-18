import * as React from 'react';
import classNames from 'classnames';
import FancyLink from '../FancyLink/FancyLink';

export default class LargePreview extends React.Component {
  props: {
    count: number
  };
  render() {
    const {count} = this.props;
    return (
      <div className={classNames([
        'LargePreview',
        'LargePreview--count-' + count
      ])}>
        <div className='LargePreview__content'>
          <h3 className='LargePreview__title'>Title goes here</h3>
          <h4 className='LargePreview__subtitle'>Subtitle goes here</h4>
          <div className='LargePreview__link'>
            <FancyLink>
              Learn more
            </FancyLink>
          </div>
        </div>
      </div>
    );
  }
}
