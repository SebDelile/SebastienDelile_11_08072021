import { Component } from 'react';
import './Rating.scss';
import starFull from '../../assets/star-full.svg';
import starEmpty from '../../assets/star-empty.svg';

class Rating extends Component {
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
