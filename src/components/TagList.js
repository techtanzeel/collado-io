import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TagPill from './TagPill';

import {
  mobile, tablet,
} from '../utils/breakpoints';
import {
  fakeAsbestos, turquoise, eggShell,
} from '../utils/colors';
import {
  Title3, MetaText,
} from '../utils/theme';

const renderTags = (tags) => tags.map((tag) => (
  <TagPill>
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
  justify-content: flex-start;
`;

TagList.propTypes = {};

export default TagList;
