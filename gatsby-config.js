module.exports = {
  plugins: 
    [
      {
        resolve: `gatsby-plugin-google-fonts-v2`,
        options: {
          fonts: [
            {
              family: 'Montserrat',
              weights: ['100,200,300,400,700']
            }
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
    ],
};