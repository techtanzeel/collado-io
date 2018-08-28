import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PostTags from './PostTags';

import {
  mobile, tablet,
} from '../utils/breakpoints';
import {
  fakeAsbestos, turquoise,
} from '../utils/colors';
import {
  Title2, MetaText,
} from '../utils/theme';

const PostLink = ({ post }) => (
  <Container>
    <CardLink to={post.frontmatter.path}>
      <BlogPostTitle>
        {post.frontmatter.title}
      </BlogPostTitle>
    </CardLink>

    <Excerpt>
      {post.frontmatter.excerpt}
    </Excerpt>

    <Published>
      {`Published on ${post.frontmatter.date}`}
    </Published>

    <PostTags
      tags={post.frontmatter.tags}
    />
  </Container>
);

const Container = styled.div`
  border-left: 0.3em solid ${fakeAsbestos}44;
  margin-bottom: 2em;
  padding-left: 0.8em;
  transition: border-left 0.3s ease;
`;

const CardLink = styled(Link)`
  text-decoration: none;
`;

const BlogPostTitle = styled(Title2)`
  transition: color 0.3s ease;

  &:hover {
    color: ${turquoise};
  }

  &:hover ${Container} {
    border-left: 0.3em solid ${turquoise};
  }
`;

const Excerpt = styled(MetaText)`

`;


const Published = styled(MetaText)`
  margin-bottom: 0.5em;
`;

PostLink.propTypes = {};

export default PostLink;
