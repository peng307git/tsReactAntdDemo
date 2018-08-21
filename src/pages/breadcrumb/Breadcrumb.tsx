import React from 'react';
import './Breadcrumb.scss';
import { Link, withRouter, Switch, Route, HashRouter as Router } from 'react-router-dom';
import { Breadcrumb, Alert } from 'antd';

const breadcrumbNameMap = {
  '/apps': 'Application List',
  '/apps/1': '菜单一',
  '/apps/2': '菜单二',
  '/apps/1/detail': '菜单一详情',
  '/apps/2/detail': '菜单二详情',
};

interface State {

}

class Apps extends React.Component<{}, State>  {
  render() {
    return (
      <ul className="app-list">
        <li>
          <Link to="/apps/1">菜单一</Link>：<Link to="/apps/1/detail">菜单一详情</Link>
        </li>
        <li>
          <Link to="/apps/2">菜单二</Link>：<Link to="/apps/2/detail">菜单二详情</Link>
        </li>
      </ul>
    );
  }
}

const Home = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [(
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Application List</Link>
      </div>
      <Switch>
        <Route path="/apps" component={Apps} />
        <Route render={() => <span>Home Page</span>} />
      </Switch>
      <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
      <Breadcrumb>
        {breadcrumbItems}
      </Breadcrumb>
    </div>
  );
});
class BreadcrumbPage extends React.Component<{}, State> {
  state = {

  };
  render() {

    return (
      <div className="breadcrumb">
        <Router>
          <Home />
        </Router>
      </div>
    );
  }
}



export default BreadcrumbPage;