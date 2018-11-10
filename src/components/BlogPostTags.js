import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TagPill from './TagPill';

const BlogPostTags = ({ tags }) => (
  <Container>
    {tags.map((tag) => (
      <TagPill
        key={tag}
      >
        {tag}
      </TagPill>
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

BlogPostTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BlogPostTags;
