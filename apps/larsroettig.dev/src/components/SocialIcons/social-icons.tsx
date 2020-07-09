/** @jsx jsx */
import { jsx } from 'theme-ui';
import { css } from '@emotion/core';
import { Box, Flex } from '@theme-ui/components';
import { IconContext } from 'react-icons';
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Container from '../container';
import SocialIcon from './social-icon';

const SocialIcons = () => (
  <div
    css={css`
      text-align: center;
      border-bottom: 1px solid #e2e8f0;
    `}
  >
    <Container padding={'1.5em 2em'}>
      <Flex sx={{ flexWrap: 'wrap' }}>
        <IconContext.Provider value={{ color: 'text', size: '1.5em' }}>
          <Box sx={{ width: ['25%'] }}>
            <SocialIcon url={'https://twitter.com/LarsRoettig'}>
              <FaTwitter />
            </SocialIcon>
          </Box>
          <Box sx={{ width: ['25%'] }}>
            <SocialIcon url={'https://www.facebook.com/larsroettig.dev/'}>
              <FaFacebookF />
            </SocialIcon>
          </Box>
          <Box sx={{ width: ['25%'] }}>
            <SocialIcon url={'https://github.com/larsroettig'}>
              <FaGithub />
            </SocialIcon>
          </Box>
          <Box sx={{ width: ['25%'] }}>
            <SocialIcon url={'https://www.linkedin.com/in/larsroettig/'}>
              <FaLinkedin />
            </SocialIcon>
          </Box>
        </IconContext.Provider>
      </Flex>
    </Container>
  </div>
);

export default SocialIcons;
