import React from 'react';
import { Header } from '../Header/Header.js';
import './App.css';

import { fetchArtworks } from '../../apiCalls.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      
    }
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
