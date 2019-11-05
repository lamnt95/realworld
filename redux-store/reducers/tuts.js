import Immutable from "seamless-immutable";
import _ from "lodash";
import ReduxHelper from "../reduxHelper";
import { types as tutsTypes } from "../api/tuts";

const initialState = Immutable.from([]);

export default (state = initialState, action) => {
  switch (action.type) {
    case tutsTypes.ADD_MANY_TUTS: {
      const tuts = _.get(action, "payload.articles");
      const newState = Immutable.merge(state, tuts, { deep: true });
      return ReduxHelper.updateState(newState, state);
    }
    default:
      return state;
  }
};
