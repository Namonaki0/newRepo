require("dotenv").config()
// const consumer_key = process.env.CONSUMER_KEY
// const consumer_secret = process.env.CONSUMER_SECRET
// const bearer_token = process.env.BEARER_TOKEN
// const twitter_end_point = "/2/tweets/1478003786887086084"

// console.log(consumer_secret, consumer_key, bearer_token)

const twitterRulesURL = "https://api.twitter.com/2/tweets/search/stream/rules"
const twitterStreamURL = "https://api.twitter.com/2/tweets/search/stream"

module.exports = {
  siteMetadata: {
    title: `Marc Rizzo Project`,
    description: `Marc Rizzo alternative project`,
    author: `Andre Ferreira @Namonaki0`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
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
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: process.env.CONSUMER_KEY,
          consumer_secret: process.env.CONSUMER_SECRET,
          bearer_token: process.env.BEARER_TOKEN,
        },
        queries: {
          getTweets: {
            endpoint: "/2/tweets",
            params: {
              screen_name: "RizzoMarc",
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
        },
        hashtagGatsby: {
          endpoint: "/2/tweets",
          params: {
            q: "#gatsbyjs",
            tweet_mode: "extended",
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
}
