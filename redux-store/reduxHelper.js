import _ from "lodash";

const updateState = (newState, currentState) => {
  return _.isEqual(newState, currentState) ? currentState : newState;
};

const type = nameModule => types => {};

const action = types => {};

export default { updateState, type, action };
