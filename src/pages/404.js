import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { mobile } from '../utils/breakpoints';
import { Title2, BodyText, BodyLink } from '../utils/theme';


const NotFoundPage = () => (
  <Layout>
    <PageHeader
      tagline="Page Not Found"
      title="404"
    />
    <div>
      <Title2>Oh, no! Page not found 😓</Title2>
      <BodyText>Don't worry, happens to the best of us. Maybe you ended up here because...</BodyText>
      <ul>
        <li><BodyText>The page has been moved or deleted</BodyText></li>
        <li><BodyText>A mistyped URL or a broken link</BodyText></li>
        <li><BodyText>You just like 404 pages</BodyText></li>
      </ul>
      <BodyText>
        Whatever reason is yours, you can always
        {' '}
        <BodyLink href="https://twitter.com/marccollado">reach out</BodyLink>
        {' '}
        and tell me what you were looking for or just
        {' '}
        <BodyLink href="/">go back to the home page</BodyLink>
        {' '}
        and try again 🎰.
      </BodyText>
    </div>
    <StyledFix />
  </Layout>
);

// TODO: this fix is meant to push down the footer when there is not enough
// content to fill the 100 of the page vh... there must be a better way
const StyledFix = styled.div`
  @media (min-width: ${mobile}) {
    height: 15vh;
  }
`;

export default NotFoundPage;
