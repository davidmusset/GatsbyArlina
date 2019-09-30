import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import gatsbyIcon from "../../img/arlina.png"

const SiteMetadata = ({ pathname }) => {
const {
  site: {
    siteMetadata: { siteUrl, title, instagram },
  },
} = useStaticQuery(graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        siteUrl
        title
        instagram
      }
    }
  }
`)

return (
  <Helmet defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`}>
    <html lang="en" />
    <link rel="canonical" href={`${siteUrl}${pathname}`} />
    <meta name="docsearch:version" content="2.0" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
    />

    <meta property="og:url" content={siteUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en" />
    <meta property="og:site_name" content={title} />
    <meta property="og:image" content={`${siteUrl}${gatsbyIcon}`} />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />

    <meta name="instagram:card" content="summary" />
    <meta name="instagram:site" content={instagram} />

    <style>
    @import url('https://fonts.googleapis.com/css?family=Lobster');
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400')
    </style>

    <script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"/>


  </Helmet>
)
}

export default SiteMetadata
