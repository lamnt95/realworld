import Immutable from "seamless-immutable";
import ReduxHelper from "../reduxHelper";

export const initialState = Immutable.from({});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MANY_FEED: {
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
