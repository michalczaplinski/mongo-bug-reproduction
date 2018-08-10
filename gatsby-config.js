module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `gatsby`,
        collection: [`companies`, `contacts`],
        server: {
          address: `ds235239.mlab.com`,
          port: 35239
        },
        auth: {
          user: `admin`,
          password: `test1234`
        }
      }
    }
  ]
}
