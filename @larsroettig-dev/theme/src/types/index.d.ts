import * as React from "react";

interface IGatsbyImage {
  src: string;
  base64?: string;
  srcWebp?: string;
  srcSet?: string;
  srcSetWebp?: string;
  tracedSVG?: string;
}

interface IGatsbyImageFluid extends IGatsbyImage {
  maxHeight: number;
  maxWidth: number;
}

interface ISocialMedia {
  type: string;
  url: string;
}

export interface IAuthor {
  name: string;
  slug: string;
  bio: string;
  avatar: {
    small: IGatsbyImageFluid;
    medium: IGatsbyImageFluid;

  };
  showSocial: boolean;
  social: ISocialMedia[];
}

export interface IArticle {
  slug: string;
  authors: IAuthor[];
  excerpt: string;
  body: string;
  id: string;
  title: string;
  dateForSEO: string;
  description: string;
  editLink: string;
  hero: {
    full: IGatsbyImageFluid;
    preview: IGatsbyImageFluid;
    regular: IGatsbyImageFluid;
    seo: string;
  };
  timeToRead: number;
  date: string;
}

interface Author {
  name: string;
  bio: string;
  avatar: IGatsbyImageFluid;
}

interface SupporterNode {
  node: Supporter
}

interface Supporter {
  name: string,
  website: string,
  alt: string,
  follow: boolean,
  image: {
    desktop: IGatsbyImageFluid;
    mobile: IGatsbyImageFluid
  }
}

type AuthorProps = {
  authorList: Array<Author>;
}

type PostsProps = {
  posts: Array<IArticle>;
}

export type HomeTemplate = React.FC<{
  pageContext: {
    articles: Array<IArticle>;
  };
  location: Location;
}>;


export type Template = React.FC<{
  pageContext: {
    article: IArticle;
    authors: IAuthor[];
    next: IArticle[];
  };
  location: Location;
}>
