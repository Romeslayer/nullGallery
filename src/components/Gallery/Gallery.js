import React, { Component } from 'react'

export class Gallery extends Component {
  constructor(props){
    super(props);

    this.state = {
      images: this.props.gallery,
      current: 0,
    }
  }
    render() {
      let displayedImages = this.state.images.map(art => {
        return <img src={art.image} alt='art' />
      })
        return (
          <>
            <h1>Welcome to your gallery</h1>
            <div>
                {displayedImages}
            </div>
          </>
        )
    }
}

export default Gallery
