import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from './Card';
import { mobile, tablet, desktop } from '../utils/breakpoints';
import { Title2, BodyText, MetaText } from '../utils/theme';

const BlogPost = ({
  date, excerpt, path, title,
}) => (
  <Card
    hover
    path={path}
  >
    <Title>
      {title}
    </Title>
    <Excerpt>
      {excerpt}
    </Excerpt>
    <Published>
      {`Published on ${date}`}
    </Published>
  </Card>
);

const Title = styled(Title2)`
  margin: 0.5em 0em;
`;

const Excerpt = styled(BodyText)`
  font-size: 0.875em;
  /* reduce font-size by 2px */
  margin: 0.5em 0em;

  @media (min-width: ${mobile}) {}

  @media (min-width: ${tablet}) {
    font-size: 1em;
  }

  @media (min-width: ${desktop}) {}
`;

const Published = styled(MetaText)`
  font-size: 0.75em;
  /* reduce font-size by 4px */
  margin: 1.5em 0em 0.5em;

  @media (min-width: ${mobile}) {}

  @media (min-width: ${tablet}) {
    font-size: 0.875em;
  }

  @media (min-width: ${desktop}) {}
`;

BlogPost.propTypes = {
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

BlogPost.defaultProps = {
  excerpt: '',
};

export default BlogPost;
