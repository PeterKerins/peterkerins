require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Peter Kerins',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Peter Kerins Web Developer',
        short_name: 'Kerins Portfolio',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#339999',
        display: 'standalone',
        icon: 'src/images/chessclub.png', // This path is relative to the root of the site.
        legacy: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'peterkerins',
        accessToken: `${process.env.API_KEY}`,

        linkResolver: ({ node, key, value }) => doc => `/${doc.uid}`,
        fetchLinks: [
          // Your list of links
        ],
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {
          // Your HTML serializer
        },
      },
    },
  ],
}
