import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Twitter from './twitter';
import favicon16 from '../../static/favicon/favicon-16x16.png';
import favicon32 from '../../static/favicon/favicon-32x32.png';
import favicon96 from '../../static/favicon/favicon-96x96.png';
import favicon128 from '../../static/favicon/favicon-128x128.png';
import favicon196 from '../../static/favicon/favicon-196x196.png';
import apple120 from '../../static/favicon/apple-touch-icon-120x120.png';
import apple152 from '../../static/favicon/apple-touch-icon-152x152.png';
// TODO: Add 167 & 180 Apple favicons
// import apple167 from '../../static/favicon/apple-touch-icon-167x167.png';
// import apple180 from '../../static/favicon/apple-touch-icon-180x180.png';

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
            <meta name="google-site-verification" content="vFwB-R5enzdQD5dGriZ1LWEt8Vs2gS9FPjXeeCg4LAI" />

            <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
            <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
            <link rel="icon" type="image/png" href={favicon96} sizes="96x96" />
            <link rel="icon" type="image/png" href={favicon128} sizes="128x128" />
            <link rel="icon" type="image/png" href={favicon196} sizes="196x196" />
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href={apple120} />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href={apple152} />
            {/*
            <link rel="apple-touch-icon-precomposed" sizes="167x167" href={apple167} />
            <link rel="apple-touch-icon-precomposed" sizes="180x180" href={apple180} />
            */}

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
