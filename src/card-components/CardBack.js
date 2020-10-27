import React, { Component } from 'react';
import { resetHistory } from 'sinon';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'
import MovieCard from './MovieCard.js'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}
export default class CardBack extends Component {

  generateRatingElement = () => {
    // implement meeeee! See the readme for instructions
    imgMapper[this.props.IMDBRating] != null ? <img src={imgMapper[this.props.IMDBRating].slice(5)} alt=""/> : <h4>'No Rating Found'</h4>
  }

  render() {
    console.log(imgMapper[this.props.IMDBRating].slice(5))
    return (
      <div className="card-back">
        <h3 className="title">{this.props.title}</h3>
        <span />
        {this.generateRatingElement() }
        <span />
    <h5 className="genres">{this.props.genres.join(', ')}</h5>
      </div>
    )
  }
}
