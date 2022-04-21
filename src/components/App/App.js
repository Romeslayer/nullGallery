import React from 'react';
import { Header } from '../Header/Header.js';
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
      <div className="App">
        <Header />
      </div>
    );
  }

}

export default App;
