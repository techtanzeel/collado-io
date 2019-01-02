import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SuperLink from './SuperLink';
import { tablet } from '../utils/breakpoints';
import { fakeAsbestos, hipBlack } from '../utils/colors';
import { MetaTextMono } from '../utils/theme';

const TagPill = ({ children }) => (
  <Container>
    <SuperLink
      href={`/tags/${children}`}
    >
      <TagText>
        {`${children}`.toLowerCase()}
      </TagText>
    </SuperLink>
  </Container>
);

const Container = styled.div`
  display: flex;
  margin-right: 0.25em;
  margin-bottom: 0.25em;

  @media (min-width: ${tablet}) {
    margin-right: 0.5em;
    margin-bottom: 0.5em;
  }
`;

const TagText = styled(MetaTextMono)`
  background: ${fakeAsbestos}22;
  border-radius: 0.25em;
  color: ${hipBlack};
  margin-bottom: 0em;
  padding: 0.25em 0.5em;
  transition: background 0.3s ease-out;

  &:hover {
    background: ${fakeAsbestos}44;
  }

  @media (min-width: ${tablet}) {
    padding: 0.25em 0.75em;
  }
`;

TagPill.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TagPill;
