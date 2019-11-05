import _ from "lodash";
import Immutable from "seamless-immutable";
import ReduxHelper from "../reduxHelper";
import { types as authTypes } from "../api/auth";

export const initialState = Immutable.from({
  accessToken: undefined
});

export default (state = initialState, action) => {
  switch (action.type) {
    case authTypes.ADD_ACCESS_TOKEN: {
      const accessToken = _.get(action, "payload.user.token");
      const newState = Immutable.setIn(state, ["accessToken"], accessToken);
      return ReduxHelper.updateState(newState, state);
    }
    default: {
      return state;
    }
  }
};
