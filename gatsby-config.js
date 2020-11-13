module.exports = {
  plugins: 
    [
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Montserrat\:100,200,300,300i,400,700`
          ],
        }
      },
      {
        resolve: `gatsby-plugin-material-ui`,
        options: {
          stylesProvider: {
            injectFirst: true,
          },
        },
      },
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
    ],
};