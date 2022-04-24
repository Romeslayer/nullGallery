import React from 'react'
import './Header.css'
import headerBackground from "../../assets/header-bg.png"
export const Header = (props) => {

    return (
        <header>
        <div className="header-background">
          <img src={headerBackground} />
        </div>
        <h1 className="title">null Gallery</h1>
        </header>
    )
}
