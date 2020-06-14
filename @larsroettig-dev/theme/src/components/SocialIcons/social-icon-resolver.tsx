/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Box} from "@theme-ui/components";
import {FaFacebookF, FaGithub, FaLinkedin, FaTwitter,} from 'react-icons/fa';
import SocialIcon from "./social-icon";

type SocialIconResolverProps = {
  type: string;
  url: string
}

const SocialIconResolver = (props: SocialIconResolverProps) => {

  const iconsTypes = {
    facebook: <FaFacebookF/>,
    twitter: <FaTwitter/>,
    linkedin: <FaLinkedin/>,
    github: <FaGithub/>,
  }

  if (iconsTypes[props.type] === undefined) {
    return;
  }

  return (
    <Box sx={{width: ['30px']}}>
      <SocialIcon url={props.url}>
        {iconsTypes[props.type]}
      </SocialIcon>
    </Box>
  );
}

export default SocialIconResolver;
