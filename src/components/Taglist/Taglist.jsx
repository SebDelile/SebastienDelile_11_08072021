import { Component } from 'react';
import './Taglist.scss';

/**
 * Render the Taglist component
 * @extends Component
 * @param {object} props
 * @param {array} props.tags - the list of the tags corresponding to the flat
 */
class Taglist extends Component {
  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    const { tags } = this.props;
    return (
      <ul className="taglist">
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
