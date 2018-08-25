import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../templates/Layout';


const Home = () => {
  console.log();
  return (
    <Layout>
      <HomePage>
        <h2>
          {`My Story In A Few Paragraphs...`}
        </h2>
        <p>
          Born and raised in Barcelona. I am an Industrial Engineer, always involved with tech products and companies.
        </p>
        <p>
          In 2011, upon graduation, co-founded iomando technologies, a startup pioneering keyless access management for mobile devices. Which in plain English means opening doors and stuff with your phone. We built a cool product and ended up acquired by
          {' '}
          <a href="https://citibox.com/">
          Citibox
          </a>
          {' '}
          in 2017.
        </p>

      </HomePage>
    </Layout>
  );
};

const HomePage = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 2em;
`;

Home.propTypes = {};

export default Home;
