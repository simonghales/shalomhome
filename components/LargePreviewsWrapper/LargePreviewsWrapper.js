import * as React from 'react';
import LargePreviews from '../LargePreviews/LargePreviews';

export default class LargePreviewsWrapper extends React.Component {
  props: {
    count?: number,
    title: string
  };
  render() {
    const {count=1,title} = this.props;
    return (
      <div className='LargePreviewsWrapper'>
        <header className='LargePreviewsWrapper__header'>
          <h2 className='LargePreviewsWrapper__header__title'>{title}</h2>
        </header>
        <div>
          {
            Array.from({length: count}).map((thing, index) => {
              return <LargePreviews key={index}/>
            })
          }
        </div>
      </div>
    );
  }
}
