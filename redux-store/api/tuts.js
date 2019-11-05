import _ from "lodash";
import ReduxHelper from "../reduxHelper";
import nameModules from "./nameModules";

export const types = ReduxHelper.type(nameModules.TUTS)({
  ADD_MANY_TUTS: "R"
});

export const actions = ReduxHelper.action(types);

const getTuts = state => _.get(state, "tuts");

export const selectors = { getTuts };
