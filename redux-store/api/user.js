import _ from "lodash";
import ReduxHelper from "../reduxHelper";
import nameModules from "./nameModules";

export const types = ReduxHelper.type(nameModules.USER)({
  ADD_MANY_USER: "R"
});

export const actions = ReduxHelper.action(types);

const getUser = (state, username) => _.get(state, `user.${username}`);

export const selectors = {
  getUser
};
