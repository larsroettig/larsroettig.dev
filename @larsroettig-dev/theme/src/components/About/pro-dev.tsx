/** @jsx jsx */
import {jsx} from 'theme-ui';
import {graphql, StaticQuery} from "gatsby";
import Img from "gatsby-image";
import {Box} from '@theme-ui/components';

const ProDev = () => (
  <a
     rel="noopener noreferrer nofollow"
     data-a11y="false"
     href={'https://u.magento.com/certification/directory/dev/id/1752523'}
  >
    <Box>
      <StaticQuery
        query={graphql`
            query {
              placeholderImage: file(relativePath: { eq: "prof_developer.png" }) {
                childImageSharp {
                  fluid(maxWidth: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          `}
        render={data => (
          <div sx={{maxWidth: '80px', margin: 'auto'}}>
            <Img
              alt="Image from my Magento 2 professional developer certification"
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          </div>
        )}
      />
    </Box>
  </a>
);

export default ProDev;
