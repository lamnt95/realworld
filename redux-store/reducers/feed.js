import Immutable from "seamless-immutable";
import _ from "lodash";
import ReduxHelper from "../reduxHelper";
import { types as feedTypes } from "../api/feed";

export const initialState = Immutable.from({ common: [] });

export default (state = initialState, action) => {
  switch (action.type) {
    case feedTypes.ADD_MANY_FEED: {
      const feeds = _.get(action, "payload.articles");
      const feedsID = feeds.map(({ id }) => id);
      const newState = Immutable.setIn(state, ["common"], feedsID);
      return ReduxHelper.updateState(newState, state);
    }

    default: {
      return state;
    }
  }
};
