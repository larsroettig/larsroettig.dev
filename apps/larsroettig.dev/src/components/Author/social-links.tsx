/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ISocialMedia } from '../../types';
import SocialIconResolver from '../SocialIcons/social-icon-resolver';
import { Flex } from '@theme-ui/components';
import { IconContext } from 'react-icons';

type SocialLinksProps = {
  socialMedia: ISocialMedia[];
};

const SocialLinks = ({ socialMedia }: SocialLinksProps) => {
  const socialIcons = socialMedia.map((item) => (
    <SocialIconResolver type={item.type} url={item.url} />
  ));

  return (
    <div sx={{ maxWidth: '140px' }}>
      <Flex sx={{ flexWrap: 'wrap' }}>
        <IconContext.Provider value={{ size: '1.1rem' }}>
          {socialIcons}
        </IconContext.Provider>
      </Flex>
    </div>
  );
};

export default SocialLinks;
