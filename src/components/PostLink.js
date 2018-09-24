import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TagList from './TagList';

import {
  mobile, tablet, desktop,
} from '../utils/breakpoints';
import { fakeAsbestos, turquoise } from '../utils/colors';
import { Title2, BodyText, MetaText } from '../utils/theme';

const PostLink = ({
  date, excerpt, path, tags, title,
}) => (
  <Container>
    <CardLink to={path}>
      <BlogPostTitle>
        {title}
      </BlogPostTitle>
    </CardLink>

    <BodyText>
      {excerpt}
    </BodyText>

    <Published>
      {`Published on ${date}`}
    </Published>

    {/* <TagList
      tags={tags}
    /> */}
  </Container>
);

const Container = styled.div`
  border: 1px solid ${fakeAsbestos}22;
  border-radius: 0.25em;
  box-shadow: ${fakeAsbestos}22 0px 1px 4px 0px;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25em;
  padding: 1em 1.25em;

  @media (min-width: ${mobile}) {
    margin-bottom: 1.5em;
    padding: 1em 1.5em;
  }

  @media (min-width: ${tablet}) {
    margin-bottom: 1.75em;
    padding: 1.25em 1.75em;
  }

  @media (min-width: ${desktop}) {
    margin-bottom: 2em;
    padding: 1.25em 2em;
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
`;

const BlogPostTitle = styled(Title2)`
  margin-top: 0.5em;
  transition: color 0.3s ease;

  &:hover {
    color: ${turquoise};
  }
`;

const Published = styled(MetaText)`
  margin-bottom: 0.5em;
`;

PostLink.propTypes = {
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  path: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default PostLink;
