import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export const Footer = ({gallery}) => {
  const miniCards = gallery.map(art => {
    return (
      <img className='mini-img' src={art.image} key={art.id} alt={`${art.title}`}/>
    )
  })
    return (
        <footer>
        <Link to='/gallery'><button className="gallery-button">Gallery</button></Link>
        <div className="mini-img-display">
          {miniCards}
        </div>
        </footer>
    )
}
