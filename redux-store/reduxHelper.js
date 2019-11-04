import _ from "lodash";

const updateState = (newState, currentState) => {
  return _.isEqual(newState, currentState) ? currentState : newState;
};

const type = nameModule => types =>
  _.mapValues(types, (value, key) => `${nameModule}/${key}`);

const createAction = type => (payload, meta, error) => ({
  type,
  payload,
  meta,
  error
});

const action = types => {
  let actions = {};
  actions = _.mapValues(types, value => createAction(value));
  actions = _.mapKeys(actions, (value, key) => _.camelCase(key));
  return actions;
};

export default { updateState, type, action };
