import { Component } from 'react';
import Dropdown from '../Dropdown/Dropdown.jsx';
import './DropdownWrapper.scss';

/**
 * Render the DropdownWrapper component.
 * To be used with Dropdown children components inside.
 * @extends Component
 * @param {object} props
 * @param {array} props.categories - a table containing tables with 2 elements each : title and body
 * @param {boolean} props.isLargeScreen2columns - to set the 2-columns display if suitable
 * @property {object} state - the state of the component
 * @property {table} state.openDropdown - a table containing the title of the currently open child dropdowns
 */
class DropdownWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { openDropdown: [] };
  }

  /**
   * modify the state to add a the title of a dropdown if one is opened, or remove the title of a dropdown if one is closed.
   * To be passed as a prop to the child Dropdowns
   * @param {string} dropdownTitle
   */
  setOpenDropdown = (dropdownTitle) => {
    const openDropdown = this.state.openDropdown;
    if (openDropdown.includes(dropdownTitle)) {
      this.setState({
        openDropdown: openDropdown.filter((e) => e !== dropdownTitle),
      });
    } else {
      this.setState({ openDropdown: [...openDropdown, dropdownTitle] });
    }
  };

  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    const { categories, isLargeScreen2columns } = this.props;
    const wrapperClassName = `dropdown-wrapper${
      isLargeScreen2columns ? ' dropdown-wrapper--large-screen-2-col' : ''
    }`;
    return (
      <section className={wrapperClassName}>
        <h2 className="sr-only">{`Zone avec ${categories.length} catégories`}</h2>
        {categories.map((categoryData, index) => (
          <Dropdown
            key={`category-${index}`}
            title={categoryData[0]}
            body={categoryData[1]}
            isOpen={this.state.openDropdown.includes(categoryData[0])}
            setOpenDropdown={this.setOpenDropdown}
          />
        ))}
      </section>
    );
  }
}

export default DropdownWrapper;
