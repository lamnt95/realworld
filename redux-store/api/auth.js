import _ from "lodash";
import ReduxHelper from "../reduxHelper";

export const types = ReduxHelper.type("AUTH")({
  INIT_AUTH_START: "E",
  INIT_AUTH_SUCCESS: "E",
  INIT_AUTH_FAIL: "E",
  ADD_ACCESS_TOKEN: "R"
});

export const actions = ReduxHelper.action(types);

const getAccessToken = state => _.get(state, "auth.accessToken");

export const selectors = {
  getAccessToken
};
