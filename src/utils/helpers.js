import React from 'react';
import { BlogCard } from '../components/BlogCard';

/*
 * @renderBlogCards: generates a tag-filtered array of BlogCard
 * @params:
 *   - data: object returned from the allMarkdownRemark GraphQL query
 *   - tag: string with the tag filter
 * @returns: array of tag-filtered BlogCards
 */

export function renderBlogCards(data, tag) {
  return data
    .filter((edge) => edge.node.frontmatter.tags.includes(tag))
    .map((edge) => (
      <BlogCard
        key={edge.node.id}
        path={edge.node.frontmatter.path}
        title={edge.node.frontmatter.title}
        excerpt={edge.node.frontmatter.excerpt}
        date={edge.node.frontmatter.date}
      />
    ));
}
