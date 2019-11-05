import React from "react";
import { connect } from "react-redux";
import {
  selectors as tutsSelectors,
  actions as tutsActions
} from "../../redux-store/api/tuts";

const mapStateToProps = (state, ownProps) => ({
  favoritesCount: tutsSelectors.getTutsFavoritesCount(state, ownProps.id),
  username: tutsSelectors.getTutsAuthor(state, ownProps.id),
  favorited: tutsSelectors.getTutsFavorited(state, ownProps.id)
});

const mapDispatchToProps = dispatch => ({ dispatch });

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickLike = this.onClickLike.bind(this);
  }

  onClickLike() {
    const { id, dispatch, favorited } = this.props;
    const tutsPayload = { tuts: [{ id }] };
    const action = favorited
      ? tutsActions.unLikeTutStart
      : tutsActions.likeTutStart;
    dispatch(action(tutsPayload));
  }

  render() {
    const { favoritesCount, favorited } = this.props;
    const heartIcon = favorited ? "icon ion-md-heart" : "icon ion-md-heart-empty";
    return (
      <button
        className="btn btn-outline-primary btn-sm pull-xs-right"
        onClick={this.onClickLike}
      >
        <i className={heartIcon}></i> {favoritesCount || 0}
      </button>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Like);
