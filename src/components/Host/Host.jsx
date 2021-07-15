import { Component } from 'react';
import './Host.scss';

class Host extends Component {
  render() {
    const { host, wrapperClassNest } = this.props;
    const { name, picture } = host;
    return (
      <div className={`host ${wrapperClassNest}host`}>
        <p className="host__name">
          {name.split(' ')[0]}
          <br />
          {name.split(' ')[1]}
        </p>
        <img className="host__picture" src={picture} alt="profil de l'hôte" />
      </div>
    );
  }
}

export default Host;
