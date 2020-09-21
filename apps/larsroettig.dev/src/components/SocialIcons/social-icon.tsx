// @ts-ignore
import React from 'react';

type SocialIconProps = { url: string; children: React.ReactNode };

const SocialIcon = ({ url, children }: SocialIconProps) => (
  <a
    rel="me"
    data-a11y="false"
    aria-label={`Link to ${url}`}
    href={url}
  >
    {children}
  </a>
);

export default SocialIcon;
