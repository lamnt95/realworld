import { combineReducers } from "redux";
import auth from "./reducers/auth";
import feed from "./reducers/feedDuck";

export default (state, action) => {
  const appReducer = combineReducers({
    auth,
    feed
  });
  return appReducer(state, action);
};
