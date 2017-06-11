import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import SiteHeader from '../SiteHeader/SiteHeader';
import SiteFooter from '../SiteFooter/SiteFooter';

export default class Layout extends React.Component {

  props: {
    children?: any
  }

  render() {
    const {children} = this.props;
    return (
      <div>
        <SiteHeader/>
        <div>
          {children}
        </div>
        <SiteFooter/>
      </div>
    );
  }
}