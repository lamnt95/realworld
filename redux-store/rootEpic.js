import { combineEpics } from "redux-observable";
import authEpics from "./epics/auth";
import feedEpics from "./epics/feed";

export default combineEpics(...authEpics, ...feedEpics);
