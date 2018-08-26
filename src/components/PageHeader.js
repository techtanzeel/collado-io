import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  mobile, tablet,
} from '../utils/breakpoints';
import {
  Title1, MetaText,
} from '../utils/theme';

const PageHeader = ({
  title, tagline, img, imgURL, imgAlt,
}) => (
  <Container
    cozy={img}
  >
    <HeaderTitle>
      {title}
    </HeaderTitle>
    <HeaderLine>
      {tagline}
    </HeaderLine>
    {img ? <HeaderImage src={imgURL} alt={imgAlt} /> : ''}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => (props.cozy ? '0em' : '2em')};
`;

const HeaderTitle = styled(Title1)`
  margin: 0em auto;
  padding: 0em 0.5em;
  text-align: center;
`;

const HeaderLine = styled(MetaText)`
  margin: 0em auto;
  text-align: center;
  text-transform: uppercase;
`;

const HeaderImage = styled.img`
  margin: 0em auto;
  min-width: 160px;
  width: 50%;

  @media (min-width: ${mobile}) {
    max-width: 280px;
  }

  @media (min-width: ${tablet}) {
    max-width: 330px;
  }
`;

PageHeader.propTypes = {};

export default PageHeader;
