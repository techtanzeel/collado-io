import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from './Card';

import { turquoise } from '../utils/colors';
import { Title2, BodyText, MetaText } from '../utils/theme';

const PostLink = ({
  date, excerpt, path, title,
}) => (
  <Card
    hasHover
  >
    <BlogPostLink to={path}>
      <BlogPostTitle>
        {title}
      </BlogPostTitle>
    </BlogPostLink>
    <BodyText>
      {excerpt}
    </BodyText>
    <Published>
      {`Published on ${date}`}
    </Published>
  </Card>
);

const BlogPostLink = styled(Link)`
  text-decoration: none;
`;

const BlogPostTitle = styled(Title2)`
  margin-top: 0.5em;
  transition: color 0.3s ease;

  &:hover {
    color: ${turquoise};
  }
`;

const Published = styled(MetaText)`
  margin-bottom: 0.5em;
`;

PostLink.propTypes = {
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostLink;
