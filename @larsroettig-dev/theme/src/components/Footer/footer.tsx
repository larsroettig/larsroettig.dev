/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import { Box, Flex, Text } from '@theme-ui/components';
import { tailwind } from '@theme-ui/presets';
import {
  FaFacebookF, FaTwitter, FaLinkedin, FaGithub,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'gatsby';
import TechDivisionLogo from '../Brand/techdivision';
import SocialIcon from '../SocialIcons/social-icon';
import LarsRoettigLogo from '../Brand';
import Container from '../container';

const Footer = () => {
  const w30 = tailwind.sizes['1/3'];
  return (
    <div
      sx={{
        textAlign: 'center',
        backgroundColor: tailwind.colors.gray[8],
        color: tailwind.colors.gray[1],
      }}>
      <Container padding={'1rem 2rem '}>
        <Flex sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
          <Box sx={{ width: [w30] }}>
            <LarsRoettigLogo color={'#fff'}/>
          </Box>
          <Box sx={{ width: [w30] }}>
            <Text sx={{ fontSize: [2], textDecoration: 'underline' }}>Legal</Text>
            <ul sx={{ listStyle: 'none', margin: 0, padding: '5px' }}>
              <li sx={{ padding: '5px' }}>
                <Link to='/imprint' sx={{
                  color: tailwind.colors.gray[2],
                  textDecoration: 'none',
                }}>Imprint</Link>
              </li>
              <li sx={{ padding: '5px' }}>
                <Link to='/privacy-statement' sx={{
                  color: tailwind.colors.gray[2],
                  textDecoration: 'none',
                }}>Privacy Statement</Link>
              </li>
            </ul>
          </Box>
          <Box sx={{ width: [w30] }}>
            <div sx={{ margin: 'auto', padding: '1rem 5px', maxWidth: '140px' }}>
              <Flex sx={{ flexWrap: 'wrap' }}>
                <IconContext.Provider
                  value={{ color: tailwind.colors.gray[2], size: '1rem' }}>
                  <Box sx={{ width: ['30px'] }}>
                    <SocialIcon url={'https://twitter.com/LarsRoettig'}>
                      <FaTwitter/>
                    </SocialIcon>
                  </Box>
                  <Box sx={{ width: ['30px'] }}>
                    <SocialIcon
                      url={'https://www.facebook.com/larsroettig.dev/'}>
                      <FaFacebookF/>
                    </SocialIcon>
                  </Box>
                  <Box sx={{ width: ['30px'] }}>
                    <SocialIcon
                      url={'https://github.com/larsroettig'}>
                      <FaGithub/>
                    </SocialIcon>
                  </Box>
                  <Box sx={{ width: ['30px'] }}>
                    <SocialIcon
                      url={'https://www.linkedin.com/in/larsroettig/'}>
                      <FaLinkedin/>
                    </SocialIcon>
                  </Box>
                </IconContext.Provider>
              </Flex>
            </div>
            <div sx={{ margin: 'auto', padding: '5px' }}>
              <Text sx={{ fontWeight: '300' }}>Employee at:</Text>
              <TechDivisionLogo color={tailwind.colors.gray[1]}/>
            </div>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
