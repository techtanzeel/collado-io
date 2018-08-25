import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../templates/Layout';
import {
  black, fakeAsbestos, turquoise, eggShell,
} from '../utils/colors';

const Home = ({ data }) => {
  const marcImg = data.file.childImageSharp.resolutions.src;

  return (
    <Layout>
      <HomePage>
        <TitleWrap>
          <Title>
              Marc Collado
          </Title>
          <MetaText>
            Singularly curious
          </MetaText>
          <Marc src={marcImg} alt="Marc Collado" />
        </TitleWrap>

        <Subtitle>
          My Story In A Few Paragraphs
        </Subtitle>

        <p>
          Born and raised in Barcelona. I am an Industrial Engineer, always involved with tech products and companies.
        </p>
        <p>
          In 2011, upon graduation, co-founded
          {' '}
          <a href="/work/iomando">
            iomando technologies
          </a>
          , a startup pioneering keyless access management for mobile devices. Which in plain English means opening doors and stuff with your phone. We built a
          {' '}
          <a href="/work/iomando/product">
            cool product
          </a>
          {' '}
          and ended up acquired by
          {' '}
          <a href="https://citibox.com/">
            Citibox
          </a>
          {' '}
          in 2017.
        </p>
        <p>
          In 2015, decided to
          {' '}
          <a href="/blog/2015/stepping-down">
            switch gears
          </a>
          {' '}
          and pursue another passion of mine:
          {' '}
          <a href="/tags/education">
            education
          </a>
          . Then joined
          {' '}
          <a href="/work/ironhack">
            Ironhack
          </a>
          {' '}
          Ironhack, to change the way we learn about technology. First as the GM in Barcelona, establishing the city operations from the ground up, and later on as Product Manager.
        </p>
        <p>
          As you can see, I like simple and starting things from scratch.
        </p>

        <Subtitle>
          Other Irrelevant Things
        </Subtitle>

        <ul>
          <li>
            Hold
            {' '}
            <a href="/tags/opinion">
              strong opinions
            </a>
            {' '}
             on
            {' '}
            <a href="/tags/health">
              health
            </a>
            ,
            {' '}
            <a href="/tags/happiness">
              happiness
            </a>
            ,
            {' '}
            <a href="/tags/simple">
              simple living
            </a>
            {' '}
            and
            {' '}
            <a href="/tags/product">
              products
            </a>
            {' '}
             in general.
          </li>
          <li>
            <a href="/tags/coding">
              Engineering
            </a>
            ,
            {' '}
            <a href="/tags/craft">
              craftsmanship
            </a>
            ,
            {' '}
            <a href="/tags/history">
              history
            </a>
            , and
            {' '}
            <a href="/tags/physics">
              physics
            </a>
            {' '}
            have all my attention.
          </li>
          <ul>
            <li>
              Couldn't agree more with idea that
              {' '}
              <i>
                "we don’t see things as they are"
              </i>
              {' '}
              that we actually
              {' '}
              <i>
                "see them as we are"
              </i>
            .
            </li>
          </ul>
          <li>
            Love things that
            {' '}
            <a href="/tags/transport">
              move around
            </a>
            : bikes, cars, trains, planes, you name it.
          </li>
          <li>
            Know for a fact that any mindless activity gets much better by listening to a
            {' '}
            <a href="/tags/podcast">
              podcast
            </a>
            .
          </li>
          <li>
            Do not like to travel, I truly believe it is overrated, but I'd definitely go for a tour around the world just to see amazing factories.
          </li>
        </ul>
      </HomePage>
    </Layout>
  );
};

const HomePage = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 2em;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  box-shadow: inset 0em -0.6em 0em ${eggShell};
  color: ${black};
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0em auto;
  padding: 0em 0.5em;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 576px) {
    font-size: 2.2em;
  }

  @media (min-width: 768px) {
    font-size: 2.4em;
  }
`;

const MetaText = styled.p`
  color: ${fakeAsbestos}88;
  font-size: 0.8em;
  margin: 0em auto;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 576px) {
    font-size: 0.9em;
  }

  @media (min-width: 768px) {
    font-size: 1em;
  }
`;

const Marc = styled.img`
  margin: 0em auto;
  max-width: 275px;
  width: 75%;

  @media (min-width: 576px) {
    max-width: 325px;
  }

  @media (min-width: 768px) {
    max-width: 375px;
  }
`;

const Subtitle = styled.h2`
  color: ${black};
  font-weight: 700;
  letter-spacing: -1px;
  margin-top: 1em;
  text-transform: uppercase;
`;

export const imgQuery = graphql`
  query imgQuery {
    file(relativePath: { eq: "marc.jpg" }) {
      childImageSharp {
        resolutions {
          src
        }
      }
    }
  }
`;

Home.propTypes = {};

export default Home;
