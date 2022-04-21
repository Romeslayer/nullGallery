import React from 'react'

export function Card({ art, toggle }) {
  const button = <button onClick={() => toggle(art.id)}>{art.heart ? '❤️' : '🤍' }</button>

    return (
        <div className="card">
          <img src={art.image} />
          {button}
        </div>
    )
}
