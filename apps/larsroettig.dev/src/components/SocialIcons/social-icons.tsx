/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Flex } from '@theme-ui/components';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa';
import Container from '../container';
import SocialIcon from './social-icon';

const SocialIcons = () => (
  <div style={{textAlign: 'center',borderBottom: '1px solid #e2e8f0' }}>
    <Container padding={'1.5em 2em'}>
      <Flex sx={{ flexWrap: 'wrap' }}>
        <IconContext.Provider value={{ color: 'text', size: '1.5em' }}>
          <Box sx={{ width: ['25%'] }}>
            <SocialIcon url={'https://twitter.com/LarsRoettig'}>
              <FaTwitter />
            </SocialIcon>
          </Box>
          <Box sx={{ width: ['25%'] }}>
            <SocialIcon url={'https://www.youtube.com/c/LarsRoettig'}>
              <FaYoutube />
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
