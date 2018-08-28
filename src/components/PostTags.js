import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  <TagLink
    key={tag}
    to={`/tags/${tag}`}
  >
    <TagName>
      {`${tag}`}
    </TagName>
  </TagLink>
));

const PostTags = ({ tags }) => (
  <Container>
    {renderTags(tags)}
  </Container>

);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const TagLink = styled(Link)`
  text-decoration: none;
`;

const TagName = styled(MetaText)`
  background: ${eggShell}88;
  border-bottom: 0.3em solid ${turquoise}00;
  border-top: 0.3em solid ${turquoise}00;
  margin: 0em 0.5em 0.4em 0em;
  padding: 0em 0.6em;

  &:hover {
    border-bottom: 0.3em solid ${turquoise};
  }
`;

PostTags.propTypes = {};

export default PostTags;
