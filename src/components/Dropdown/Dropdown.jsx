import { Component } from 'react';
import './Dropdown.scss';
import arrowMenu from '../../assets/arrow-menu.svg';
import PropTypes from 'prop-types';

/**
 * Render the Dropdown component.
 * To be used as children of a DropdownWrapper component
 * @extends Component
 * @param {object} props
 * @param {string} props.title - the title of the dropdown
 * @param {string} props.body - the text to put in the body of the dropdown
 * @param {boolean} props.isOpen - to know if the dropdown is actually open, from the state of the parent DropdownWrapper
 * @param {function} props.setOpenDropdown - the function to activate on the click on the dropdown
 */
class Dropdown extends Component {
  /**
   * handle the click on the dropdown header. Set the state of the parent DropdownWrapper and thus open or close the Dropdown
   */
  handleClick = () => {
    const { title, setOpenDropdown } = this.props;
    setOpenDropdown(title);
  };

  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    const { title, body, isOpen } = this.props;
    const bodyClassName = `dropdown__body${
      isOpen ? ' dropdown__body--open' : ''
    }`;
    const iconClassName = `dropdown__icon${
      isOpen ? ' dropdown__icon--open' : ''
    }`;
    return (
      <div className="dropdown">
        <button
          className="dropdown__header"
          type="button"
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : 'false'}
          onClick={() => this.handleClick()}
        >
          <h3 className="dropdown__title">{title}</h3>
          <img
            className={iconClassName}
            src={arrowMenu}
            alt="icône menu déroulant"
          />
        </button>

        {typeof body === 'string' ? (
          <p className={bodyClassName}>{body}</p>
        ) : (
          <ul className={bodyClassName}>
            {body.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  setOpenDropdown: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  body: "Il n'y a pas de détail à afficher",
};

export default Dropdown;
