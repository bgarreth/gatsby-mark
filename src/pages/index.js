import React, { Component } from 'react';
import Layout from '../components/layout';
import Intro from '../components/mask';
import SEO from '../components/seo';
import Carousel from '../components/carousel';
import AboutSection from '../components/aboutSection'
import Card from '../components/card'
import { MDBRow } from 'mdbreact'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

class App extends Component {
  render() {
    return (
        
        <Layout>
          
          <SEO title="Home" keywords={[`wildwoodrock`, `wildwoodrock extreme`, `enduro`, `Australia's hardest enduro`]} />
        <Carousel />
        <Intro />
        <AmplifyAuthenticator>
              <main>
                <AboutSection />
                <section id="cardSection">
                  <h2 className="h1-responsive text-center font-weight-bold mb-5">
                    MDB added 
                  </h2>
                  <MDBRow className="m-0" center>
                    <Card />
                    <Card />
                    <Card />
                  </MDBRow>
                </section>
              </main>
          </AmplifyAuthenticator>
        </Layout>
        
    );
  }
}

export default  App;
