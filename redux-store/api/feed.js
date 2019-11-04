import _ from "lodash";
import ReduxHelper from "../reduxHelper";
import nameModules from "./nameModules";

export const types = ReduxHelper.type(nameModules.FEED)({
  FETCH_FEED_START: "E",
  FETCH_FEED_SUCCESS: "E",
  FETCH_FEED_FAIL: "E",
  ADD_MANY_FEED: "R"
});

export const actions = ReduxHelper.action(types);

const getFeed = state => _.get(state, "feed.common");

export const selectors = { getFeed };
