import React from 'react';
import { Header } from '../Header/Header.js';
import { Redirect, Switch, Route } from 'react-router-dom';
import { cleanArtResponse } from '../../utilities.js';
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
      this.setState({artworks: cleanedResponse.artworks})
    })
    .catch( err => {
      console.log(err)
    })
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
              <Header />
            )
          }} />
      </Switch>
      </main>
    );
  }

}

export default App;
