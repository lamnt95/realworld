import _ from "lodash";
import ReduxHelper from "../reduxHelper";
import nameModules from "./nameModules";

export const types = ReduxHelper.type(nameModules.TUTS)({
  ADD_MANY_TUTS: "R"
});

export const actions = ReduxHelper.action(types);

const getTuts = (state, id) => _.get(state, `tuts.${id}`);

const getTutsAuthor = (state, id) => _.get(state, `tuts.${id}.author.username`);

export const selectors = { getTuts, getTutsAuthor };
