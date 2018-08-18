import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navbar from '../components/Navbar';

const HomePage = () => (
  <div className="home-page">
    <Navbar />
    <Container>
      <h2>
        {`My Story In A Few Paragraphs...`}
      </h2>
      <p>
        {`Born and raised in Barcelona. I am an Industrial Engineer, always involved with tech products and companies.`}
      </p>
      <p>
        {`In 2011, upon graduation, co-founded `}
        <Link to="/tags/iomando">
        iomando technologies
        </Link>
        {`, a startup pioneering keyless access management for mobile devices. Which in plain English means opening doors and stuff with your phone. We built a `}
        <Link to="/blog/iomando-30">
        cool product
        </Link>

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
      Before the acquisition though, in 2015, after four years committed at
        {' '}
        <a href="/tags/iomando">
iomando
        </a>
, decided to
        {' '}
        <a href="/blog/2015/stepping-down">
switch gears
        </a>
        {' '}
and pursue another passion of mine: education. Then joined the
        {' '}
        <a href="tags/ironhack">
Ironhack
        </a>
        {' '}
crew, to
        {' '}
        <a href="/blog/2016/ironhack-experience">
change the way we learn
        </a>
        {' '}
about technology. First as the Campus Manager in Barcelona, establishing the city operations from ground up, and later on as a Product Manager.
      </p>
      <p>
      As you can see, I like simple and starting things from scratch.
      </p>
      <p>
      From time to time, I sit and write some
        {' '}
        <a href="/tags/opinion">
thoughts
        </a>
        {' '}
down in the
        {' '}
        <a href="/blog/">
blog
        </a>
, but I devote almost all my free time to
        {' '}
        <a href="/tags/book">
read books
        </a>
,
        {' '}
        <a href="/blog/2018/udacity-dand">
learn new stuff
        </a>
        {' '}
and build, mostly,
        {' '}
        <a href="https://github.com/MarcCollado">
useless things
        </a>
.
      </p>
      <h2>
      Other Irrelevant Things
      </h2>
      <ul>
        <li>
Hold strong opinions on health,
          {' '}
          <a href="/tags/happiness">
happiness
          </a>
,
          {' '}
          <a href="/tags/simple">
simplicity
          </a>
          {' '}
and owning stuff.
        </li>
        <li>
Before using any product, meticulously inspect the settings menu.
        </li>
        <li>
Love things that move around: bikes, trains, planes and specially cars, but also hate the idea of owning one.
        </li>
        <li>
Tend to
          {' '}
          <a href="blog/2015/make-sense">
think small
          </a>
          {' '}
and enjoy details.
        </li>
        <li>
Know for a fact that any mindless activity gets much better by listening to a podcast.
        </li>
        <li>
Do not like to travel, I truly believe it is overrated, but I am open for discussion.
        </li>
      </ul>
      <p>
      Finally here's a neat search bar just in case you already know what you're looking for or want to find something in particular.
      </p>
      <hr />

      <Link to="/">
Go back to the homepage
      </Link>
    </Container>
  </div>
);

const Container = styled.div`
  /* border: 1px solid black; */
  margin: 0 auto;
  max-width: 800px;
  min-width: 320px;
  padding: 0 2em;
`;

export default HomePage;
