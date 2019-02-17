import styles from "./Navbar.module.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";

// Action creators and helpers
import { establishCurrentUser } from "./../../../modules/auth";

import Text from "./../../components/Text/Text";
import Container from "../Container/Container";

const links = [
  {
    to: "/",
    text: "Homepage"
  },
  {
    to: "/about",
    text: "About"
  },
  {
    to: "/profile/1",
    text: "Profile 1"
  },
  {
    to: "/profile/2",
    text: "Profile 2"
  },
  {
    to: "/login",
    text: "Login",
    auth: false
  },
  {
    to: "/dashboard",
    text: "Dashboard",
    auth: true
  },
  {
    to: "/logout",
    text: "Logout",
    auth: true
  },
  {
    to: "/this-is-broken",
    text: "Broken Page"
  }
];

const isCurrent = (to, current) => {
  if (to === "/" && current === to) {
    return true;
  } else if (to !== "/" && current.includes(to)) {
    return true;
  }

  return false;
};

const HeaderLink = ({ to, text, current }) => (
  <Link
    className={isCurrent(to, current) ? cx(styles.current) : cx(styles.normal)}
    to={to}
  >
    {text}
  </Link>
);

class Navbar extends Component {
  render() {
    let { isAuthenticated } = this.props;
    return (
      <Container bleed>
        <nav className={cx(styles.root)}>
          <Link to="/">
            <Text heading4 className={cx(styles.brand)} component="h1">
              Tinker SSR
            </Text>
          </Link>
          <ul className={cx(styles.menus)}>
            {links.map((link, index) => {
              const TheLink = (
                <HeaderLink
                  key={index}
                  current={this.props.location.pathname}
                  {...link}
                />
              );

              if (link.hasOwnProperty("auth")) {
                if (link.auth && isAuthenticated) {
                  return TheLink;
                } else if (!link.auth && !isAuthenticated) {
                  return TheLink;
                }

                return null;
              }

              return TheLink;
            })}
          </ul>
        </nav>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ establishCurrentUser }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
);
