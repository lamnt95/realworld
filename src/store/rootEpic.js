import { combineEpics } from "redux-observable";
import { epics as authEpics } from "./reducers/authDuck";
import { epics as feedEpics } from "./reducers/feedDuck";

export default combineEpics(...authEpics, ...feedEpics);
