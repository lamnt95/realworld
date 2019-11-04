import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { selectors as tutsSelectors } from "../../redux-store/api/tuts";
import { selectors as userSelectors } from "../../redux-store/api/user";
import Like from "./Like";

const mapStateToProps = (state, ownProps) => {
  const tutData = tutsSelectors.getTuts(state, ownProps.id);
  const authorName = tutsSelectors.getTutsAuthor(state, ownProps.id);
  const user = userSelectors.getUser(state, authorName);
  return { tutData, user };
};

const mapDispatchToProps = () => ({});

class FeedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { tutData, user, id } = this.props || {};
    const { title, updatedAt, description } = tutData || {};
    const { username, image } = user || {};

    if (_.isEmpty(title)) return null;

    return (
      <div className="article-preview">
        <div className="article-meta">
          <a href="profile.html">
            <img src={image} />
          </a>
          <div className="info">
            <a href="" className="author">
              {username}
            </a>
            <span className="date">{updatedAt}</span>
          </div>
          <Like id={id} />
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
