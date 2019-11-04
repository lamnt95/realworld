import React from "react";
import { connect } from "react-redux";
import {
  selectors as tutsSelectors,
  actions as tutsActions
} from "../../redux-store/api/tuts";

const mapStateToProps = (state, ownProps) => ({
  favoritesCount: tutsSelectors.getTutsFavoritesCount(state, ownProps.id),
  username: tutsSelectors.getTutsAuthor(state, ownProps.id)
});

const mapDispatchToProps = dispatch => ({ dispatch });

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickLike = this.onClickLike.bind(this);
  }

  onClickLike() {
    const { id, dispatch } = this.props;
    const tutsPayload = { tuts: [{ id }] };
    dispatch(tutsActions.likeTutStart(tutsPayload));
  }

  render() {
    const { favoritesCount } = this.props;
    return (
      <button
        className="btn btn-outline-primary btn-sm pull-xs-right"
        onClick={this.onClickLike}
      >
        <i className="ion-heart"></i> {favoritesCount || 0}
      </button>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Like);
