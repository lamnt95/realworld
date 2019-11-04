import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { selectors as tutsSelectors } from "../../redux-store/api/tuts";

const mapStateToProps = (state, ownProps) => ({
  tutData: tutsSelectors.getTuts(state, ownProps.id)
});

const mapDispatchToProps = () => ({});

class FeedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { tutData } = this.props || {};
    const {
      title,
      updatedAt,
      favoritesCount,
      id,
      favorited,
      description,
      body
    } = tutData || {};

    if (_.isEmpty(title)) return null;

    return (
      <div className="article-preview">
        <div className="article-meta">
          <a href="profile.html">
            <img src="http://i.imgur.com/Qr71crq.jpg" />
          </a>
          <div className="info">
            <a href="" className="author">
              Eric Simons
            </a>
            <span className="date">{updatedAt}</span>
          </div>
          <button className="btn btn-outline-primary btn-sm pull-xs-right">
            <i className="ion-heart"></i> {favoritesCount || 0}
          </button>
        </div>
        <a href="" className="preview-link">
          <h1>{title}</h1>
          <p>{description}</p>
          <span>Read more...</span>
        </a>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedCard);
