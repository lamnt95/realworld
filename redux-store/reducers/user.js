import Immutable from "seamless-immutable";
import _ from "lodash";
import ReduxHelper from "../reduxHelper";
import { types as userTypes } from "../api/user";

const initialState = Immutable.from({});

export default (state = initialState, action) => {
  switch (action.type) {
    case userTypes.ADD_MANY_USER: {
      const users = _.get(action, "payload.users");
      const usersKeyBy = _.keyBy(users, "username");
      const newState = Immutable.merge(state, usersKeyBy, { deep: true });
      return ReduxHelper.updateState(newState, state);
    }
    default:
      return state;
  }
};
