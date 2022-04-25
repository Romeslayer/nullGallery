import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Gallery.css'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

export class Gallery extends Component {
  constructor(props){
    super(props);

    this.state = {
      images: this.props.gallery,
      current: 0,
      length: this.props.gallery.length
    }
  }

  nextSlide = () => {
    this.state.current === this.state.length - 1 ? this.setState({current: 0}) : this.setState({current: this.state.current + 1 });
  }

  prevSlide = () => {
    this.state.current === 0 ? this.setState({current: this.state.length - 1}) : this.setState({current: this.state.current - 1});
  }

    render() {

      let displayedImage = (!Array.isArray(this.state.images) || this.state.images.length <= 0) ? null : this.state.images.map((art, index) => {
          return(
            <div className={index === this.state.current ? 'slide active' : 'slide'} key={art.id} >
              {index === this.state.current && <img className='carousel-image' src={art.image} alt={art.title}  />}
            </div>

          )
        })

        return (
          <>
            <h1>Welcome to your gallery</h1>
            <section className="carousel">
              <FaArrowAltCircleLeft className='icon left-arrow' tabIndex='1' onClick={() => this.prevSlide()} />
              <FaArrowAltCircleRight className='icon right-arrow' tabIndex='0' onClick={() => this.nextSlide()} />
                {displayedImage}
            </section>
          </>
        )
    }
}

Gallery.propTypes ={
  gallery: PropTypes.array.isRequired
}

export default Gallery;
