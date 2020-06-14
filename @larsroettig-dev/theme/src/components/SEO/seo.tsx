import * as React from 'react';
import {Helmet} from 'react-helmet';
import {withPrefix} from 'gatsby';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import {IAuthor} from "../../types";

const defaultProps = {
  title: '',
  description: false,
  pathname: false,
  image: false,
  children: null,
  isBlogPost: false
};

interface HelmetProps {
  articlePathName?: string;
  author?: IAuthor
  canonicalUrl?: string;
  dateforSEO?: string;
  description?: string;
  image?: string;
  isBlogPost: boolean;
  pathname: string;
  published?: string;
  timeToRead?: string;
  title: string;
  children;
}


const SEO = (properties: HelmetProps) => {
  let {
    articlePathName,
    author,
    canonicalUrl,
    children,
    dateforSEO,
    description,
    image,
    isBlogPost,
    pathname,
    timeToRead,
    title
  } = properties;

  const fullURL = (path: string) =>
    path ? `${path}` : site.siteUrl;

  const site = useSiteMetadata();

  const {siteLanguage, siteUrl} = site;
  const currentUrl = `${siteUrl}${pathname || ''}`;

  image = image || `${site.siteUrl}/preview.jpg`;
  title = title || site.title
  description = description || site.description

  const twitter = site.social.find(option => option.name === 'twitter') || {};
  const github = site.social.find(option => option.name === 'github') || {};
  const linkedin = site.social.find(option => option.name === 'linkedin') || {};

  let authorSlug = '';
  let authorName = '';
  let authorsBio = '';
  let authorTwitterUrl = '';
  let authorGithubUrl = '';
  let authorLinkedinUrl = '';

  if (author !== undefined) {
    authorSlug = author.slug;
    authorName = author.name;
    authorsBio = author.bio;
    authorTwitterUrl = author.social.find(option => option.type === 'twitter').url || '';
    authorGithubUrl = author.social.find(option => option.type === 'github').url || '';
    authorLinkedinUrl = author.social.find(option => option.type === 'linkedin').url || '';
  }

  const pageUrl = site.siteUrl + pathname

  image = image || `${site.siteUrl}/preview.jpg`;

  // Checks if the source of the image is hosted on Contentful
  if (`${image}`.includes('ctfassets')) {
    image = `${image}`;
  } else {
    image = fullURL(image);
  }

  const siteSchema = `{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "${site.siteUrl}/#organization",
        "name": "${site.title}",
        "url": "${site.siteUrl}",
        "sameAs": [
          "${twitter.url}",
          "${github.url}",
          "${linkedin.url}"
        ],
        "logo": {
          "@type": "ImageObject",
          "@id": "${site.siteUrl}/#logo",
          "inLanguage": "en-US",
          "url": "${site.siteUrl}/icons/icon-512x512.png",
          "width": 512,
          "height": 512,
          "caption": "${site.title}"
        },
        "image": {
          "@id": "${site.siteUrl}/#logo"
        }
      },
      {
        "@type": "WebSite",
        "@id": "${site.siteUrl}/#website",
        "url": "${site.siteUrl}",
        "name": "${site.name}",
        "description": "${site.description}",
        "publisher": {
          "@id": "${site.siteUrl}/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": [
          "WebPage"
        ],
        "@id": "${pageUrl}/#webpage",
        "url": "${pageUrl}",
        "name": "${title || site.name}",
        "isPartOf": {
          "@id": "${site.siteUrl}/#website"
        },
        "about": {
          "@id": "${site.siteUrl}/#organization"
        },
        "description": "${description || site.description}",
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "description": "Breadcrumbs list",
        "itemListElement": [
          {
            "@type": "ListItem",
            "item": "${site.siteUrl}",
            "name": "Homepage",
            "position": "1"
          }
        ],
        "name": "Breadcrumbs"
      }
    ]
  }
`.replace(/"[^"]+"|(\s)/gm, function (matched, group1) {
    if (!group1) {
      return matched;
    }
    return '';

  });

  const blogSchema = `{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "${site.siteUrl}/#organization",
        "name": "${site.title}",
        "url": "${site.siteUrl}",
        "sameAs": [
          "${twitter.url}",
          "${github.url}",
          "${linkedin.url}"
        ],
        "logo": {
          "@type": "ImageObject",
          "@id": "${site.siteUrl}/#logo",
          "inLanguage": "en-US",
          "url": "${site.siteUrl}/icons/icon-512x512.png",
          "width": 512,
          "height": 512,
          "caption": "${site.title}"
        },
        "image": {
          "@id": "${site.siteUrl}/#logo"
        }
      },
      {
        "@type": "WebSite",
        "@id": "${site.siteUrl}/#website",
        "url": "${site.siteUrl}",
        "name": "${site.name}",
        "description": "${site.description.replace(/"/g, '\\"')}",
        "publisher": {
          "@id": "${site.siteUrl}/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ImageObject",
        "@id": "${articlePathName}/#primaryimage",
        "inLanguage": "en-US",
        "url": "${image}",
        "width": 1200,
        "height": 628
      },
      {
        "@type": [
          "WebPage"
        ],
        "@id": "${articlePathName}/#webpage",
        "url": "${articlePathName}",
        "name": "${title}",
        "isPartOf": {
          "@id": "${site.siteUrl}/#website"
        },
        "primaryImageOfPage": {
          "@id": "${articlePathName}/#primaryimage"
        },
        "datePublished": "${dateforSEO}",
        "dateModified": "${dateforSEO}",
        "description": "${description}",
        "breadcrumb": {
          "@id": "${articlePathName}/#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "${articlePathName}/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "WebPage",
              "@id": "${site.siteUrl}",
              "url": "${site.siteUrl}",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "WebPage",
              "@id": "${articlePathName}",
              "url": "${articlePathName}",
              "name": "${title}"
            }
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "${articlePathName}/#article",
        "isPartOf": {
          "@id": "${articlePathName}/#webpage"
        },
        "author": {
          "@id": "${site.siteUrl}/#/schema${authorSlug}"
        },
        "headline": "${title}",
        "datePublished": "${dateforSEO}",
        "dateModified": "${dateforSEO}",
        "mainEntityOfPage": {
          "@id": "${articlePathName}/#webpage"
        },
        "publisher": {
          "@id": "${site.siteUrl}/#organization"
        },
        "image": {
          "@id": "${articlePathName}/#primaryimage"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": [
          "Person"
        ],
        "@id": "${site.siteUrl}/#/schema${authorSlug}",
        "name": "${authorName}",
        "image": {
          "@type": "ImageObject",
        "@id": "${site.siteUrl}/#personlogo",
          "inLanguage": "en-US",
          "caption": "${authorName}"
        },
        "description": "${authorsBio}",
        "sameAs": [
          "${authorTwitterUrl}",
          "${authorGithubUrl}",
          "${authorLinkedinUrl}"
        ]
      }
    ]
  }
`.replace(/"[^"]+"|(\s)/gm, function (matched, group1) {
    if (!group1) {
      return matched;
    }
    return '';

  });

  const schema = isBlogPost ? blogSchema : siteSchema
  canonicalUrl = canonicalUrl || currentUrl

  const metaTags = [
    {charset: 'utf-8'},
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#fff',
    },
    {itemprop: 'name', content: title || site.title},
    {itemprop: 'description', content: description || site.description},
    {itemprop: 'image', content: image},
    {name: 'description', content: description || site.description},

    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:site', content: site.name},
    {name: 'twitter:title', content: title || site.title},
    {name: 'twitter:description', content: description || site.description},
    {name: 'twitter:creator', content: twitter.url},
    {
      name: 'twitter:image',
      content: image,
    },

    {property: 'og:type', content: 'website'},
    {property: 'og:title', content: title || site.title},
    {property: 'og:url', content: currentUrl},
    {property: 'og:image', content: image},
    {property: 'og:description', content: description || site.description},
    {property: 'og:site_name', content: site.name},
  ];

  if (timeToRead) {
    // @ts-ignore
    metaTags.push({name: 'twitter:label1', value: 'Reading time'});
    // @ts-ignore
    metaTags.push({name: 'twitter:data1', value: `${timeToRead} min read`});
  }

  return (
    <Helmet
      title={title || site.title}
      htmlAttributes={{lang: siteLanguage}}
      meta={metaTags}
    >
      {canonicalUrl && <link rel="canonical" href={canonicalUrl}/>}
      <script type="application/ld+json">{schema}</script>
      <link rel="icon" type="image/png" sizes="32x32"
            href={withPrefix('/favicon-32x32.png')}/>
      <link rel="icon" type="image/png" sizes="16x16"
            href={withPrefix('/favicon-16x16.png')}/>
      <link rel="apple-touch-icon" sizes="180x180"
            href={withPrefix('/apple-touch-icon.png')}/>
      {children}
      <script async defer data-domain="larsroettig.dev"
              src="https://plausible.io/js/plausible.js"></script>
    </Helmet>
  );
};

export default SEO;

SEO.defaultProps = defaultProps;
