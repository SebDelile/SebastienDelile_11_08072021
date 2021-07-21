import { Component } from 'react';
import './Rating.scss';
import starFull from '../../assets/star-full.svg';
import starEmpty from '../../assets/star-empty.svg';
/**
 * Render the Rating component
 * @extends Component
 * @param {object} props
 * @param {integer} props.rating - the rating of the flat
 */
class Rating extends Component {
  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <h3 className="sr-only">{`Note de la location ${rating} sur 5`}</h3>
        {[...Array(parseInt(rating))].map((value, index) => (
          <img
            className="rating__star"
            key={`${value}${index}`}
            src={starFull}
            alt="Etoile pleine"
          />
        ))}
        {[...Array(5 - parseInt(rating))].map((value, index) => (
          <img
            className="rating__star"
            key={`${value}${index}`}
            src={starEmpty}
            alt="Etoile vide"
          />
        ))}
      </div>
    );
  }
}

export default Rating;
