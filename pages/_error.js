import React from 'react'
import Layout from '../components/Layout/Layout';
export default class Error extends React.Component {
  static getInitialProps({res, jsonPageRes}) {
    const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null)
    return {statusCode}
  }

  render() {
    const serverError = (this.props.statusCode) ? this.props.statusCode : '';
    return (
      <Layout>
        <h2>ERROR</h2>
      </Layout>
    )
  }
}