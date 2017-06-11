import * as React from 'react';
import InfoColumns from '../InfoColumns/InfoColumns';

export default class InfoSection extends React.Component {
  props: {
    title: string
  }
  render() {
    const {title} = this.props;
    return (
      <div className='InfoSection'>
        <h2 className='InfoSection__title'>{title}</h2>
        <div className='InfoSection__content'>
          <InfoColumns/>
        </div>
      </div>
    );
  }
}
