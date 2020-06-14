import {graphql, useStaticQuery} from 'gatsby';

type Props = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      siteLanguage: string;
      siteImage: string;
      author: string;
      [key: string]: unknown;
    };
  };
}

const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          siteLanguage
          siteImage
          author
          social {
            url
            name
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
