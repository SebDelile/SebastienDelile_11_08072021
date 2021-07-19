import { Component } from 'react';
import './Taglist.scss';

/**
 * Render the Taglist component
 * @extends Component
 * @param {object} props
 * @param {array} props.tags - the list of the tags corresponding to the flat
 * @param {string} props.wrapperClassNest - the name of the class of the parent component to apply a className
 */
class Taglist extends Component {
  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
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
