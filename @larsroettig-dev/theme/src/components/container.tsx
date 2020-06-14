/** @jsx jsx */
import {jsx} from 'theme-ui';
import {css} from '@emotion/core';

type ContainerProps = { children: React.ReactNode; padding?: string };
const Container = ({children, padding = '2rem'}: ContainerProps) => (
  <div
    css={css`
        padding: ${padding};
        box-sizing: border-box;
        min-width: 0;
        width: 100%;
        min-width: 0;
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
      `}
  >
    {children}
  </div>
);

export default Container;
