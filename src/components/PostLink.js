import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  black, fakeAsbestos, turquoise, eggShell,
} from '../utils/colors';

const PostLink = ({ post }) => (
  <CardLink to={post.frontmatter.path}>
    <CardWrapper>
      <BlogPostTitle>
        {post.frontmatter.title}
      </BlogPostTitle>
      <MetaText>
        {`Published on ${post.frontmatter.date} →`}
      </MetaText>
    </CardWrapper>
  </CardLink>
);

const CardLink = styled(Link)`
  text-decoration: none;
`;

const BlogPostTitle = styled.h3`
  color: ${black};
  letter-spacing: -1px;
  margin-bottom: 0.1em;
  text-transform: uppercase;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1.4em;
  }
`;

const CardWrapper = styled.div`
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

const MetaText = styled.p`
  color: ${fakeAsbestos}88;
  font-size: 0.8em;
`;

PostLink.propTypes = {};

export default PostLink;
