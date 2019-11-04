import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  selectors as tagsSelector,
  actions as tagsActions
} from "../../redux-store/api/tags";

const mapStateToProps = state => ({
  tags: tagsSelector.getTags(state)
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderTagItem = this.renderTagItem.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(tagsActions.fetchTagsStart());
  }

  renderTagItem(tag) {
    return (
      <a href="" className="tag-pill tag-default">
        {tag}
      </a>
    );
  }

  render() {
    const { tags } = this.props || {};
    if (_.isEmpty(tags)) return null;
    return (
      <div className="sidebar">
        <p>Popular Tags</p>
        <div className="tag-list">
          {tags.map(tag => this.renderTagItem(tag))}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tag);
