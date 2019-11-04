import React from "react";
import _ from "lodash";
import withRedux from "../src/hocs/withRedux";
import withAuth from "../src/hocs/withAuth";
import withSeo from "../src/hocs/withSeo";
import withLayout from "../src/hocs/withLayout";
import Login from "../src/screens/Login";

class LoginScreen extends React.Component {
  static getInitialProps(context) {
    return {};
  }
  render() {
    return <Login {...this.props} />;
  }
}

export default _.flowRight(
  withRedux,
  withAuth,
  withSeo,
  withLayout
)(LoginScreen);
