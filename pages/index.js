import * as React from 'react'
import Layout from '../components/Layout/Layout';
import MajorIntro from '../components/MajorIntro/MajorIntro';
import InfoSection from '../components/InfoSection/InfoSection';
import LargePreviewsWrapper from '../components/LargePreviewsWrapper/LargePreviewsWrapper';

export default class Home extends React.Component {

  render() {
    return (
      <Layout>
        <MajorIntro/>
        <LargePreviewsWrapper title='About Our Project'/>
        <LargePreviewsWrapper title='Who We Are' count={2}/>
        <LargePreviewsWrapper title='How You Can Help Us Fight Poverty'/>
        <InfoSection title='Be Informed'/>
        <InfoSection title='Take Action to Fight Poverty'/>
      </Layout>
    )

  }
}