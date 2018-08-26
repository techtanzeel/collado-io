import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../templates/Layout';
import {
  mobile, tablet, desktop,
} from '../utils/breakpoints';
import {
  black, fakeAsbestos, turquoise, eggShell,
} from '../utils/colors';
import {
  Title1, Title2, Title3, BodyText, BodyLink, MetaText,
} from '../utils/theme';

const Home = ({ data }) => {
  const marcImg = data.file.childImageSharp.resolutions.src;

  return (
    <Layout>
      <HomePage>
        <TitleWrap>
          <Title>
              Marc Collado
          </Title>
          <TagLine>
            Singularly curious
          </TagLine>
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
          <BodyLink href="/work/iomando">
            iomando technologies
          </BodyLink>
          , a startup pioneering keyless access management for mobile devices. Which in plain English means opening doors and stuff with your phone. We built a
          {' '}
          <BodyLink href="/work/iomando/product">
            cool product
          </BodyLink>
          {' '}
          and ended up acquired by
          {' '}
          <BodyLink href="https://citibox.com/">
            Citibox
          </BodyLink>
          {' '}
          in 2017.
        </p>
        <p>
          In 2015, decided to
          {' '}
          <BodyLink href="/blog/2015/stepping-down">
            switch gears
          </BodyLink>
          {' '}
          and pursue another passion of mine:
          {' '}
          <BodyLink href="/tags/education">
            education
          </BodyLink>
          . Then joined
          {' '}
          <BodyLink href="/work/ironhack">
            Ironhack
          </BodyLink>
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
            <BodyLink href="/tags/opinion">
              strong opinions
            </BodyLink>
            {' '}
             on
            {' '}
            <BodyLink href="/tags/health">
              health
            </BodyLink>
            ,
            {' '}
            <BodyLink href="/tags/happiness">
              happiness
            </BodyLink>
            ,
            {' '}
            <BodyLink href="/tags/simple">
              simple living
            </BodyLink>
            {' '}
            and
            {' '}
            <BodyLink href="/tags/product">
              products
            </BodyLink>
            {' '}
             in general.
          </li>
          <li>
            <BodyLink href="/tags/coding">
              Engineering
            </BodyLink>
            ,
            {' '}
            <BodyLink href="/tags/craft">
              craftsmanship
            </BodyLink>
            ,
            {' '}
            <BodyLink href="/tags/history">
              history
            </BodyLink>
            , and
            {' '}
            <BodyLink href="/tags/physics">
              physics
            </BodyLink>
            {' '}
            have all my attention.
          </li>
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
          <li>
            Love things that
            {' '}
            <BodyLink href="/tags/transport">
              move around
            </BodyLink>
            : bikes, cars, trains, planes, you name it.
          </li>
          <li>
            Know for a fact that any mindless activity gets much better by listening to a
            {' '}
            <BodyLink href="/tags/podcast">
              podcast
            </BodyLink>
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
`;

const Title = styled(Title1)`
  margin: 0em auto;
  padding: 0em 0.5em;
  text-align: center;
`;

const TagLine = styled(MetaText)`
  margin: 0em auto;
  text-align: center;
  text-transform: uppercase;
`;

const Subtitle = styled(Title3)`
  margin-top: 0.5em;
`;

const Marc = styled.img`
  margin: 0em auto;
  max-width: 275px;
  width: 75%;

  @media (min-width: ${mobile}) {
    max-width: 325px;
  }

  @media (min-width: ${tablet}) {
    max-width: 375px;
  }
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
