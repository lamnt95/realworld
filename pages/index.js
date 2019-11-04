import React from "react";
import _ from "lodash";
import { ActionsObservable } from "redux-observable";
import withRedux from "../src/hocs/withRedux";
import withAuth from "../src/hocs/withAuth";
import withSeo from "../src/hocs/withSeo";
import withLayout from "../src/hocs/withLayout";
import rootEpic from "../redux-store/rootEpic";
import { actions as feedActions } from "../redux-store/api/feed";
import Home from "../src/screens/Home";

class Index extends React.Component {
  static async getInitialProps(context) {
    const { store } = context;
    const resultAction = await rootEpic(
      ActionsObservable.of(feedActions.fetchFeedStart()),
      store
    ).toPromise();
    store.dispatch(resultAction);
    return {};
  }

  render() {
    return <Home {...this.props} />;
  }
}

export default _.flowRight(
  withRedux,
  withAuth,
  withSeo,
  withLayout
)(Index);
