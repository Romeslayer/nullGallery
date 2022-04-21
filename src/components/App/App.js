import React, { Fragment } from 'react';
import { Header } from '../Header/Header.js';
import { Redirect, Switch, Route } from 'react-router-dom';
import { cleanArtResponse } from '../../utilities.js';
import { MainDisplay } from '../MainDisplay/MainDisplay.js'
import './App.css';

import { fetchArtworks } from '../../apiCalls.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gallery: [],
      artworks: []
    }
  }

 createArtworks() {
   fetchArtworks()
    .then(data => {
      let cleanedResponse = cleanArtResponse(data);
      this.setState({artworks: cleanedResponse.artworks});
    })
    .catch( err => {
      console.log(err)
    })
 }

 saveArtwork = (id) => {
   console.log(this.state)
   let currentArtwork = this.state.artworks.find(art => art.id === id);
   this.setState({gallery: [...this.state.gallery, currentArtwork]});
 }

 removeArtwork = (id) => {
   let newGallery = this.state.gallery.filter(art => art.id !== id);
   this.setState({gallery: newGallery});
 }

componentDidMount() {
  this.createArtworks()
}

  render() {
    return (
      <main className="App">
      <Redirect exact from='/' to='/home' />
      <Switch>
        <Route
          exact path='/home'
          render={()=> {
            return (
              <>
              <Header />
              {this.state.artworks.length ? <MainDisplay artworks={this.state.artworks} saveArtwork={this.saveArtwork} removeArtwork={this.removeArtwork} /> : '' }
              </>
            )
          }} />
      </Switch>
      </main>
    );
  }

}

export default App;
