import { Component } from 'react';
import './Carousel.scss';
import arrowBack from '../../assets/arrow-back.svg';
import arrowForward from '../../assets/arrow-forward.svg';

/**
 * Render the Carousel component
 * @extends Component
 * @param {object} props
 * @param {string} props.pictures
 * @property {object} state - the state of the component
 * @property {integer} state.currentPicture - the current position of the carousel
 */
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPicture: 0 };
  }

  /**
   * go to the next picture, or go to last picture if current picture is the first one
   */
  prevPicture = () => {
    const currentPicture = this.state.currentPicture;
    const picturesLength = this.props.pictures.length;
    if (currentPicture === 0) {
      this.setState({ currentPicture: picturesLength - 1 });
    } else {
      this.setState({ currentPicture: currentPicture - 1 });
    }
  };

  /**
   * go to the previous picture, or go to first picture if current picture is the last one
   */
  nextPicture = () => {
    const currentPicture = this.state.currentPicture;
    const picturesLength = this.props.pictures.length;
    if (currentPicture === picturesLength - 1) {
      this.setState({ currentPicture: 0 });
    } else {
      this.setState({ currentPicture: currentPicture + 1 });
    }
  };

  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    const pictures = this.props.pictures;
    const picturesLength = pictures.length;
    return (
      <div className="carousel">
        <img
          className="carousel__image"
          src={pictures[this.state.currentPicture]}
          alt={'photo numéro ' + this.state.currentPicture + 1}
        />
        {picturesLength >= 2 ? (
          <div className="carousel__commands">
            <button
              className="carousel__button carousel__button__left"
              onClick={() => this.prevPicture()}
            >
              <img src={arrowBack} alt="bouton précédent" />
            </button>
            <p className="carousel__current-image">
              {this.state.currentPicture + 1}/{picturesLength}
            </p>
            <button
              className="carousel__button carousel__button__right"
              onClick={() => this.nextPicture()}
            >
              <img src={arrowForward} alt="bouton suivant" />
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Carousel;
