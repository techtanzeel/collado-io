import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import styles from './work.module.css';
import { BlogCard } from '../../components/BlogCard';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Header';
import '../../styles/tabs.css';

const iomando = ({ data }) => {
  const pageCopy = data.pageCopy.edges[0].node.html;
  const iomandoBlogPosts = data.iomandoBlogPosts.edges;
  const renderCards = (tag) =>
    iomandoBlogPosts
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
  // Get the images from the GraphQL query
  const iomandoCover = data.iomandoCover.childImageSharp.fluid;
  const iomandoProduct = data.iomandoProduct.childImageSharp.fluid;
  const iomandoInsights = data.iomandoInsights.childImageSharp.fluid;
  const iomandoStories = data.iomandoStories.childImageSharp.fluid;

  return (
    <Layout>
      <Header
        tagline="Keyless access management for mobile devices"
        title="iomando"
      />
      <Img
        className={styles.image}
        alt="iomando technologies"
        fluid={iomandoCover}
      />
      <div dangerouslySetInnerHTML={{ __html: pageCopy }} />
      <Tabs>
        <TabList>
          <Tab>
            <p>Product releases</p>
          </Tab>
          <Tab>
            <p>Industry insights</p>
          </Tab>
          <Tab>
            <p>iomando stories</p>
          </Tab>
        </TabList>

        <TabPanel>
          <p>
            At iomando, we cared about our product and our users' experience
            beyond what most would consider unreasonable. Even in the early
            days, we understood that investing in having the best product would
            eventually become a unique asset and the enabler of a thriving
            business.
          </p>
          <Img
            className={styles.image}
            alt="iomando updates"
            fluid={iomandoProduct}
          />
          <p>
            Here is a recollection of all the release notes and product updates.
            Right from the very first 1.0, minor .1s, up to the latest 3.0, upon
            which the company was acquired.
          </p>
          {renderCards('update')}
        </TabPanel>
        <TabPanel>
          <p>
            Great products arise around user pains. Curiously, iomando was —
            unintentionally — designed the other way around. We built a really
            cool product, but all of a sudden, we found ourselves with an
            amazing piece of technology in the midst of a market we knew nothing
            about.
          </p>
          <Img
            className={styles.image}
            alt="iomando insights"
            fluid={iomandoInsights}
          />
          <p>
            Here is a recollection of posts that uncovers a naive journey of
            discovery, trying to convince the opaque, hardware-based
            accessibility management market, that software was the new thing.
          </p>
          {renderCards('idea')}
        </TabPanel>
        <TabPanel>
          <p>
            {`iomando was also the first company I co-founded, right after graduating from college. Back then I was only 24 and barely knew what a P&L was. Besides developing a great product, iomando has taught me a far more valuable lesson: how to build a sustainable business.`}
          </p>
          <Img
            className={styles.image}
            alt="iomando stories"
            fluid={iomandoStories}
          />
          <p>
            {`Here's a recollection of stories, decisions, but most important, some the lessons learned along the way on how to manage and lead a startup from zero to acquisition.`}
          </p>
          {renderCards('memoir')}
        </TabPanel>
      </Tabs>
    </Layout>
  );
};

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
    iomandoBlogPosts: allMarkdownRemark(
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
            id: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired
          })
        })
      )
    }),
    iomandoBlogPosts: PropTypes.shape({
      totalCount: PropTypes.number,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
              excerpt: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
              tags: PropTypes.arrayOf(PropTypes.string).isRequired,
              title: PropTypes.string.isRequired
            })
          })
        })
      )
    }),
    iomandoCover: PropTypes.object.isRequired,
    iomandoProduct: PropTypes.object.isRequired,
    iomandoInsights: PropTypes.object.isRequired,
    iomandoStories: PropTypes.object.isRequired
  }).isRequired
};

export default iomando;
