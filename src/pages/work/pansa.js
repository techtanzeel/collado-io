import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import { BlogCard } from '../../components/BlogCard';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import '../../utils/tabs.css';
import { BodyText } from '../../utils/theme';

const pansa = () => (
  <Layout>
    <PageHeader tagline="Cloud storage for your mind " title="pansa" />
    <BodyText>
      Pansa is a memory-taking app. It helps you create, organize, find and
      connect memories so you don’t have to worry about forgetting. Save
      anything you want to remember in Pansa and next time you want to access
      this information you’ll be able to easily find it.
    </BodyText>
    <BodyText>
      This side-project — and this page — is currently under development and it
      will be released some time in 2019.
    </BodyText>
    <BodyText>
      Meanwhile you can find out more in the{' '}
      <a href="https://github.com/MarcCollado/pansa">project repository</a>.
    </BodyText>
  </Layout>
);

export default pansa;
