import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  mobile, tablet, desktop,
} from '../utils/breakpoints';
import {
  turquoise, eggShell,
} from '../utils/colors';
import {
  MetaText,
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
  border-bottom: 0.25em solid ${turquoise}00;
  border-top: 0.25em solid ${turquoise}00;
  margin-bottom: 0.25em; // Overrides default line-height
  margin-right: 0.25em; // Makes some room between pills
  padding: 0em 0.5em;

  &:hover {
    border-bottom: 0.25em solid ${turquoise};
  }

  @media (min-width: ${mobile}) {

  }

  @media (min-width: ${tablet}) {
    margin-right: 0.5em;
    padding: 0.25em 0.75em;
  }

  @media (min-width: ${desktop}) {

  }
`;

TagPill.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TagPill;
