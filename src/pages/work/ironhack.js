import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import styles from './work.module.css';
import { BlogCard } from '../../components/BlogCard';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import '../../utils/tabs.css';

const Ironhack = ({ data }) => {
  const pageCopy = data.pageCopy.edges[0].node.html;
  const ironhackBlogPosts = data.ironhackBlogPosts.edges;
  const ironhackBlogsList = (tag) =>
    ironhackBlogPosts
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
  const ironhackCover = data.ironhackCover.childImageSharp.fluid;
  const ironhackInsights = data.ironhackInsights.childImageSharp.fluid;
  const ironhackStories = data.ironhackStories.childImageSharp.fluid;

  return (
    <Layout>
      <PageHeader
        tagline="Empowering the next generation of digital creators"
        title="Ironhack"
      />
      <Img
        className={styles.image}
        alt="Ironhack technologies"
        fluid={ironhackCover}
      />
      <div dangerouslySetInnerHTML={{ __html: pageCopy }} />
      <Tabs>
        <TabList>
          <Tab>
            <p>Industry insights</p>
          </Tab>
          <Tab>
            <p>Ironhack stories</p>
          </Tab>
        </TabList>

        <TabPanel>
          <p>
            Education — as we know it — is changing, for the better. At Ironhack
            I had a unique opportunity to be part and lead this revolution,
            using technology to create the tools for our students to boost their
            careers and become digital creators themselves.
          </p>
          <Img
            className={styles.image}
            alt="Ironhack insights"
            fluid={ironhackInsights}
          />
          <p>
            Thousands of graduates across eleven locations have taught me a lot
            about education and how our students ultimately learn. Here is a
            recollection of posts around educational products, methodologies,
            what has worked (what has not...) and the lessons we have learned
            along the way.
          </p>
          {ironhackBlogsList('idea')}
        </TabPanel>
        <TabPanel>
          <p>
            When I joined, early 2015, Ironhack looked like nothing it has
            become today. We were barely ten of us and the idea of changing
            people lives in just two months sounded more like a wild dream
            rather than an attainable reality.
          </p>
          <Img
            className={styles.image}
            alt="Ironhack stories"
            fluid={ironhackStories}
          />
          <p>
            After more than four years, I have accumulated thousands of stories,
            raging from being a student myself to scaling campuses operations.
            Here is a recollection of posts that distill my story at Ironhack
            from a more confidential, idiosyncratic perspective.
          </p>
          {ironhackBlogsList('memoir')}
        </TabPanel>
      </Tabs>
    </Layout>
  );
};

export const query = graphql`
  {
    pageCopy: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(src)/(markdown)/(work)/(ironhack)/" }
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
    ironhackBlogPosts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(src)/(markdown)/(blog)/" }
        frontmatter: { tags: { in: ["ironhack"] } }
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
    ironhackCover: file(relativePath: { eq: "ironhack-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ironhackInsights: file(relativePath: { eq: "ironhack-insights.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ironhackStories: file(relativePath: { eq: "ironhack-barcelona.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
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
          id: PropTypes.string.isRequired,
          html: PropTypes.string.isRequired
        })
      )
    }).isRequired,
    ironhackBlogPosts: PropTypes.shape({
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
    }).isRequired,
    ironhackCover: PropTypes.object.isRequired,
    ironhackInsights: PropTypes.object.isRequired,
    ironhackStories: PropTypes.object.isRequired
  }).isRequired
};

export default Ironhack;
