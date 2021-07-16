import { Component } from 'react';
import './Dropdown.scss';
import arrowMenu from '../../assets/arrow-menu.svg';

class Dropdown extends Component {
  handleClick = () => {
    const { title, setOpenDropdown } = this.props;
    setOpenDropdown(title);
  };

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

export default Dropdown;
