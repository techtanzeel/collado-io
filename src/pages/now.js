import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../templates/Layout';

const Now = () => {
  console.log();
  return (
    <Layout>
      <NowPage>
        <h1>
          {`Now Page`}
        </h1>
      </NowPage>
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
