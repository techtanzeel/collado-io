import React from 'react';
// import Img from 'gatsby-image';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Header';
// import '../../styles/tabs.css';

const pansa = () => (
  <Layout>
    <Header tagline="Cloud storage for your mind " title="pansa" />
    <p>
      Pansa is a memory-taking app. It helps you create, organize, find and
      connect memories so you don't have to worry about forgetting. Save
      anything you want to remember in Pansa and next time you want to access
      this information you'll be able to easily find it.
    </p>
    <p>
      This side-project — and this page — is currently under development and it
      will be released some time in 2019.
    </p>
    <p>
      Meanwhile you can find out more in the{' '}
      <a href="https://github.com/MarcCollado/pansa">project repository</a>.
    </p>
  </Layout>
);

export default pansa;
