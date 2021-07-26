import { Component } from 'react';
import { withRouter } from 'react-router-dom';

/**
 * Allow the app to restore the scroll to the top position each time the location is changed
 * @extends Component
 * @hideconstructor
 */
class ScrollToTop extends Component {
  /**
   * The medthod is called at each change in the router props.
   * If the location has changed, the scroll position is restored to the top of the page.
   * @param {object} prevProps - the props it has before the location change
   */
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  /**
   * Render is useless for this component
   * @returns nothing
   */
  render() {
    return null;
  }
}
export default withRouter(ScrollToTop);
