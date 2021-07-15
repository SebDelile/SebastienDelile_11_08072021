import { Component } from 'react';
import './FlatSheet.scss';

import Carousel from '../../components/Carousel/Carousel.jsx';
import Taglist from '../../components/Taglist/Taglist.jsx';
import Host from '../../components/Host/Host.jsx';
import Rating from '../../components/Rating/Rating.jsx';

class FlatSheet extends Component {
  constructor(props) {
    super(props);
    this.flatId = this.props.match.params.id;
    this.state = { flatData: {} };
  }

  componentDidMount() {
    const fetchData = async () => {
      const response = await fetch('../../adverts-sample.json');
      const jsonResponse = await response.json();
      if (jsonResponse && jsonResponse.adverts) {
        this.setState({
          flatData: jsonResponse.adverts.find(
            (advert) => advert.id === this.flatId
          ),
        });
      }
    };
    fetchData();
  }
  setOpenDropdown = (dropdownTitle) => {
    this.setState({ openDropdown: dropdownTitle });
  };
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
          <Taglist wrapperClassNest={'flat-sheet__'} tags={tags} />
          <Host wrapperClassNest={'flat-sheet__'} host={host} />
          <Rating wrapperClassNest={'flat-sheet__'} rating={rating} />
        </section>
      </main>
    );
  }
}

export default FlatSheet;
