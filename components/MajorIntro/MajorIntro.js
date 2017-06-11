import * as React from 'react';

export default class MajorIntro extends React.Component {
  render() {
    return (
      <div className='MajorIntro'>
        <div className='MajorIntro__image'></div>
        <div className='MajorIntro__content'>
          <div className='MajorIntro__graphic'>
            <div className='MajorIntro__graphic__placeholder'></div>
          </div>
          <div className='MajorIntro__info'>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus earum illo, minima quos ullam.
            </p>
            <p>
              Ab accusamus, aspernatur autem deleniti dolores ea, earum excepturi ipsam iste laudantium maiores rerum veniam!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
