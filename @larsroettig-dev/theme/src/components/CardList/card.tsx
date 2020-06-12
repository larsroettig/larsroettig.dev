/** @jsx jsx */
import { jsx } from 'theme-ui';
import Img from 'gatsby-image';
import { Box, Text } from '@theme-ui/components';
import { Link } from 'gatsby';
// eslint-disable-next-line no-unused-vars
import styled from "@emotion/styled";
import {IArticle} from '../../types';

type CardProps = {
  article: IArticle,
  showDescription: boolean
}

const StyledImg = styled(Img)`
  & > img {
    filter: blur(8px);
  }
`;

const Card = ({ article, showDescription = true }: CardProps) => {


  const description = showDescription === true ? <Text sx={{color: '#2D3748'}}>
      {article.description}
    </Text> : '';

 return (
  <Box sx={{
    color: '#2D3748',
    background: '#fff',
    boxShadow:
      '0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px rgba(0, 0, 0, 0.1);',
  }}>
    <Link to={article.slug} title={`Link to article ${article.title}`}
          sx={{textDecoration: 'none'}}>
      <div>
        <StyledImg style={{maxHeight: '300px'}}
                   fluid={article.hero.narrow}/>
      </div>
      <div sx={{padding: '0.9rem'}}>

        <Text sx={{
          color: '#2D3748',
          fontWeight: 500,
          fontSize: '20px',
          paddingBottom: '4px',
        }}>{article.title}</Text>

        {description}
      </div>
    </Link>
  </Box>
 )
};

export default Card;
