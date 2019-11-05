import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import Bannner from "../components/Banner";
import FeedCard from "../components/FeedCard";
import Tab from "../components/Tab";
import Tag from "../components/Tag";
import { selectors as feedSelectors } from "../../redux-store/api/feed";

const mapStateToProps = state => ({
  feeds: feedSelectors.getFeed(state)
});

const mapDispatchToProps = () => ({});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderFeed = this.renderFeed.bind(this);
  }

  renderFeed() {
    const { feeds } = this.props;
    if (_.isEmpty(feeds)) return null;
    return feeds.map(id => <FeedCard id={id} key={id}/>);
  }

  render() {
    return (
      <div className="home-page">
        <Bannner />
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <Tab />
              {this.renderFeed()}
            </div>
            <div className="col-md-3">
              <Tag />
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
)(Home);
