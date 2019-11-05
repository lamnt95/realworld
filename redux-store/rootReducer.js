import { combineReducers } from "redux";
import auth from "./reducers/auth";
import feed from "./reducers/feed";
import tuts from "./reducers/tuts";

export default (state, action) => {
  const appReducer = combineReducers({
    auth,
    feed,
    tuts
  });
  return appReducer(state, action);
};
