/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { tailwind } from '@theme-ui/presets';

type CalloutProps = {
  type: string;
};

const Callout = (properties: React.PropsWithChildren<CalloutProps>) => {
  const variantStyles = {
    info: {
      borderColor: tailwind.colors.blue[8],
      backgroundColor: tailwind.colors.blue[1],
    },
    warning: {
      borderColor: tailwind.colors.orange[8],
      backgroundColor: tailwind.colors.orange[1],
    },
    danger: {
      borderColor: tailwind.colors.red[8],
      backgroundColor: tailwind.colors.red[1],
    },
  };

  const type = properties.type ?? 'info';

  return (
    <aside
      css={{
        color: 'rgb(45, 55, 72)',
        padding: '0.5rem 2rem',
        margin: '1rem 0',
        borderLeft: '5px solid',
        ...variantStyles[type],
      }}
    >
      {properties.children}
    </aside>
  );
};
export default Callout;
