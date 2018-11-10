import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SuperLink from './SuperLink';

import { tablet } from '../utils/breakpoints';
import { fakeAsbestos, black } from '../utils/colors';
import { MetaTextMono } from '../utils/theme';

const TagPill = ({ children }) => (
  <Container>
    <SuperLink
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

const TagName = styled(MetaTextMono)`
  background: ${fakeAsbestos}22;
  border-radius: 0.25em;
  color: ${black};
  margin-bottom: 0.25em;
  margin-right: 0.25em; // Makes some room between pills
  padding: 0.25em 0.5em;
  transition: background 0.3s ease-out;

  &:hover {
    background: ${fakeAsbestos}44;
  }

  @media (min-width: ${tablet}) {
    margin-bottom: 0.5em;
    margin-right: 0.5em;
    padding: 0.25em 0.75em;
  }
`;

TagPill.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TagPill;
