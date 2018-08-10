module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `gatsby-test`,
        collection: [`companies`, `contacts`],
        server: {
          address: `ds119052.mlab.com`,
          port: 19052
        },
        auth: {
          user: `admin`,
          password: `test1234`
        }
      }
    }
  ]
}
