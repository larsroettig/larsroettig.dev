import {graphql, useStaticQuery} from 'gatsby';

type Props = {
  blogConfig: {
    basePath: string;
    blogPath: string;
    postsPath: string;
    pagesPath: string;
    navigation: {
      title: string;
      slug: string;
    }[];
  };
}

const useBlogConfig = () => {
  const data = useStaticQuery<Props>(graphql`
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
