/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Flex, Text, Grid } from '@theme-ui/components';
import { tailwind } from '@theme-ui/presets';
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'gatsby';
import TechDivisionLogo from '../Brand/techdivision';
import SocialIcon from '../SocialIcons/social-icon';
import LarsRoettigLogo from '../Brand';
import Container from '../container';

const Footer = () => {
  return (
    <div
      sx={{
        textAlign: 'center',
        backgroundColor: tailwind.colors.gray[8],
        color: tailwind.colors.gray[1],
      }}
    >
      <Container padding={'1rem 2rem '}>
        <Grid
          sx={{
            gridTemplateColumns: ['1fr', '40% 20% 40%'],
          }}
        >
          <Box sx={{ margin: 'auto' }}>
            <LarsRoettigLogo color={'#fff'} />
          </Box>
          <Box sx={{ margin: 'auto' }}>
            <Text sx={{ fontSize: [2], textDecoration: 'underline' }}>
              Legal
            </Text>
            <ul sx={{ listStyle: 'none', margin: 0, padding: '5px' }}>
              <li sx={{ padding: '5px' }}>
                <Link
                  to="/imprint"
                  sx={{
                    color: tailwind.colors.gray[2],
                    textDecoration: 'none',
                  }}
                >
                  Imprint
                </Link>
              </li>
              <li sx={{ padding: '5px' }}>
                <Link
                  to="/privacy-statement"
                  sx={{
                    color: tailwind.colors.gray[2],
                    textDecoration: 'none',
                  }}
                >
                  Privacy Statement
                </Link>
              </li>
            </ul>
          </Box>
          <Box>
            <div
              sx={{ margin: 'auto', padding: '1rem 5px', maxWidth: '140px' }}
            >
              <Flex sx={{ flexWrap: 'wrap' }}>
                <IconContext.Provider
                  value={{ color: tailwind.colors.gray[2], size: '1rem' }}
                >
                  <Box sx={{ width: ['30px'] }}>
                    <SocialIcon url={'https://twitter.com/LarsRoettig'}>
                      <FaTwitter />
                    </SocialIcon>
                  </Box>
                  <Box sx={{ width: ['30px'] }}>
                    <SocialIcon
                      url={'https://www.facebook.com/larsroettig.dev/'}
                    >
                      <FaFacebookF />
                    </SocialIcon>
                  </Box>
                  <Box sx={{ width: ['30px'] }}>
                    <SocialIcon url={'https://github.com/larsroettig'}>
                      <FaGithub />
                    </SocialIcon>
                  </Box>
                  <Box sx={{ width: ['30px'] }}>
                    <SocialIcon
                      url={'https://www.linkedin.com/in/larsroettig/'}
                    >
                      <FaLinkedin />
                    </SocialIcon>
                  </Box>
                </IconContext.Provider>
              </Flex>
            </div>
            <div sx={{ margin: 'auto', padding: '5px' }}>
              <Text sx={{ fontWeight: '300' }}>Employee at:</Text>
              <TechDivisionLogo color={tailwind.colors.gray[1]} />
            </div>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
