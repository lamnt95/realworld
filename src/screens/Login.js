import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import Link from "next/link";
import { actions as authActions } from "../../redux-store/api/auth";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({ dispatch });

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      email: undefined,
      password: undefined,
      dirtyInput: false
    };
    this.renderError = this.renderError.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderBtnSubmit = this.renderBtnSubmit.bind(this);
    this.renderEmailInput = this.renderEmailInput.bind(this);
    this.renderPasswordInput = this.renderPasswordInput.bind(this);
    this.renderUsernameInput = this.renderUsernameInput.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.checkIsValidate = this.checkIsValidate.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }
  onClickSubmit(event) {
    event.preventDefault();
    const { email, password, username } = this.state;
    console.log(this.state);
    this.props.dispatch(
      authActions.registerStart({ email, password, username })
    );
  }
  onChangeInput(event) {
    const text = _.get(event, "target.value");
    const name = _.get(event, "target.name");
    this.setState({ [name]: text, dirtyInput: true });
  }
  checkIsValidate() {
    const { email, password } = this.state;
    return _.isEmpty(email) || _.isEmpty(password);
  }
  renderTitle() {
    return (
      <React.Fragment>
        <h1 className="text-xs-center">Sign Up</h1>
        <p className="text-xs-center">
          <Link href="/signin">
            <a>Have an account?</a>
          </Link>
        </p>
      </React.Fragment>
    );
  }
  renderError() {
    const isValidate = this.checkIsValidate();
    if (!this.state.dirtyInput || !isValidate) return null;
    return (
      <ul className="error-messages">
        <li>That email is already taken</li>
      </ul>
    );
  }
  renderUsernameInput() {
    return (
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="text"
          name="username"
          placeholder="Username"
          onChange={this.onChangeInput}
        />
      </fieldset>
    );
  }
  renderEmailInput() {
    return (
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="text"
          name="email"
          placeholder="Email"
          onChange={this.onChangeInput}
        />
      </fieldset>
    );
  }
  renderPasswordInput() {
    return (
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.onChangeInput}
        />
      </fieldset>
    );
  }
  renderBtnSubmit() {
    return (
      <button className="btn btn-lg btn-primary pull-xs-right">Sign Up</button>
    );
  }
  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              {this.renderTitle()}
              {this.renderError()}
              <form onSubmit={this.onClickSubmit}>
                {this.renderUsernameInput()}
                {this.renderEmailInput()}
                {this.renderPasswordInput()}
                {this.renderBtnSubmit()}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
