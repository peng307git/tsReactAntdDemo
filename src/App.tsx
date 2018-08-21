import * as React from 'react';
import BreadcrumbPage from './pages/breadcrumb/Breadcrumb';
import Home from 'src/pages/home/Home';
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.scss';
import StepsPage from './pages/steps/Steps';
import Header from './pages/header/Header';
const history = createBrowserHistory();


class App extends React.Component {
  public render() {

    return (
      <BrowserRouter history={history}>
        <div className="App">
          <Route path="/" render={(props) => <Header {...props} />} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/breadcrumb" component={BreadcrumbPage} />
            <Route path="/steps" component={StepsPage} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
