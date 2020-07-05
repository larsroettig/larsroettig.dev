/** @jsx jsx */

import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import { Box, Grid, Text } from '@theme-ui/components';
import Img from 'gatsby-image';

import { IAuthor } from '../../types';
import SocialLinks from './social-links';

type AuthorProps = {
  author: IAuthor;
};

const StyledImg = styled(Img)`
  width: 110px;
  height: 110px;
  border-radius: 9999px;
  place-self: center;
  margin: 1rem auto;
  & > img {
    filter: blur(8px);
  }
`;

const Author = ({ author }: AuthorProps) => {
  const authorSocialLinks =
    author.showSocial === true ? (
      <SocialLinks socialMedia={author.social} />
    ) : (
      ''
    );

  return (
    <Container>
      <Grid
        sx={{
          gridColumnGap: '1rem',
          gridTemplateColumns: ['1fr', '20% 80%'],
        }}
      >
        <Box>
          <StyledImg fluid={author.avatar.medium} />
        </Box>
        <Box>
          <Grid
            sx={{
              gridColumnGap: '1rem',
              gridTemplateColumns: ['1fr 1fr'],
            }}
          >
            <small sx={{ textTransform: 'uppercase', color: '#a0aec0' }}>
              Written by
            </small>
            <Box sx={{ justifySelf: 'end', paddingRight: '1rem' }}>
              {authorSocialLinks}
            </Box>
          </Grid>
          <Text sx={{ fontSize: '1.125rem' }}>{author.name}</Text>
          {author.bio}
        </Box>
      </Grid>
    </Container>
  );
};

export default Author;

const Container = styled.div`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #cbd5e0;
  border-top: 1px solid #cbd5e0;
`;
