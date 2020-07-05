/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImg from 'gatsby-image';

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "larsroettig.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <NonStretchedImage
      alt="Image of Lars Roettig"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

const NonStretchedImage = (properties) => {
  let normalizedProperties = properties;
  if (properties.fluid) {
    normalizedProperties = {
      ...properties,
      style: {
        ...(properties.style || {}),
        maxWidth: '250px',
        margin: '0 auto', // Used to center the image
      },
    };
  }

  return <GatsbyImg {...normalizedProperties} />;
};

export default Avatar;
