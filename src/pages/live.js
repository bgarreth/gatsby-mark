import React, { Component } from 'react';
import Layout from '../components/layout';
import Intro from '../components/mask';
import SEO from '../components/seo';
import Carousel from '../components/carousel';
import AboutSection from '../components/aboutSection'
import Card from '../components/card'
import { MDBRow } from 'mdbreact'

class Live extends Component {
  render() {
    return (
      <>
        <Layout>
          
        <main>
         
          
            <h2 className="h1-responsive text-center font-weight-bold mb-5">
              Page live
            </h2>
            <MDBRow className="m-0" center>
              
            </MDBRow>
         
        </main>
        </Layout>
      </>
    );
  }
}

export default Live;
