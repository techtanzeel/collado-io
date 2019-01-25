import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Tabs, TabList, Tab, TabPanel,
} from 'react-tabs';

import BlogPostLink from '../../components/BlogPostLink';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import styles from '../../utils/md.module.css';
import '../../utils/tabs.css';
import { BodyText } from '../../utils/theme';


const Ironhack = ({ data }) => {
  const pageCopy = data.pageCopy.edges[0].node.html;
  const ironhackBlogs = data.ironhackBlogs.edges;
  const ironhackBlogsList = (tag) => ironhackBlogs
    .filter((edge) => edge.node.frontmatter.tags.includes(tag))
    .map((edge) => (
      <BlogPostLink
        key={edge.node.id}
        date={edge.node.frontmatter.date}
        excerpt={edge.node.frontmatter.excerpt}
        path={edge.node.frontmatter.path}
        title={edge.node.frontmatter.title}
      />));

  return (
    <Layout>
      <PageHeader
        tagline="Empowering the next generation of digital creators"
        title="Ironhack"
      />
      {/* <Image
        alt="Ironhack technologies"
        fluid={IronhackCover}
      /> */}
      <div
        className={styles.md}
        dangerouslySetInnerHTML={{ __html: pageCopy }}
      />
      {/* <Tabs>
        <TabList>
          <Tab>
            <BodyText>
              {``}
            </BodyText>
          </Tab>
          <Tab>
            <BodyText>
              {``}
            </BodyText>
          </Tab>
          <Tab>
            <BodyText>
              {``}
            </BodyText>
          </Tab>
        </TabList>

        <TabPanel>
          <BodyText>
            {`Lorem Ipsum...`}
          </BodyText>
          <Image
            alt="Ironhack updates"
            fluid={IronhackProduct}
          />
          <BodyText>
            {`Lorem Ipsum...`}
          </BodyText>
          {ironhackBlogsList('update')}
        </TabPanel>
        <TabPanel>
          <BodyText>
            {`Lorem Ipsum...`}
          </BodyText>
          <Image
            alt=""
            fluid={}
          />
          {ironhackBlogsList('idea')}
        </TabPanel>
        <TabPanel>
          <BodyText>
            {`Lorem Ipsum...`}
          </BodyText>
          <Image
            alt=""
            fluid={}
          />
          {ironhackBlogsList('memoir')}
        </TabPanel>
      </Tabs> */}
    </Layout>
  );
};

const Image = styled(Img)`
  margin-bottom: 1.5em;
`;

export const query = graphql`
  {
    pageCopy: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(src)/(markdown)/(work)/(ironhack)/" } }
      limit: 1
    ) {
      edges {
        node {
          id
          html
        }
      }
    }
    ironhackBlogs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(src)/(markdown)/(blog)/" },
                frontmatter: { tags: { in: ["ironhack"] } } }
      limit: 50
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            excerpt
            path
            tags
            title
          }
        }
      }
    }

  }
`;

Ironhack.propTypes = {
  data: PropTypes.shape({
    pageCopy: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          html: PropTypes.string,
        }),
      ),
    }),
    ironhackBlogs: PropTypes.shape({
      totalCount: PropTypes.number,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            frontmatter: PropTypes.shape({
              date: PropTypes.string,
              excerpt: PropTypes.string,
              path: PropTypes.string,
              tags: PropTypes.arrayOf(PropTypes.string),
              title: PropTypes.string,
            }),
          }),
        }),
      ),
    }),
  }).isRequired,
};

export default Ironhack;
