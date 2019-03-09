import React from 'react';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Header';

const NotFoundPage = () => (
  <Layout>
    <Header tagline="Page Not Found" title="404" />
    <div>
      <h2>Oh, no! Page not found 😓</h2>
      <p>
        Don't worry, happens to the best of us. Maybe you ended up here
        because...
      </p>
      <ul>
        <li>
          <p>The page has been moved or deleted</p>
        </li>
        <li>
          <p>A mistyped URL or a broken link</p>
        </li>
        <li>
          <p>You just like 404 pages</p>
        </li>
      </ul>
      <p>
        Whatever reason is yours, you can always{' '}
        <a href="https://twitter.com/marccollado">reach out</a> and tell me what
        you were looking for or just <a href="/">go back to the home page</a>{' '}
        and try again 🎰.
      </p>
    </div>
    <div />
  </Layout>
);

export default NotFoundPage;
