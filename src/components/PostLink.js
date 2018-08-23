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
  margin-bottom: 0em;
  text-transform: uppercase;
`;

const CardWrapper = styled.div`
  border-left: 0.5em solid ${eggShell};
  margin-bottom: 1em;
  padding-left: 0.8em;

  &:hover {
    border-left: 0.5em solid ${turquoise};
  }

  &:hover ${BlogPostTitle} {
    color: ${turquoise};
  }
`;

const MetaText = styled.p`
  color: ${fakeAsbestos};
  font-size: 0.8em;
  opacity: 0.5;
`;

PostLink.propTypes = {};

export default PostLink;
