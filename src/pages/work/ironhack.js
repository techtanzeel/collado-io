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

const Ironhack = ({ data }) => {
  const pageCopy = data.pageCopy.edges[0].node.html;
  const ironhackBlogs = data.ironhackBlogs.edges;
  const ironhackBlogsList = (tag) =>
    ironhackBlogs
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

  const ironhackCover = data.ironhackCover.childImageSharp.fluid;
  const ironhackInsights = data.ironhackInsights.childImageSharp.fluid;
  const ironhackStories = data.ironhackStories.childImageSharp.fluid;

  return (
    <Layout>
      <PageHeader
        tagline="Empowering the next generation of digital creators"
        title="Ironhack"
      />
      <Image alt="Ironhack technologies" fluid={ironhackCover} />
      <div
        className={styles.md}
        dangerouslySetInnerHTML={{ __html: pageCopy }}
      />
      <Tabs>
        <TabList>
          <Tab>
            <BodyText>Industry insights</BodyText>
          </Tab>
          <Tab>
            <BodyText>Ironhack stories</BodyText>
          </Tab>
        </TabList>

        <TabPanel>
          <BodyText>
            Education — as we know it — is changing, for the better. At Ironhack
            I had a unique opportunity to be part and lead this revolution,
            using technology to create the tools for our students to boost their
            careers and become digital creators themselves.
          </BodyText>
          <Image alt="Ironhack insights" fluid={ironhackInsights} />
          <BodyText>
            Thousands of graduates across eleven locations have taught me a lot
            about education and how our students ultimately learn. Here is a
            recollection of posts around educational products, methodologies,
            what has worked (what has not...) and the lessons we have learned
            along the way.
          </BodyText>
          {ironhackBlogsList('idea')}
        </TabPanel>
        <TabPanel>
          <BodyText>
            When I joined, early 2015, Ironhack looked like nothing it has
            become today. We were barely ten of us and the idea of changing
            people lives in just two months sounded more like a wild dream
            rather than an attainable reality.
          </BodyText>
          <Image alt="Ironhack stories" fluid={ironhackStories} />
          <BodyText>
            After more than four years, I have accumulated thousands of stories,
            raging from being a student myself to scaling campuses operations.
            Here is a recollection of posts that distill my story at Ironhack
            from a more confidential, idiosyncratic perspective.
          </BodyText>
          {ironhackBlogsList('memoir')}
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
    ironhackBlogs: allMarkdownRemark(
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
          id: PropTypes.string,
          html: PropTypes.string
        })
      )
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
              title: PropTypes.string
            })
          })
        })
      )
    }),
    ironhackCover: PropTypes.object,
    ironhackInsights: PropTypes.object,
    ironhackStories: PropTypes.object
  }).isRequired
};

export default Ironhack;
