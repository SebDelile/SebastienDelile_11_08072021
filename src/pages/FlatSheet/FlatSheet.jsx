import { Component } from 'react';
import './FlatSheet.scss';
import Carousel from '../../components/Carousel/Carousel.jsx';
import Taglist from '../../components/Taglist/Taglist.jsx';
import Host from '../../components/Host/Host.jsx';
import Rating from '../../components/Rating/Rating.jsx';
import DropdownWrapper from '../../components/DropdownWrapper/DropdownWrapper.jsx';
import advertSample from '../../data/adverts-sample.json';

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
   * get the Flat data at the initialization of the component and put it in the state
   */
  componentDidMount() {
    // const fetchData = async () => {
    //   const response = await fetch('../../adverts-sample.json');
    //   const jsonResponse = await response.json();
    //   if (jsonResponse && jsonResponse.adverts) {
    //     this.setState({
    //       flatData: advertSample.adverts.find(
    //         (advert) => advert.id === this.flatId
    //       ),
    //     });
    //   }
    // };
    // fetchData();
    this.setState({
      flatData: advertSample.adverts.find(
        (advert) => advert.id === this.flatId
      ),
    });
  }

  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    if (Object.keys(this.state.flatData).length === 0) return null;
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
        <Carousel pictures={pictures} />
        <section className="flat-sheet__header">
          <h1 className="flat-sheet__title">{title}</h1>
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

export default FlatSheet;
