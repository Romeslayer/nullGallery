import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../Card/Card.js';
import './MainDisplay.css';

export function MainDisplay({artworks, removeArtwork, saveArtwork}){
  const cards = artworks.map(art => {
    return  art.heart ? <Card art={art} key={art.id} toggle={removeArtwork} /> : <Card art={art} key={art.id} toggle={saveArtwork} />
  })

    return (
        <section className='card-display'>
          {cards}
        </section>
    )
}

MainDisplay.propTypes = {
  artworks: PropTypes.array.isRequired,
  removeArtwork: PropTypes.func,
  saveArtwork: PropTypes.func,
}
