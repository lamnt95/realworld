import Immutable from "seamless-immutable";
import _ from "lodash";
import ReduxHelper from "../reduxHelper";
import { types as tutsTypes } from "../api/tuts";

const initialState = Immutable.from({});

export default (state = initialState, action) => {
  switch (action.type) {
    case tutsTypes.ADD_MANY_TUTS: {
      console.log(action.payload);
      const tuts = _.get(action, "payload.articles");
      const tutsKeyBy = _.keyBy(tuts, "id");
      const newState = Immutable.merge(state, tutsKeyBy, { deep: true });
      return ReduxHelper.updateState(newState, state);
    }
    default:
      return state;
  }
};
