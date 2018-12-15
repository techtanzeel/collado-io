import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import WorkCard from './WorkCard';
import SuperLink from './SuperLink';
import { mobile, tablet, desktop } from '../utils/breakpoints';
import { Title2, BodyText } from '../utils/theme';

const WorkPost = ({
  excerpt, path, title,
}) => (
  <WorkCard>
    <SuperLink href={path}>
      <WorkPostTitle>
        {title}
      </WorkPostTitle>
      <Excerpt>
        {excerpt}
      </Excerpt>
    </SuperLink>
  </WorkCard>
);

const WorkPostTitle = styled(Title2)`
  margin: 0.5em 0em;
`;

const Excerpt = styled(BodyText)`
  font-size: 0.875em;
  /* reduce font-size by 0.125em */
  margin: 0.5em 0em;

  @media (min-width: ${mobile}) {}

  @media (min-width: ${tablet}) {
    font-size: 1em;
  }

  @media (min-width: ${desktop}) {}
`;

WorkPost.propTypes = {
  excerpt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default WorkPost;
