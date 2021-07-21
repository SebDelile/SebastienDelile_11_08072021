import { Component } from 'react';
import './FlatSheet.scss';
import Carousel from '../../components/Carousel/Carousel.jsx';
import Taglist from '../../components/Taglist/Taglist.jsx';
import Host from '../../components/Host/Host.jsx';
import Rating from '../../components/Rating/Rating.jsx';
import DropdownWrapper from '../../components/DropdownWrapper/DropdownWrapper.jsx';
import advertSample from '../../data/adverts-sample.json';
import { Redirect } from 'react-router-dom';

/**
 * Render the FlatSheet page
 * @extends Component
 * @param {object} props
 * @param {string} props.match.parmas.id - contains the id of the flat passed as parameter to the url
 * @property {string} flatId - the id of the flat obtained from the props
 * @property {object} state - the state of the component
 * @property {object} state.flatData - the data of the flat, will be obtained from a fetch
 */
class FlatSheet extends Component {
  constructor(props) {
    super(props);
    this.flatId = this.props.match.params.id;
    this.state = { flatData: {} };
  }

  /**
   * get the Flat data at the initialization of the component
   * if it exists it puts it in the state, if not it put an error message to be recover by the render
   */
  componentDidMount() {
    const flatData = advertSample.adverts.find(
      (advert) => advert.id === this.flatId
    );
    this.setState({
      flatData: flatData ? flatData : 'not found',
    });
  }

  /**
   * Render the component
   * if there is an error during the componentDidMount : redirect to Error404
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    if (Object.keys(this.state.flatData).length === 0) return null;
    else if (this.state.flatData === 'not found')
      return <Redirect to={'/error404'} />;
    else {
      const {
        description,
        equipments,
        host,
        location,
        pictures,
        rating,
        tags,
        title,
      } = this.state.flatData;
      return (
        <main className="flat-sheet container">
          <h1 className="sr-only">Page détail de la location</h1>
          <Carousel pictures={pictures} />
          <section className="flat-sheet__header">
            <h2 className="flat-sheet__title">{title}</h2>
            <p className="flat-sheet__location">{location}</p>
            <Taglist tags={tags} />
            <Host wrapperClassNest={'flat-sheet__'} host={host} />
            <Rating wrapperClassNest={'flat-sheet__'} rating={rating} />
          </section>
          <DropdownWrapper
            categories={[
              ['Description', description],
              ['Équipements', equipments],
            ]}
            isLargeScreen2columns={true}
          />
        </main>
      );
    }
  }
}

export default FlatSheet;
