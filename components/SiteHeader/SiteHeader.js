import * as React from 'react';

export default class SiteHeader extends React.Component {
  render() {
    return (
      <header className='SiteHeader'>
        <div className='SiteHeader__content'>
          <div className='SiteHeader__siteTitle'>
            <span>Shalom</span>
            <span>Home India</span>
          </div>
          <nav className='SiteHeader__nav'>
            <a className='' href="">
              <span className='SiteHeader__nav__link SiteHeader__nav__link--active'>Our Project</span>
            </a>
            <a href="" className=''>
              <span className='SiteHeader__nav__link'>Our Partners</span>
            </a>
            <a href="" className=''>
              <span className='SiteHeader__nav__link'>How to Help</span>
            </a>
            <a href="" className=''>
              <span className='SiteHeader__nav__link'>Learn More</span>
            </a>
            <a href="" className=''>
              <span className='SiteHeader__nav__link'>Contact Us</span>
            </a>
          </nav>
          <a className='SiteHeader__supportersLink' href="">
            <span>
              Supporters
            </span>
          </a>
        </div>
      </header>
    );
  }
}
