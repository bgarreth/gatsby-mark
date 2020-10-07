import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


const Live = () => (
<Layout>
   
    <h1>Live Page</h1>
    
    <Link to="/">Go back  homepage</Link>
  </Layout>
)

export default withAuthenticator (Live);
