import * as React from 'react';

import { IArticle, IAuthor } from '../../types';
import SEO from './seo';

interface ArticleProps {
  siteUrl: string;
  article: IArticle;
  author: IAuthor;
  location: Location;
}

const ArticleSEO = ({ siteUrl, article, author, location }: ArticleProps) => {
  // @todo should support also external urls
  const canonicalUrl = siteUrl + location.pathname;
  const imageLocation = `${siteUrl + article.hero.seo.src}`;

  return (
    <SEO
      authorName={author.name}
      authorsSlug={author.slug}
      authorsBio={author.bio}
      canonicalUrl={canonicalUrl}
      dateforSEO={article.dateForSEO}
      description={article.excerpt}
      image={imageLocation}
      isBlogPost={true}
      articlepathName={siteUrl + location.pathname}
      published={article.date}
      timeToRead={article.timeToRead}
      title={article.title}
    ></SEO>
  );
};
export default ArticleSEO;
