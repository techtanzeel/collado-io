import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {`${post.frontmatter.title} — ${post.frontmatter.date}`}
    </Link>
  </div>
);

export default PostLink;
