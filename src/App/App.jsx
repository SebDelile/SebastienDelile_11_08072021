import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from '../pages/Home/Home.jsx';
import About from '../pages/About/About.jsx';
import FlatSheet from '../pages/FlatSheet/FlatSheet.jsx';
import Error404 from '../pages/Error404/Error404.jsx';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../utils/ScrollToTop.js';

/**
 * Render the App. It contains the router
 * @extends Component
 * @hideconstructor
 */
class App extends Component {
  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route
              path="/flatsheet/:id"
              render={(routeProps) => <FlatSheet {...routeProps} />}
            ></Route>
            <Route>
              <Error404 />
            </Route>
          </Switch>
          <Footer />
          <ScrollToTop />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
