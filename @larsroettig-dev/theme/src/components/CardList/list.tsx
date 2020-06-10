/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Grid} from '@theme-ui/components';

import Card from './card';
import {IArticle} from "../../types";

type CardListProps = {
  articles: Array<IArticle>;
}

const CardList = ({articles}: CardListProps) => (
  <Grid sx={{
    gridColumnGap: '1rem',
    gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr 1fr'],
    gridAutoRows: '1fr',
  }}>
    {articles.map((article) => (<Card article={article} showDescription={true} key={article.slug}/>))}
  </Grid>
);


export default CardList;

