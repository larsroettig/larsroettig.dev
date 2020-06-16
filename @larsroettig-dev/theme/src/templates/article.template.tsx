/** @jsx jsx */
import {jsx} from 'theme-ui';
import * as React from "react";
import styled from "@emotion/styled";
import {Box, Flex} from '@theme-ui/components';
import {tailwind} from '@theme-ui/presets';
import {FaClock} from "react-icons/all";
import {Template} from "../types";

import Layout from "../components/layout";
import Container from "../components/container";
import MDX from "../components/Mdx";
import Share from "../components/Share";

import {breakpointMd} from "../styles/breakpoints";
import ArticleSEO from "../components/SEO/article-seo";
import {graphql, useStaticQuery} from 'gatsby';
import SupporterList from "../components/Supporter";
import Author from "../components/Author";
import RelatedBlogPosts from "../components/RelatedBlogPosts";
import GatsbyImage from "gatsby-image";

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            siteUrl
          }
        }
      }
    }
    supporters: allSupporterJson {
      edges {
        node {
          id
          website
          name
          alt
          image {
            desktop {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 600, quality: 70) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
            mobile {
              childImageSharp {
                fluid(maxWidth: 600, quality: 70) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Article: Template = ({pageContext, location}) => {
  // fix for location is wrong https://github.com/gatsbyjs/gatsby/issues/9207
  location.pathname.concat('/');
  const {article, authors, next} = pageContext;
  const author = authors[0];

  const results = useStaticQuery(siteQuery);
  const siteUrl = results.allSite.edges[0].node.siteMetadata.siteUrl;
  const shareUrl = siteUrl + location.pathname;
  const supporterList = results.supporters.edges;

  return (
    <Layout>
      <ArticleSEO
        siteUrl={siteUrl}
        article={article}
        author={author}
        location={location}
      />
      <Container>
        <Flex sx={{flexWrap: 'wrap'}}>
          <Box
            sx={{
              width: ['100%', '100%', '100%', tailwind.sizes['5/6']],
              padding: '0 1.5rem',
              minHeight: '305px',
              postion: 'relative',
            }}
          >
            <GatsbyImage alt={'Image from article ' + article.title}
                         fluid={article.hero.full}/>
            <h1 sx={{textAlign: 'center', fontSize: [6]}}>{article.title}</h1>
            <p
              sx={{
                color: 'secondary',
                mt: 3,
                a: {color: 'secondary'},
                fontSize: [1],
                fontFamily:
                  'Menlo,Monaco,Consolas,Liberation Mono,Courier New, monospace',
                textAlign: 'center',
              }}
            >
              <span>By </span> {author.name}
              <span className="inline-flex text-sm px-2"> — </span>
              <time>{article.date}</time>
              {article.timeToRead && ' — '}
              {article.timeToRead && (
                <span>
                {article.timeToRead} min <FaClock/>
              </span>
              )}
            </p>
            <section
              sx={{
                my: 5,
                '.gatsby-resp-image-wrapper': {
                  my: [4, 4, 5],
                  maxWidth: '100% !important;',
                },
              }}
            >
              <MDX content={article.body}/>
              <p sx={{textAlign: 'right', fontWeight: '300'}}>
                <a sx={{textDecoration: 'none', color: 'primary'}}
                   target="_blank" rel="noopener noreferrer"
                   href={article.editLink}>
                  Edit post on GitHub
                </a>
              </p>
              <Author author={author}/>
              <RelatedBlogPosts articles={next}/>
            </section>
          </Box>
          <SideBar>
            <Share url={shareUrl} title={article.title}/>
            <SupporterList supporterList={supporterList}/>
          </SideBar>
        </Flex>
      </Container>
    </Layout>
  );
};

const SideBar = styled.div`
  width: 100%;
  ${breakpointMd} {
    width: ${tailwind.sizes['1/6']};
    position: sticky;
    top: 1rem;
    max-height: calc(100vh - 120px);
  }
`;

export default Article;
