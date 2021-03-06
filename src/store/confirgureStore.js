import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";
import rootEpic from "./rootEpic";
import rootReducer from "./rootReducer";

export default initialState => {
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware];
  const composeEnhances = composeWithDevTools;
  const enhances = [applyMiddleware(...middlewares)];
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhances(...enhances)
  );
  epicMiddleware.run(rootEpic);
  return store;
};
