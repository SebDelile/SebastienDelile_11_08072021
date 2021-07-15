import { Component } from 'react';
import './Taglist.scss';

class Taglist extends Component {
  render() {
    const { tags, wrapperClassNest } = this.props;
    return (
      <ul className={`taglist ${wrapperClassNest}taglist`}>
        {tags.map((tag, index) => (
          <li className="taglist__tag" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    );
  }
}

export default Taglist;
