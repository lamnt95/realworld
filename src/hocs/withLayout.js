import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const withLayout = Screen => {
  class screenWithLayout extends React.Component {
    static async getInitialProps(context) {
      const initProps = await Screen.getInitialProps(context);
      return { ...initProps };
    }

    render() {
      return (
        <React.Fragment>
          <Header />
          <Screen {...this.props} />
          <Footer />
        </React.Fragment>
      );
    }
  }
  return screenWithLayout;
};

export default withLayout;
