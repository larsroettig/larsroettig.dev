/** @jsx jsx */
import {jsx} from 'theme-ui';
import Layout from '../components/layout';
import Container from '../components/container';
import SEO from '../components/SEO';
import MDX from '../components/Mdx';
import * as React from "react";

const Page: Template = ({pageContext, location}) => {

  const {title, body} = pageContext

  return (
    <Layout>
      <SEO />
      <Container>
        <SEO title={title}/>
        <section sx={{my: 5}}>
          <MDX content={body}/>
        </section>
      </Container>
    </Layout>
  )
};

export default Page;
