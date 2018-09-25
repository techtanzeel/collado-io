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
  <Container
    hasImage={imgURL}
  >
    <Title>
      {title}
    </Title>
    <TagLine>
      {tagline}
    </TagLine>
    {imgURL ? <Image src={imgURL} alt={imgAlt} /> : ''}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => (props.hasImage ? '0em' : '2em')};
`;

const Title = styled(Title1)`
  margin: 0em auto;
  text-align: center;
`;

const TagLine = styled(MetaText)`
  text-align: center;
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
  imgURL: 'false',
};

export default PageHeader;
