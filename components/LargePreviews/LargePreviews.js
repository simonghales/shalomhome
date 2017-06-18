import * as React from 'react';
import LargePreview from '../LargePreview/LargePreview';

export default class LargePreviews extends React.Component {
  render() {
    return (
      <div className='LargePreviews LargePreviews--count-3'>
        <div className='LargePreviews__backgrounds'>
          <div className='LargePreviews__backgrounds_background' style={{backgroundImage: 'url(http://shalomhomeindia.org/sponsor/images/saran_1920.jpg)'}}></div>
          <div className='LargePreviews__backgrounds_background' style={{backgroundImage: 'url(http://shalomhomeindia.org/sponsor/images/boyscard_1920.jpg)'}}></div>
          <div className='LargePreviews__backgrounds_background' style={{backgroundImage: 'url(http://shalomhomeindia.org/sponsor/images/kidsbuilding_1920.jpg)'}}></div>
        </div>
        <div className='LargePreviews__content'>
          <div className='LargePreviews__preview'>
            <LargePreview count={3}/>
          </div>
          <div className='LargePreviews__preview'>
            <LargePreview count={3}/>
          </div>
          <div className='LargePreviews__preview'>
            <LargePreview count={3}/>
          </div>
        </div>
      </div>
    );
  }
}
