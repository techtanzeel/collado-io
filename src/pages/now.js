import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PageHeader from '../components/PageHeader';
import Layout from '../templates/Layout';

const Now = () => {
  console.log();
  return (
    <Layout>
      <PageHeader
        title="Now"
        tagline="What I'm Up To"
      />
    </Layout>
  );
};

const NowPage = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 2em;
`;

Now.propTypes = {};

export default Now;
