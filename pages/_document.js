// ./pages/_document.js
import * as React from 'react';
import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'
import stylesheet from 'styles/core.scss'

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const {html, head, chunks} = renderPage()
    const styles = flush()
    return {html, head, styles, chunks}
  }

  render() {
    return (
      <html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet"/>
        <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel='icon' href='/static/favicon.ico'/>
      </Head>
      <body className="custom_class">
      {this.props.customValue}
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}