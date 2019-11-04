import _ from "lodash";
import ReduxHelper from "../reduxHelper";
import nameModules from "./nameModules";

export const types = ReduxHelper.type(nameModules.TUTS)({
  ADD_MANY_TUTS: "R",
  LIKE_TUT_START: "RE",
  LIKE_TUT_SUCCESS: "E",
  LIKE_TUT_FAIL: "E"
});

export const actions = ReduxHelper.action(types);

const getTuts = (state, id) => _.get(state, `tuts.${id}`);

const getTutsFavoritesCount = (state, id) =>
  _.get(state, `tuts.${id}.favoritesCount`);

const getTutsSlug = (state, id) => _.get(state, `tuts.${id}.slug`);

const getTutsAuthor = (state, id) => _.get(state, `tuts.${id}.author.username`);

export const selectors = {
  getTuts,
  getTutsAuthor,
  getTutsFavoritesCount,
  getTutsSlug
};
