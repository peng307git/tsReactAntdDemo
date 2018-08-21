import React from 'react';
import './Home.scss';
import { Switch, Route, match, Redirect } from 'react-router-dom';
import BreadcrumbPage from '../breadcrumb/Breadcrumb';
import StepsPage from '../steps/Steps';
import { History } from 'history';

interface Props extends Injection {

}

interface State {

}

class Home extends React.Component<Props, State> {
  state = {};

  componentDidMount() {
    console.log('project didMount', this.props.match);
  }

  componentWillReceiveProps(nextProps: any) {
    console.log('nextProps', nextProps.match);
  }


  render() {
    const { match } = this.props;
    console.log('match', match);


    return (
      <Switch>

        <Redirect from="/" to="/breadcrumb" />
        <Route path={`/breadcrumb`} component={BreadcrumbPage} />
        <Route path={`/steps`} component={StepsPage} />
      </Switch>
    );
  }
}

interface Injection {
  history: History;
  match: match<{ firstCreateName: string }>;
}

export default Home;