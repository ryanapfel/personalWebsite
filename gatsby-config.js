require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `I'm Ryan Apfel`,
    description: `Hello, my name is Ryan Apfel and I'm looking for work as a front-end devloper, solutions engineer, or free-lance work`,
    author: `Ryan Apfel`,
    links: [
      {
        comment: `USC Alumni - Fight On ✌️ `,
      },
      {
        comment: `Based in Redondo Beach, CA 🏖️ `,
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/ryanapfel/",
        comment: `Connect with me on `,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/ryan__apfel",
        comment: `I retweet things about the Lakers 🏀 on`,
      },
      {
        name: "Medium",
        url: "https://medium.com/@rapfel",
        comment: `I write about my professional work on `,
      },
      {
        name: "GitHub",
        url: "https://github.com/ryanapfel",
        comment: `Find my public coding projects on `,
      },
      {
        name: "Resume",
        url:
          "https://drive.google.com/file/d/1unYueaflHiTwW_2eUHrrs-I_EzXRMvEh/view?usp=sharing",
        comment: `Take a look at my   `,
      },
      {
        name: "rapfel@usc.edu",
        url: "mailto:rapfel@usc.edu",
        comment: `Send me an email to`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway`],
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout"),
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ryan-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
