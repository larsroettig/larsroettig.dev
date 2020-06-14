/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Supporter} from "../../types";
import styled from "@emotion/styled";
import Img from "gatsby-image";

type SupporterItemProps = {
  supporter: Supporter
}


const StyledImg = styled(Img)`
  max-width: 300px;
  max-height: 600px;
  margin: auto;
  & > img {
    filter: blur(8px);
  }
`;

const SupporterItem = ({supporter}: SupporterItemProps) => {
  return (
    <a href={supporter.website}>
      <StyledImg alt={supporter.alt}
                 fluid={supporter.image.mobile.childImageSharp.fluid}/>
    </a>
  );
}
export default SupporterItem;
