import { Component } from 'react';
import './Rating.scss';
import starFull from '../../assets/star-full.svg';
import starEmpty from '../../assets/star-empty.svg';
/**
 * Render the Rating component
 * @extends Component
 * @param {object} props
 * @param {integer} props.rating - the rating of the flat
 * @param {string} props.wrapperClassNest - the name of the class of the parent component to apply a className
 */
class Rating extends Component {
  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    const { rating, wrapperClassNest } = this.props;
    return (
      <div className={`rating ${wrapperClassNest}rating`}>
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
