import React from 'react';
import { Header } from '../Header/Header.js';
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
      console.log(data)
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
