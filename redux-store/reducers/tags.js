import Immutable from "seamless-immutable";
import _ from "lodash";
import ReduxHelper from "../reduxHelper";
import { types as tagsTypes } from "../api/tags";

const initialState = Immutable.from([]);

export default (state = initialState, action) => {
  switch (action.type) {
    case tagsTypes.ADD_MANY_TAGS: {
      const tags = _.get(action, "payload.tags");
      const newState = Immutable.from(tags);
      return ReduxHelper.updateState(newState, state);
    }
    default:
      return state;
  }
};
