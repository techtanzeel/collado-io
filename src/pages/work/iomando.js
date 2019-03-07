import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import { BlogCard } from '../../components/BlogCard';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import styles from '../../utils/md.module.css';
import '../../utils/tabs.css';
import { BodyText } from '../../utils/theme';

const iomando = ({ data }) => {
  const pageCopy = data.pageCopy.edges[0].node.html;
  const iomandoBlogs = data.iomandoBlogs.edges;
  const iomandoBlogsList = (tag) =>
    iomandoBlogs
      .filter((edge) => edge.node.frontmatter.tags.includes(tag))
      .map((edge) => (
        <BlogCard
          key={edge.node.id}
          date={edge.node.frontmatter.date}
          excerpt={edge.node.frontmatter.excerpt}
          path={edge.node.frontmatter.path}
          title={edge.node.frontmatter.title}
        />
      ));

  const iomandoCover = data.iomandoCover.childImageSharp.fluid;
  const iomandoProduct = data.iomandoProduct.childImageSharp.fluid;
  const iomandoInsights = data.iomandoInsights.childImageSharp.fluid;
  const iomandoStories = data.iomandoStories.childImageSharp.fluid;

  return (
    <Layout>
      <PageHeader
        tagline="Keyless access management for mobile devices"
        title="iomando"
      />
      <Image alt="iomando technologies" fluid={iomandoCover} />
      <div
        className={styles.md}
        dangerouslySetInnerHTML={{ __html: pageCopy }}
      />
      <Tabs>
        <TabList>
          <Tab>
            <BodyText>Product releases</BodyText>
          </Tab>
          <Tab>
            <BodyText>Industry insights</BodyText>
          </Tab>
          <Tab>
            <BodyText>iomando stories</BodyText>
          </Tab>
        </TabList>

        <TabPanel>
          <BodyText>
            At iomando, we cared about our product and our users' experience
            beyond what most would consider unreasonable. Even in the early
            days, we understood that investing in having the best product would
            eventually become a unique asset and the enabler of a thriving
            business.
          </BodyText>
          <Image alt="iomando updates" fluid={iomandoProduct} />
          <BodyText>
            Here is a recollection of all the release notes and product updates.
            Right from the very first 1.0, minor .1s, up to the latest 3.0, upon
            which the company was acquired.
          </BodyText>
          {iomandoBlogsList('update')}
        </TabPanel>
        <TabPanel>
          <BodyText>
            Great products arise around user pains. Curiously, iomando was —
            unintentionally — designed the other way around. We built a really
            cool product, but all of a sudden, we found ourselves with an
            amazing piece of technology in the midst of a market we knew nothing
            about.
          </BodyText>
          <Image alt="iomando insights" fluid={iomandoInsights} />
          <BodyText>
            Here is a recollection of posts that uncovers a naive journey of
            discovery, trying to convince the opaque, hardware-based
            accessibility management market, that software was the new thing.
          </BodyText>
          {iomandoBlogsList('idea')}
        </TabPanel>
        <TabPanel>
          <BodyText>
            {`iomando was also the first company I co-founded, right after graduating from college. Back then I was only 24 and barely knew what a P&L was. Besides developing a great product, iomando has taught me a far more valuable lesson: how to build a sustainable business.`}
          </BodyText>
          <Image alt="iomando stories" fluid={iomandoStories} />
          <BodyText>
            {`Here's a recollection of stories, decisions, but most important, some the lessons learned along the way on how to manage and lead a startup from zero to acquisition.`}
          </BodyText>
          {iomandoBlogsList('memoir')}
        </TabPanel>
      </Tabs>
    </Layout>
  );
};

const Image = styled(Img)`
  margin-bottom: 1.5em;
`;

export const query = graphql`
  {
    pageCopy: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(src)/(markdown)/(work)/(iomando)/" }
      }
      limit: 1
    ) {
      edges {
        node {
          id
          html
        }
      }
    }
    iomandoBlogs: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(src)/(markdown)/(blog)/" }
        frontmatter: { tags: { in: ["iomando"] } }
      }
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
    iomandoCover: file(relativePath: { eq: "iomando-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iomandoProduct: file(relativePath: { eq: "iomando-updates.jpg" }) {
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
    pageCopy: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            html: PropTypes.string
          })
        })
      )
    }),
    iomandoBlogs: PropTypes.shape({
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
              title: PropTypes.string
            })
          })
        })
      )
    }),
    iomandoCover: PropTypes.object,
    iomandoProduct: PropTypes.object,
    iomandoInsights: PropTypes.object,
    iomandoStories: PropTypes.object
  }).isRequired
};

export default iomando;
