import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  fakeAsbestos, turquoise,
} from '../utils/colors';
import {
  Title3, MetaText,
} from '../utils/theme';

const PostLink = ({ post }) => (
  <CardLink to={post.frontmatter.path}>
    <Container>
      <BlogPostTitle>
        {post.frontmatter.title}
      </BlogPostTitle>
      <MetaText>
        {`Published on ${post.frontmatter.date} →`}
      </MetaText>
    </Container>
  </CardLink>
);

const CardLink = styled(Link)`
  text-decoration: none;
`;

const BlogPostTitle = styled(Title3)`
  margin-bottom: 0.1em;
  transition: color 0.3s ease;
`;

const Container = styled.div`
  border-left: 0.5em solid ${fakeAsbestos}44;
  padding-left: 0.8em;
  transition: border-left 0.3s ease;

  &:hover {
    border-left: 0.5em solid ${turquoise};
  }

  &:hover ${BlogPostTitle} {
    color: ${turquoise};
  }
`;

PostLink.propTypes = {};

export default PostLink;
