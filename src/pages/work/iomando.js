import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Tabs, TabList, Tab, TabPanel,
} from 'react-tabs';

import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import '../../utils/tabs.css';
import { BodyText } from '../../utils/theme';

const iomando = ({ data }) => {
  const iomandoBlogs = data.iomandoBlogs.edges;
  const iomandoBlogsList = (tag) => iomandoBlogs
    .filter((edge) => edge.node.frontmatter.tags.includes(tag))
    .map((edge) => (
      <BlogPost
        key={edge.node.id}
        date={edge.node.frontmatter.date}
        excerpt={edge.node.frontmatter.excerpt}
        path={edge.node.frontmatter.path}
        title={edge.node.frontmatter.title}
      />));
  const iomandoCover = data.iomandoCover.childImageSharp.fluid;
  const iomandoUpdates = data.iomandoUpdates.childImageSharp.fluid;
  const iomandoInsights = data.iomandoInsights.childImageSharp.fluid;
  const iomandoStories = data.iomandoStories.childImageSharp.fluid;

  return (
    <Layout>
      <PageHeader
        tagline="Keyless access management for mobile devices"
        title="iomando technologies"
      />
      <Img
        alt="iomando technologies"
        fluid={iomandoCover}
      />
      <BodyText>
        {`In 2011 iomando pioneered keyless access management for mobile devices. Which in plain English means opening doors and other stuff with your phone. Late in 2017, the company ended up acquired by Citibox, that integrated iomando's technology into their core product — the smart mailboxes.`}
      </BodyText>
      <Tabs>
        <TabList>
          <Tab>
            <BodyText>Product updates</BodyText>
          </Tab>
          <Tab>
            <BodyText>iomando' insights</BodyText>
          </Tab>
          <Tab>
            <BodyText>iomando' stories</BodyText>
          </Tab>
        </TabList>

        <TabPanel>
          <BodyText>A recollection of all the release notes, from the very first v1.0</BodyText>
          <Img
            alt="iomando updates"
            fluid={iomandoUpdates}
          />
          {iomandoBlogsList('update')}
        </TabPanel>
        <TabPanel>
          <p>insights</p>
          <Img
            alt="iomando insights"
            fluid={iomandoInsights}
          />
          {iomandoBlogsList('idea')}
        </TabPanel>
        <TabPanel>
          <p>stories</p>
          <Img
            alt="iomando stories"
            fluid={iomandoStories}
          />
          {iomandoBlogsList('memoir')}
        </TabPanel>
      </Tabs>
    </Layout>
  );
};

export const query = graphql`
  {
    iomandoBlogs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(src)/(markdown)/(blog)/" }, frontmatter: { tags: { in: ["iomando"] } } }
      limit: 100
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
    iomandoCover: file(relativePath: { eq: "iomando-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iomandoUpdates: file(relativePath: { eq: "iomando-updates.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iomandoInsights: file(relativePath: { eq: "iomando-insights.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iomandoStories: file(relativePath: { eq: "iomando-stories.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

iomando.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          html: PropTypes.string,
          frontmatter: PropTypes.shape({
            date: PropTypes.string,
            excerpt: PropTypes.string,
            path: PropTypes.string,
            title: PropTypes.string,
          }),
        }),
      ),
    }),
  }).isRequired,
};

export default iomando;
