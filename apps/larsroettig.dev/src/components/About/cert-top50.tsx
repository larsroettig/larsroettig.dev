/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from '@theme-ui/components';

const Top50 = () => (
  <a
    rel="noopener noreferrer nofollow"
    data-a11y="false"
    href={
      'https://magento.com/blog/technical/thank-you-top-50-contributors-2017'
    }
  >
    <Box>
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "top50.png" }) {
              childImageSharp {
                fluid(maxWidth: 150) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={(data) => (
          <div
            sx={{
              maxWidth: '170px',
              padding: '10px',
              borderRadius: '1rem',
              margin: 'auto',
              backgroundColor: 'rgba(255,255,255,0.8)',
            }}
          >
            <Img
              alt="Image with Badged of TOP 50 Magento Contributor 2017"
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          </div>
        )}
      />
    </Box>
  </a>
);

export default Top50;
