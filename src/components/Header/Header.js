import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import headerBackground from "../../assets/header-bg.png"
export const Header = (props) => {

  let homeButton = (props.home ? '' : <Link to="/home"><button className="home-button">home</button></Link>)

    return (
        <header>
        <div className="header-background">
          <img src={headerBackground} />
        </div>
        <h1 className="title">null Gallery</h1>
        {homeButton}
        </header>
    )
}
