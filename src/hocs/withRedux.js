import React from "react";
import { Provider } from "react-redux";
import confirgureStore from "../store/confirgureStore";

const withRedux = (Screen, { ssr = true } = {}) => {
  class screenWithRedux extends React.Component {
    render() {
      const store = getOrInitializeStore(this.props.initialState);
      return (
        <Provider store={store}>
          <Screen {...this.props} />
        </Provider>
      );
    }
  }

  if (ssr || Screen.getInitialProps) {
    screenWithRedux.getInitialProps = async context => {
      const reduxStore = getOrInitializeStore();
      context.store = reduxStore;
      const screenProps =
        typeof Screen.getInitialProps === "function"
          ? await Screen.getInitialProps(context)
          : {};

      return { ...screenProps, initialState: reduxStore.getState() };
    };
  }

  return screenWithRedux;
};

let reduxStore;
const getOrInitializeStore = initialState => {
  if (typeof window === "undefined") {
    return confirgureStore(initialState);
  }

  if (!reduxStore) {
    reduxStore = confirgureStore(initialState);
  }

  return reduxStore;
};

export default withRedux;
