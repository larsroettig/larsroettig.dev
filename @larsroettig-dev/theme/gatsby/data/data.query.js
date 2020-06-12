/* eslint-disable */

// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js

const GatsbyFluid_withWebp = `
  base64
  aspectRatio
  src
  srcSet
  srcWebp
  srcSetWebp
  sizes
`;

module.exports.local = {
  articles: `{
    articles: allArticle(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          slug
          secret
          title
          description
          author
          date(formatString: "DD.MM.YYYY")
          dateForSEO: date
          timeToRead
          excerpt
          body
          editLink
          hero {
            full: childImageSharp {
              fluid(maxWidth: 944, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
            regular: childImageSharp {
              fluid(maxWidth: 653, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
            narrow: childImageSharp {
              fluid(maxWidth: 300, quality: 80) {
                ${GatsbyFluid_withWebp}
              }
            }
            seo: childImageSharp {
              fixed(width: 1200, quality: 100) {
                src
              }
            }
          }
        }
      }
    }
  }`,
  authors: `query {
    authors: allAuthor {
      edges {
        node {
          id
          slug
          name
          bio
          social {
            type
            url
          }
          showSocial
          avatar {
            small: childImageSharp {
              fluid(maxWidth: 50, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
            medium: childImageSharp {
              fluid(maxWidth: 110, quality: 70) {
                ${GatsbyFluid_withWebp}
              }
            }
            large: childImageSharp {
              fluid(maxWidth: 328, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
          }
        }
      }
    }
  }`,
  pages:`
    query {
      allPage {
        nodes {
          slug
          title
          body
        }
      }
    }
  `
};
