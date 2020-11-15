/** @jsx jsx */
import { jsx } from 'theme-ui';

type ContainerProps = { children: React.ReactNode; padding?: string };
const Container = ({ children, padding = '2rem' }: ContainerProps) => (
   <div style={{
   padding: `${padding}`,
   boxSizing: 'border-box',
   width: '100%',
   maxWidth: '1280px',
   margin: '0 auto'
  }}
  >
    {children}
  </div>
);

export default Container;
