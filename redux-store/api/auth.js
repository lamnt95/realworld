import _ from "lodash";
import ReduxHelper from "../reduxHelper";
import nameModules from "./nameModules";

export const types = ReduxHelper.type(nameModules.AUTH)({
  INIT_AUTH_START: "E",
  INIT_AUTH_SUCCESS: "E",
  INIT_AUTH_FAIL: "E",
  REGISTER_START: "E",
  REGISTER_SUCCESS: "E",
  REGISTER_FAIL: "E",
  ADD_ACCESS_TOKEN: "R",
  ADD_USER_NAME_LOGIN: "R"
});

export const actions = ReduxHelper.action(types);

const getAccessToken = state => _.get(state, "auth.accessToken");
const getUserNameLogin = state => _.get(state, "auth.username");
const checkIsGuest = state => getAccessToken(state) === undefined;

export const selectors = {
  checkIsGuest,
  getAccessToken,
  getUserNameLogin
};
