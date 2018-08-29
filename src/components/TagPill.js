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
    url={`/tags/${children}`}
  >
    <TagName>
      {`${children}`.toLowerCase()}
    </TagName>
  </TagLink>
);

const TagLink = styled(Link)`
  text-decoration: none;
`;

const TagName = styled(MetaText)`
  background: ${eggShell}88;
  border-bottom: 0.3em solid ${turquoise}00;
  border-top: 0.3em solid ${turquoise}00;
  margin: 0em 0.5em 0.4em 0em;
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
