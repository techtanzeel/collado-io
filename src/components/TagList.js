import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TagPill from './TagPill';

const renderTags = (tags) => tags.map((tag) => (
  <TagPill
    key={tag}
  >
    {tag}
  </TagPill>
));

const TagList = ({ tags }) => (
  <Container>
    {renderTags(tags)}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagList;
