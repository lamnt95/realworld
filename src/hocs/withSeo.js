import React from "react";
import { Helmet } from "react-helmet";

const withSeo = Screen => {
  class screenWithSeo extends React.Component {
    static async getInitialProps(context) {
      const initProps = await Screen.getInitialProps(context);
      return { ...initProps };
    }

    render() {
      return (
        <div>
          <Helmet>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#000000" />
            <meta
              name="description"
              content="Web site created using create-react-app"
            />
            <title>Conduit</title>
            <link
              href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
              rel="stylesheet"
              type="text/css"
            />
            <link
              href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
              rel="stylesheet"
              type="text/css"
            />
            <link rel="stylesheet" href="//demo.productionready.io/main.css" />
            <link
              href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
              rel="stylesheet"
            />
          </Helmet>
          <Screen {...this.props} />
        </div>
      );
    }
  }
  return screenWithSeo;
};

export default withSeo;
