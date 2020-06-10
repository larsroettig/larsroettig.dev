/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Grid, Text} from '@theme-ui/components';

import {IArticle} from "../../types";
import Card from "../CardList/card";
import styled from "@emotion/styled";

type RelatedBlogPostsProps = {
  articles: Array<IArticle>;
}

const RelatedBlogPosts = ({articles}: RelatedBlogPostsProps) => {
  return (
    <RelatedPostsContainer>
      <Text sx={{
        fontSize: [3],
        textAlign: 'center',
        fontWeight: '300',
        margin: '0.5rem',
        paddingBottom: '1.5rem'
      }}>You may also like</Text>
      <Grid sx={{
        gridColumnGap: '1rem',
        gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'],
      }}>
        {articles.map((article) => (
          <Card article={article} showDescription={false} key={article.slug}/>))}
      </Grid>
    </RelatedPostsContainer>
  )
};

const RelatedPostsContainer = styled.div`
 margin-top: 1rem;
 padding: 1rem 0;
`;

export default RelatedBlogPosts;
