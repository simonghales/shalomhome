import * as React from 'react'
import Layout from '../components/Layout/Layout';
import MajorIntro from '../components/MajorIntro/MajorIntro';
import InfoSection from '../components/InfoSection/InfoSection';

export default class Home extends React.Component {

  render() {
    return (
      <Layout>
        <MajorIntro/>
        <InfoSection title='About Our Project'/>
        <InfoSection title='Who We Are'/>
        <InfoSection title='How You Can Help Us Fight Poverty'/>
        <InfoSection title='Be Informed'/>
        <InfoSection title='Take Action to Fight Poverty'/>
      </Layout>
    )

  }
}