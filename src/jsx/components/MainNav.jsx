import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Responsive } from "semantic-ui-react";

class App extends Component {
  render() {
    const { pathname } = this.props.location;

    return (
      <Responsive minWidth={1020} as={Menu} attached="top">
        <Menu.Item active={pathname === "/"}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item
          active={pathname === "/case-search" || pathname.includes("/case")}
        >
          <Link to="/case-search">Case Search</Link>
        </Menu.Item>
        <Menu.Item active={pathname === "/about"}>
          <Link to="/about">About / Contact</Link>
        </Menu.Item>
        <Menu.Item active={pathname === "/plugin"}>
          <Link to="/plugin">legislation.govt.nz Plugin</Link>
        </Menu.Item>
        <Menu.Item>
          <a href="https://api.openlaw.nz/graphql">
            API &nbsp;<Icon name="external" fitted />
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="https://github.com/openlawnz">
            Github &nbsp;<Icon name="external" fitted />
          </a>
        </Menu.Item>

        <Menu.Menu position="right">
          <div className="ui right aligned category search item">
            <div className="ui transparent icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Quick Case Search..."
              />
              <i className="search link icon" />
            </div>
            <div className="results" />
          </div>
        </Menu.Menu>
      </Responsive>
    );
  }
}

export default App;
