import React from 'react';
import './Card.css';

export function Card({ art, toggle }) {
  const button = <button className="card-button" onClick={() => toggle(art.id)}>{art.heart ? '❤️' : '🤍' }</button>

    return (
        <div className="card">
          <img className='card-image' src={art.image} alt={art.title} />
          {button}
        </div>
    )
}
