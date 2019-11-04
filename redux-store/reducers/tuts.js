import Immutable from "seamless-immutable";
import _ from "lodash";
import ReduxHelper from "../reduxHelper";
import { types as tutsTypes } from "../api/tuts";

const initialState = Immutable.from({});

export default (state = initialState, action) => {
  switch (action.type) {
    case tutsTypes.ADD_MANY_TUTS: {
      const tuts = _.get(action, "payload.tuts");
      const tutsKeyBy = _.keyBy(tuts, "id");
      const newState = Immutable.merge(state, tutsKeyBy, { deep: true });
      return ReduxHelper.updateState(newState, state);
    }
    case tutsTypes.LIKE_TUT_START: {
      const tuts = _.get(action, "payload.tuts") || {};
      if (_.isEmpty(tuts)) return state;
      const { id } = tuts[0];
      const favoritesCount = _.get(state, `${id}.favoritesCount`) + 1;
      const newState = Immutable.setIn(state, [id], {
        ...state[id],
        favoritesCount,
        favorited: true
      });
      return ReduxHelper.updateState(newState, state);
    }
    default:
      return state;
  }
};
