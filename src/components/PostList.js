import React from 'react';
import PropTypes from 'prop-types';

import PostLink from './PostLink';

const renderPosts = (posts) => (
  posts
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <PostLink
        key={edge.node.id}
        date={edge.node.frontmatter.date}
        excerpt={edge.node.frontmatter.excerpt}
        path={edge.node.frontmatter.path}
        // tags={edge.node.frontmatter.tags}
        title={edge.node.frontmatter.title}
      />))
);

const PostList = ({ children }) => (
  <div>
    {renderPosts(children)}
  </div>
);

PostList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
