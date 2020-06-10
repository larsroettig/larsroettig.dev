import React from 'react';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';

import Code from './Code';
import Callout from './callout';

const components = {
  code: Code.Prism,
  pre: Code.Pre,
  Callout,
};

interface MDXProps {
  content: React.ReactNode;
}

const MDX: React.FC<MDXProps> = ({ content, children, ...properties }) => {
  const [colorMode] = useColorMode();

  return (
    <MDXProvider components={components}>
      <MDXBody>
        <MDXRenderer isDark={colorMode === 'dark'} {...properties}>
          {content}
        </MDXRenderer>
        {children}
      </MDXBody>
    </MDXProvider>
  );
};

export default MDX;

const MDXBody = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
