import React from 'react';
import PropTypes from 'prop-types';
export function ErrorPage({ error }) {
    return (
      <>
        <h2>Sorry there was an error.</h2>
        <p>{error.message}</p>
      </>
    )
}

ErrorPage.propTypes= {
  error: PropTypes.object.isRequired
}
