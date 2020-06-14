/** @jsx jsx */
import {jsx} from 'theme-ui';
import Layout from '../components/layout';
import Container from '../components/container';
import SEO from '../components/SEO';
import MDX from '../components/Mdx';
import * as React from "react";

const Page: Template = ({pageContext, location}) => {

  const {title, body} = pageContext

  const description = title + ' Page';

  return (
    <Layout>
      <SEO title={title} description={description} pathname={location.pathname}
           isBlogPost={false}/>
      <Container>
        <section sx={{my: 5}}>
          <MDX content={body}/>
        </section>
      </Container>
    </Layout>
  )
};

export default Page;
