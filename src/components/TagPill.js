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

const TagPill = ({ children }) => (
  <TagLink
    key={children}
    to={`/tags/${children}`}
  >
    <TagName>
      {`${children}`.toLowerCase()}
    </TagName>
  </TagLink>
);

// Does not have a container element, hence it has to be nested
// inside a flex container i.e. PostTags.js

const TagLink = styled(Link)`
  text-decoration: none;
`;

const TagName = styled(MetaText)`
  background: ${eggShell}88;
  border-bottom: 0.3em solid ${turquoise}00;
  border-top: 0.3em solid ${turquoise}00;
  margin-bottom: 0.4em; // Overrides default line-height
  margin-right: 0.5em; // Makes some room between pills
  padding: 0em 0.5em;

  &:hover {
    border-bottom: 0.3em solid ${turquoise};
  }

  @media (min-width: ${mobile}) {}

  @media (min-width: ${tablet}) {
    padding: 0.1em 0.6em;
  }
`;

TagPill.propTypes = {};

export default TagPill;
