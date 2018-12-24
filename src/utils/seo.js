import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Twitter from './twitter';
import Favicon from '../../static/favicon/favicon.ico';
import smallFavicon from '../../static/favicon/favicon-32x32.png';
import appleTouchIcon from '../../static/favicon/apple-touch-icon.png';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        shortName
        author
        siteLanguage
        defaultImage: image
        defaultDescription: description
        siteUrl
        twitter
      }
    }
  }
`;

const SEO = ({
  title, description, image, pathname, article,
}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          shortName,
          author,
          siteLanguage,
          defaultImage,
          defaultDescription,
          siteUrl,
          twitter,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
      };

      return (
        <>
          <Helmet title={seo.title}>
            <html lang={siteLanguage} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="apple-mobile-web-app-title" content={shortName} />
            <meta name="application-name" content={shortName} />
            <link rel="canonical" href="https://www.collado.io" />
            <link rel="icon" sizes="64x64" href={Favicon} />
            <link rel="icon" sizes="32x32" type="image/png" href={smallFavicon} />
            <link rel="apple-touch-icon" sizes="144x144" type="image/png" href={appleTouchIcon} />

            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
          </Helmet>
          <Twitter
            username={twitter}
            title={seo.title}
            description={seo.description}
            image={seo.image}
          />
        </>
      );
    }}
  />
);

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
};

export default SEO;
