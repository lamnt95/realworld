import _ from "lodash";
import ReduxHelper from "../reduxHelper";
import nameModules from "./nameModules";

export const types = ReduxHelper.type(nameModules.TAGS)({
  FETCH_TAGS_START: "E",
  FETCH_TAGS_SUCCESS: "E",
  FETCH_TAGS_FAIL: "E",
  ADD_MANY_TAGS: "R"
});

export const actions = ReduxHelper.action(types);

const getTags = state => _.get(state, "tags");

export const selectors = { getTags };
