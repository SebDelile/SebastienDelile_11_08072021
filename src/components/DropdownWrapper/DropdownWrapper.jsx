import { Component } from 'react';
import Dropdown from '../Dropdown/Dropdown.jsx';
import './DropdownWrapper.scss';

class DropdownWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { openDropdown: [] };
  }

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
