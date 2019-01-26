import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const BlogPostLink = ({ date, excerpt, path, title }) => (
  <Card hover path={path}>
    <h2 style={{ margin: 0 }}>{title}</h2>
    <p className="excerpt">{excerpt}</p>
    <p className="meta">{`Published on ${date}`}</p>
  </Card>
);

BlogPostLink.propTypes = {
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

BlogPostLink.defaultProps = {
  excerpt: ''
};

export default BlogPostLink;
