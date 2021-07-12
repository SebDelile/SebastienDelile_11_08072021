import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.scss';
import Home from './pages/Home';
import About from './pages/About';
import FlatSheet from './pages/FlatSheet';
import Error404 from './pages/Error404';
import Header from './components/Header';

class App extends Component {
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
            <Route path="/FlatSheet">
              <FlatSheet />
            </Route>
            <Route>
              <Error404 />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
