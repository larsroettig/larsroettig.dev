/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Supporter} from '../../types';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import useWindowSize from "../../hooks/useWindowSize";
import {useMobileScreen} from "../../hooks/useMobileScreen";

type SupporterItemProps = {
  supporter: Supporter;
};

const DesktopImg = styled(Img)`
  margin: auto;
  max-width: 300px;
  max-height: 500px;
  margin-bottom: 20px;
  & > img {
    filter: blur(8px);
  }
`;

const MobileImg = styled(Img)`
  max-width: 600px;
  max-height: 300px;
  margin: auto;
  margin-bottom: 20px;
  & > img {
    filter: blur(8px);
  }
`;

const SupporterItem = ({supporter}: SupporterItemProps) => {
  const mobileScreen = useMobileScreen();

  if (!supporter.image.mobile.childImageSharp.fluid && !supporter.image.desktop.childImageSharp.fluid) {
    return;
  }

  const SupporterImage =  mobileScreen ?
    (<MobileImg
      alt={supporter.alt}
      fluid={supporter.image.mobile.childImageSharp.fluid}
    />) : (<DesktopImg
      alt={supporter.alt}
      fluid={supporter.image.desktop.childImageSharp.fluid}
    />);

  return (
    <a href={supporter.website}>
      {SupporterImage}
    </a>
  );
};
export default SupporterItem;
