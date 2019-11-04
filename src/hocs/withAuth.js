import React from "react";
import { ActionsObservable } from "redux-observable";
import _ from "lodash";
import {
  actions as authActions,
  selectors as authSelectors
} from "../store/reducers/authDuck";
import rootEpic from "../store/rootEpic";

const withAuth = Screen => {
  class screenWithAuth extends React.Component {
    static async getInitialProps(context) {
      const { store } = context;
      const state = store.getState();
      const accessToken = authSelectors.getAccessToken(state);

      if (_.isEmpty(accessToken)) {
        const resultAction = await rootEpic(
          ActionsObservable.of(authActions.initAuthStart()),
          store
        ).toPromise();
        store.dispatch(resultAction);
      }

      const initProps = await Screen.getInitialProps(context);
      return { ...initProps };
    }

    render() {
      return <Screen {...this.props} />;
    }
  }
  return screenWithAuth;
};

export default withAuth;
