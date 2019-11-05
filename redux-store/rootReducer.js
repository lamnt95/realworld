import { combineReducers } from "redux";
import auth from "./reducers/auth";
import feed from "./reducers/feed";
import tuts from "./reducers/tuts";
import tags from "./reducers/tags";
import user from "./reducers/user";

export default (state, action) => {
  const appReducer = combineReducers({
    auth,
    feed,
    tuts,
    tags,
    user
  });
  return appReducer(state, action);
};
