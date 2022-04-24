import React from 'react'

export function ErrorPage({ error }) {
    return (
      <>
        <h2>Sorry there was an error.</h2>
        <p>{error.message}</p>
      </>
    )
}
