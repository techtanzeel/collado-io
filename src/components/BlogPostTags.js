import React from 'react';
import PropTypes from 'prop-types';
import TagPill from './TagPill';

const BlogPostTags = ({ tags }) => (
  <div className="flex tags">
    {tags.map((tag) => (
      <TagPill key={tag}>{tag}</TagPill>
    ))}
  </div>
);

BlogPostTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default BlogPostTags;
