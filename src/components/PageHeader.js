import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ tagline, title }) => (
  <div className="flex header">
    <h1 style={{ margin: 0, padding: '0em 0.5em' }}>{title}</h1>
    <p className="meta tagline" style={{ margin: '0.25em 0' }}>
      {tagline}
    </p>
  </div>
);

PageHeader.propTypes = {
  tagline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PageHeader;
