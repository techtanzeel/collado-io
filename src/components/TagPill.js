import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SuperLink from './SuperLink';

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
  <Container>
    <SuperLink
      key={children}
      href={`/tags/${children}`}
    >
      <TagName>
        {`${children}`.toLowerCase()}
      </TagName>
    </SuperLink>
  </Container>
);

const Container = styled.div`
  display: flex;
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
