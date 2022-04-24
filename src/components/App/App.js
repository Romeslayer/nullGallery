import React, { Fragment } from 'react';
import { Header } from '../Header/Header.js';
import { Redirect, Switch, Route } from 'react-router-dom';
import { cleanResponse, cleanArtworks } from '../../utilities.js';
import { MainDisplay } from '../MainDisplay/MainDisplay.js';
import { Footer } from '../Footer/Footer.js';
import { Gallery } from '../Gallery/Gallery.js';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import './App.css';

import { fetchArtworks, fetchArtDetails } from '../../apiCalls.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gallery: [],
      artworks: [],
      error: ''
    }
  }

 createArtworks() {
   fetchArtworks()
    .then(data => {
      let cleanedResponse = cleanResponse(data);
      let ids = cleanedResponse.artworks.map(art => art.id)
      fetchArtDetails(ids).then(data => {
        let cleanedArt = cleanArtworks(data);
        this.setState({artworks: cleanedArt.artworks});
      })
    })
    .catch( err => {
      this.setState({error: err})
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
        {this.state.error ? <Redirect to='/error'/> : ''}
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route
          exact path='/home'
          render={()=> {
            return (
              <>
                <Header home={true} />
                {this.state.artworks.length ? <MainDisplay artworks={this.state.artworks} saveArtwork={this.saveArtwork} removeArtwork={this.removeArtwork} /> : '' }
                {this.state.gallery.length ? <Footer gallery={this.state.gallery} /> : ''}
              </>
            )
          }} />

        <Route
          exact path='/gallery'
          render={ ()=> {
            return (
              <>
                <Header home={false} />
                {this.state.gallery.length ? <Gallery gallery={this.state.gallery} /> : '' }
              </>
            )
          }}
          />

        <Route
          exact path='/error'
          render={() => {
            return (
              <>
              <Header home={false} />
              {this.state.error ? <ErrorPage error={this.state.error} /> : ''}
              </>
            )
          }}
          />

        <Route
          exact path='/404'
          render={() => {
            return(
              <>
                <Header home={false} />
                <h2>404 page not found</h2>
              </>
            )
          }}
          />
        <Redirect from='/' to='/404' />
      </Switch>
      </main>
    );
  }

}

export default App;
