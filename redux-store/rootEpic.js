import { combineEpics } from "redux-observable";
import authEpics from "./epics/auth";
import feedEpics from "./epics/feed";
import tagsEpics from "./epics/tags";

export default combineEpics(...authEpics, ...feedEpics, ...tagsEpics);
