import React, { Fragment } from 'react';
import { Header } from '../Header/Header.js';
import { Redirect, Switch, Route } from 'react-router-dom';
import { cleanResponse, cleanArtworks } from '../../utilities.js';
import { MainDisplay } from '../MainDisplay/MainDisplay.js';
import { Footer } from '../Footer/Footer.js';
import './App.css';

import { fetchArtworks, fetchArtDetails } from '../../apiCalls.js';

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
      let cleanedResponse = cleanResponse(data);
      let ids = cleanedResponse.artworks.map(art => art.id)
      fetchArtDetails(ids).then(data => {
        console.log(data);
        let cleanedArt = cleanArtworks(data);
        console.log(cleanedArt)
        this.setState({artworks: cleanedArt.artworks});
      })
    })
    .catch( err => {
      console.log(err)
    })
 }

 saveArtwork = (id) => {

   let copyArtworks = [...this.state.artworks];
   let currentArtwork = copyArtworks.find(art => art.id === id);
   this.toggleHeart(currentArtwork);
   this.setState(
     {
       gallery: [...this.state.gallery, currentArtwork],
       artworks: [...copyArtworks]
     }
   )
 }

 toggleHeart = (artwork) => {
   artwork.heart = !artwork.heart;
 }

 removeArtwork = (id) => {
   let copyArtworks = [...this.state.artworks];
   let copyGallery = [...this.state.gallery].filter(art => art.id !== id);
   let currentArtwork = copyArtworks.find(art => art.id === id);
   this.toggleHeart(currentArtwork);
   this.setState({artworks: copyArtworks, gallery: copyGallery});
 }

componentDidMount() {
  this.createArtworks();
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
              {this.state.gallery.length ? <Footer gallery={this.state.gallery} /> : ''}
              </>
            )
          }} />
      </Switch>
      </main>
    );
  }

}

export default App;
