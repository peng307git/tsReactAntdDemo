import * as React from 'react';
import Home from 'src/pages/home/Home';
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.scss';
import Header from './pages/header/Header';
const history = createBrowserHistory();


class App extends React.Component {
  render() {
    return (
      <BrowserRouter history={history}>

        <div className="App">
          <Switch>

            <Route component={Header} />
            <Route path="/:firstCreateName" component={Home} />
          </Switch>

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
