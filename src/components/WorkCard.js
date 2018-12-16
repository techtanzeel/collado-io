import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SuperLink from './SuperLink';
import { mobile, tablet, desktop } from '../utils/breakpoints';
import { fakeAsbestos } from '../utils/colors';

// Related component: Card.js
const WorkCard = ({ children, data, path }) => {
  // Suboptimal workaround to get a key for the WorkPost
  // Other options would be to pass the title or a frontmatter "key" as props
  const workID = path.split('/')[2];

  return (
    <Container>
      <SuperLink href={path}>
        <Img
          fluid={data[workID].childImageSharp.fluid}
          alt={workID}
        />
        <TextContainer>
          {children}
        </TextContainer>
      </SuperLink>
    </Container>
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
        query WorkCardQuery {
          ironhack: file(relativePath: { eq: "ironhack.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          iomando: file(relativePath: { eq: "iomando.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
    render={(data) => <WorkCard data={data} {...props} />}
  />
);

const Container = styled.div`
  border: 1px solid ${fakeAsbestos}22;
  border-radius: 0.25em;
  box-shadow: ${fakeAsbestos}22 0em 0.125em 0.25em 0em;
  display: flex;
  flex-direction: column;
  min-width: 220px;
  /* min-width ~ 320px * 70vw */
  margin: 0em 0em 1.25em;
  max-width: 275px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  width: 70vw;

  &:hover, &:active {
    box-shadow: ${fakeAsbestos}22 0em 0.5em 1em 0em;
  }

  @media (min-width: ${mobile}) {
    /* flex-direction and flex-wrap change @mobile in work.js */
    min-width: none;
    margin: 0em 1em 1.5em;
  }

  @media (min-width: ${tablet}) {
    margin-bottom: 1.75em;
  }

  @media (min-width: ${desktop}) {
    margin-bottom: 2em;
  }
`;

// Unlike Card.js padding is set within the TextContainer
// because of the top image that takes the full width
const TextContainer = styled.div`
  padding: 0.75em 1.25em;

  @media (min-width: ${mobile}) {
    padding: 1em 1.5em;
  }

  @media (min-width: ${tablet}) {
    padding: 1.25em 1.75em;
  }

  @media (min-width: ${desktop}) {
    padding: 1.25em 2em;
  }
`;

WorkCard.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  path: PropTypes.string.isRequired,
};
