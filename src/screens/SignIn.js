import React from "react";
import _ from "lodash";
import Link from "next/link";
import { connect } from "react-redux";
import { actions as authActions } from "../../redux-store/api/auth.js";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({ dispatch });

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: undefined, password: undefined, dirtyInput: false };
    this.renderError = this.renderError.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderBtnSubmit = this.renderBtnSubmit.bind(this);
    this.renderEmailInput = this.renderEmailInput.bind(this);
    this.renderPasswordInput = this.renderPasswordInput.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.checkIsValidate = this.checkIsValidate.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }
  onClickSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.dispatch(authActions.initAuthStart({ email, password }));
  }
  onChangePassword(event) {
    const password = _.get(event, "target.value");
    this.setState({ password, dirtyInput: true });
  }
  onChangeEmail(event) {
    const email = _.get(event, "target.value");
    this.setState({ email, dirtyInput: true });
  }
  checkIsValidate() {
    const { email, password } = this.state;
    return _.isEmpty(email) || _.isEmpty(password);
  }
  renderTitle() {
    return (
      <React.Fragment>
        <h1 className="text-xs-center">Sign In</h1>
        <p className="text-xs-center">
          <Link href="/signup">
            <a href="">Need an account?</a>
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
  renderEmailInput() {
    return (
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Email"
          onChange={this.onChangeEmail}
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
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </fieldset>
    );
  }
  renderBtnSubmit() {
    return (
      <button className="btn btn-lg btn-primary pull-xs-right">Sign In</button>
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
)(SignIn);
