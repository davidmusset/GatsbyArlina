/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 module.exports = {
   siteMetadata: {
    title: "Arlina livre personnalisé pour enfants",
    siteUrl: `https://www.arlina.fr`,
    description: `Site pour créer des livres personnalisés pour les enfants, des cadeaux uniques et magiques`,
    instagram: "https://www.instagram.com/arlinaworld/"
  },
   plugins: [
     `gatsby-plugin-react-helmet`,
     `gatsby-plugin-stripe`,
     {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: 'https://gmail.us20.list-manage.com/subscribe/post?u=ac76139694dbf552892a434a5&amp;id=50457ed2aa' // add your MC list endpoint here; see instructions below
        }
    }
   ]
 }
