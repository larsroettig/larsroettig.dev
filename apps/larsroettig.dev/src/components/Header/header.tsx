/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';

import { Box, Flex } from '@theme-ui/components';
import { tailwind } from '@theme-ui/presets';
import { FaRss } from 'react-icons/all';
import Container from '../container';
import ColorModeToggle from './colormode-toggle';
import replaceSlashes from '../../utils/replaceSlashes';
import LarsLogo from '../Brand';

const Header = () => {
  const basePath = '/';
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === 'dark';
  const toggleColorMode = (e: any) => {
    e.preventDefault();
    setColorMode(isDark ? 'light' : 'dark');
  };
  const color = isDark === false ? '#2D3748' : tailwind.colors.gray[3];

  return (
    <div sx={{ backgroundColor: 'headerBackground' }}>
      <Container padding={'1rem 2rem '}>
        <header>
          <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <a
              href={replaceSlashes(`/${basePath}`)}
              aria-label={`Back to home`}
              sx={{ color: 'heading', textDecoration: 'none' }}
            >
              <LarsLogo color={color} />
            </a>

            <Box sx={{ display: 'flex' }}>
              <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
              <a
                aria-label="Rss feed"
                href={replaceSlashes(`/${basePath}/rss.xml`)}
                sx={{ padding: '2px 1rem', color }}
              >
                <FaRss />
              </a>
            </Box>
          </Flex>
        </header>
      </Container>
    </div>
  );
};

export default Header;
