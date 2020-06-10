const postText = (domain, blogUrl) =>
  `<div style="margin-top: 50px; font-style: italic;">This post features interactive elements, and cannot be displayed in an RSS reader. <strong><a href="${blogUrl}">View it on ${domain}</a></strong>.</div>`;

module.exports = (title) => (
  {
    query: `
     {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
  `,
    setup: ({
              query: {
                site: {siteMetadata},
              },
              ...rest
            }) => {

      const siteMetadataModified = siteMetadata;
      siteMetadataModified.feed_url = `${siteMetadata.siteUrl}/rss.xml`;
      siteMetadataModified.image_url = `${siteMetadata.siteUrl}/icons/icon-512x512.png`;

      return {
        ...siteMetadataModified,
        ...rest,
      };
    },
    feeds: [
      {
        serialize: ({query: {site, allArticle}}) => {
          return allArticle.edges.map((node) => {
            const article = node.node;
            const domain = site.siteMetadata.siteUrl;
            const fullUrl = domain + article.slug;
            return {
              title: article.title,
              description: article.description,
              date: article.date,
              url: fullUrl,
              guid: fullUrl,
              custom_elements: [{'content:encoded': postText(domain, fullUrl)}],
            };
          });
        },
        query: `{
  allArticle(sort: {fields: [date, title], order: DESC}) {
    edges {
      node {
        title
        date(formatString: "MMMM D, YYYY")
        description
        excerpt
        slug
      }
    }
  }
}
`,
        output: `rss.xml`,
        title,
      },
    ],
  });
