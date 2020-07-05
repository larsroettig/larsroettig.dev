/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Flex, Link, Text } from '@theme-ui/components';
import { tailwind } from '@theme-ui/presets';
import Container from '../container';
import Avatar from './avatar';

const Hero = () => (
  <div
    sx={{
      backgroundColor: 'headerBackground',
    }}
  >
    <Container padding={'0'}>
      <Flex sx={{ flexWrap: 'wrap' }}>
        <Box
          sx={{
            width: ['100%', '100%', '40%'],
            minHeight: '305px',
            postion: 'relative',
          }}
        >
          <Avatar />
        </Box>

        <Box
          sx={{
            width: ['100%', '100%', '60%'],
            pl: '2rem',
            minHeight: ['200px', '250px'],
          }}
        >
          <div
            sx={{
              maxWidth: '600px',
              margin: 'auto',
              marginTop: ['0', '0', '4rem'],
            }}
          >
            <h1>
              Hi, I&apos;m Lars Roettig
              <Text
                sx={{
                  fontSize: [2, 3],
                  fontWeight: '300',
                }}
              >
                I write this blog about Software Architecture and Magento
                Development
              </Text>
            </h1>
            <Link
              sx={{
                ...tailwind.buttons.simple,
                fontWeight: '300',
                background: tailwind.colors.blue[9],
              }}
              href={'#about-me'}
            >
              About me
            </Link>
          </div>
        </Box>
      </Flex>
    </Container>
  </div>
);

export default Hero;
