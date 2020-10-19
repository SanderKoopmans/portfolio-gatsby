module.exports = {
  plugins: 
    [
      `gatsby-plugin-styled-components`,
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Montserrat`,
            `\:300,400,700`
          ],
          display: 'swap'
        }
      }
    ],
}