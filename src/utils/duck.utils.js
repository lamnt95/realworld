import _ from "lodash";

const updateState = (newState, currentState) => {
  return _.isEqual(newState, currentState) ? currentState : newState;
};

export default { updateState };
