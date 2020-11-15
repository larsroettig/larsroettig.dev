/** @jsx jsx */
import { Box, css, jsx, Styled } from 'theme-ui';
import { Global } from '@emotion/core';
import 'typeface-roboto';
import * as React from 'react';
import ScrollUp from './ScrollUp';
import Header from './Header';
import Footer from './Footer';
import CodeStyles from '../styles/code';

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <Styled.root data-testid="theme-root">
        <Global
          styles={css({
            '*': {
              boxSizing: 'inherit',
            },
            body: {
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
              textRendering: 'optimizeLegibility',
            },
            '::selection': {
              backgroundColor: 'primary',
              color: 'white',
            },
            a: {
              transition: 'all 0.3s ease-in-out',
              color: 'text',
            }
          })}
        />
        <Header />
        <ScrollUp />
        <Box css={css({ ...CodeStyles })}>{children}</Box>
        <Footer />
      </Styled.root>
    </React.Fragment>
  );
};

export default Layout;
