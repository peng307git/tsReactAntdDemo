import React from 'react';
import './Header.scss';
import { Menu, Icon } from 'antd';
import { History } from 'history';
import { match } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

interface Props extends Injection {

}

interface State {
  current: string;
}

export default class Header extends React.Component<Props, State> {
  state = {
    current: '/'
  };


  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="breadcrumb">
          <Icon type="weibo-circle" />面包屑
        </Menu.Item>
        <Menu.Item key="steps">
          <Icon type="linkedin" /> 步骤条
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }

  handleClick = (e: any) => {
    const { history } = this.props;
    this.setState({
      current: e.key,
    });
    history.push(e.key);
  }

}

interface Injection {
  history: History;
  match: match<any>;
}