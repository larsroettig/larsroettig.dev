import {graphql, useStaticQuery} from 'gatsby';

interface iBlogConfig {
  basePath: string;
  blogPath: string;
  postsPath: string;
  pagesPath: string;
  navigation: {
    title: string;
    slug: string;
  };
}

type QueryType = {
  blogConfig: BlogConfig;
};

const useBlogConfig = (): iBlogConfig => {
  const data = useStaticQuery<QueryType>(graphql`
    query {
      blogConfig {
        basePath
        navigation {
          title
          slug
        }
      }
    }
  `);

  return data.blogConfig;
};

export default useBlogConfig;
