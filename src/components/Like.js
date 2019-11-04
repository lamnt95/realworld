import React from "react";
import { connect } from "react-redux";
import { selectors as tutsSelectors } from "../../redux-store/api/tuts";

const mapStateToProps = (state, ownProps) => ({
  favoritesCount: tutsSelectors.getTutsFavoritesCount(state, ownProps.id),
  authorName: tutsSelectors.getTutsAuthor(state, ownProps.id)
});

const mapDispatchToProps = dispatch => ({});

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { authorName, favoritesCount } = this.props;
    return (
      <button className="btn btn-outline-primary btn-sm pull-xs-right">
        <i className="ion-heart"></i> {favoritesCount || 0}
      </button>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Like);
