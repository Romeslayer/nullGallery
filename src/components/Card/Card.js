import React from 'react';
import PropTypes from 'prop-types';
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

Card.propType = {
  art: PropTypes.object.isRequired,
  toogle: PropTypes.func.isRequired
}
