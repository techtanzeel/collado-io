import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  mobile, tablet, desktop,
} from '../utils/breakpoints';
import {
  Title1, MetaText,
} from '../utils/theme';

const PageHeader = ({
  imgAlt, imgURL, tagline, title,
}) => (
  <Container hasImage={imgURL}>
    <Title>{title}</Title>
    <TagLine>{tagline}</TagLine>
    {imgURL ? <Image src={imgURL} alt={imgAlt} /> : null}
  </Container>
);

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => (props.hasImage ? '-2em' : '0.25em')};
`;

const Title = styled(Title1)`
  margin: 0em auto;
`;

const TagLine = styled(MetaText)`
  margin-bottom: 1em;
  text-transform: uppercase;
`;

const Image = styled.img`
  margin: 0em auto;
  min-width: 12em;
  width: 50%;

  @media (min-width: ${mobile}) {
    max-width: 16em;
  }

  @media (min-width: ${tablet}) {
    max-width: 17em;
  }

  @media (min-width: ${desktop}) {
    max-width: 18em;
  }
`;

PageHeader.propTypes = {
  imgAlt: PropTypes.string,
  imgURL: PropTypes.string,
  tagline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
  imgAlt: '',
  imgURL: '',
};

export default PageHeader;
