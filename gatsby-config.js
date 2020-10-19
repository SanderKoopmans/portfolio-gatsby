module.exports = {
  plugins: 
    [
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Montserrat`,
            `\:100,200,300,400,700`
          ],
          display: 'swap'
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
    ],
};