import React from 'react';

import './Footer.css';

export const Footer = ({gallery}) => {
  const miniCards = gallery.map(art => {
    return (
      <img className='mini-img' src={art.image} key={art.id}/>
    )
  })
    return (
        <footer>
        <h2>Footer</h2>
        {miniCards}
        </footer>
    )
}
