import React from "react";
import Router from "next/router";
import Link from "next/link";
import { connect } from "react-redux";
import { selectors as authSelectors } from "../../redux-store/api/auth";

const mapStateToProps = state => ({
  isGuest: authSelectors.checkIsGuest(state)
});

const mapDispatchToProps = dispatch => ({ dispatch });

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderTabHome = this.renderTabHome.bind(this);
    this.renderTabNewPost = this.renderTabNewPost.bind(this);
    this.renderTabSetting = this.renderTabSetting.bind(this);
    this.renderTabSignUp = this.renderTabSignUp.bind(this);
    this.renderTabSignIn = this.renderTabSignIn.bind(this);
    this.navigateToSignIn = this.navigateToSignIn.bind(this);
  }
  navigateToSignIn() {
    // Router.push("/login");
  }
  renderTabHome() {
    return (
      <li className="nav-item">
        <a className="nav-link active" href="">
          Home
        </a>
      </li>
    );
  }
  renderTabNewPost() {
    const { isGuest } = this.props || {};
    if (isGuest) return null;
    return (
      <li className="nav-item">
        <a className="nav-link" href="">
          <i className="ion-compose"></i>&nbsp;New Post
        </a>
      </li>
    );
  }
  renderTabSetting() {
    const { isGuest } = this.props || {};
    if (isGuest) return null;
    return (
      <li className="nav-item">
        <Link href="/setting">
          <a className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </a>
        </Link>
      </li>
    );
  }
  renderTabSignUp() {
    const { isGuest } = this.props || {};
    if (!isGuest) return null;
    return (
      <li className="nav-item">
        <Link href="/signup">
          <a className="nav-link">Sign up</a>
        </Link>
      </li>
    );
  }
  renderTabSignIn() {
    const { isGuest } = this.props || {};
    if (!isGuest) return null;
    return (
      <li className="nav-item" onClick={this.navigateToSignIn}>
        <Link href="/signin">
          <a className="nav-link">Sign In</a>
        </Link>
      </li>
    );
  }
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">conduit</a>
          </Link>
          <ul className="nav navbar-nav pull-xs-right">
            {this.renderTabHome()}
            {this.renderTabNewPost()}
            {this.renderTabSetting()}
            {this.renderTabSignUp()}
            {this.renderTabSignIn()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
