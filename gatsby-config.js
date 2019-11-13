module.exports = {
  siteMetadata: {
    title: `Lalilo engineering blog`,
    name: `Lalilo`,
    siteUrl: `https://tech.lalilo.com`,
    description: `Lalilo engineering blog`,
    hero: {
      heading: `Lalilo Engineering Blog`,
      maxWidth: 400
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/LaliloApp`
      },
      {
        name: `github`,
        url: `https://github.com/lalalilo`
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/lalilo_lecture/`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/lalilo/`
      }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};
