import React from 'react';
import { Card } from '../Card/Card.js';
import './MainDisplay.css';

export function MainDisplay({artworks, removeArtwork, saveArtwork}){
  const cards = artworks.map(art => {
    return  art.heart ? <Card art={art} key={art.id} toggle={removeArtwork} /> : <Card art={art} key={art.id} toggle={saveArtwork} />
  })

    return (
        <div>
          {cards}
        </div>
    )
}
