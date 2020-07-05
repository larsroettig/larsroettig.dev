import * as React from 'react';
import { HomeTemplate } from '../types';

import Layout from '../components/layout';
import Hero from '../components/Hero';
import SocialIcons from '../components/SocialIcons';
import Container from '../components/container';
import SEO from '../components/SEO';

const CardList = React.lazy(() => import('../components/CardList'));
const About = React.lazy(() => import('../components/About'));

const HomePage: HomeTemplate = ({ pageContext }) => {
  const { articles } = pageContext;
  const isSSR = typeof window === 'undefined';

  return (
    <Layout>
      <SEO pathname={'/'} isBlogPost={false} />
      <Hero />
      <SocialIcons />
      <Container>
        <h2 sx={{ fontSize: [4, 5] }}>Blog</h2>
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <CardList articles={articles} />
          </React.Suspense>
        )}
      </Container>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <About />
        </React.Suspense>
      )}
    </Layout>
  );
};

export default HomePage;
