import _ from "lodash";
import Immutable from "seamless-immutable";
import duckUntils from "../../utils/duck.utils";
import authServices from "../../services/authServices";
import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";

export const types = {
  INIT_AUTH_START: "AUTH/INIT_AUTH_START",
  INIT_AUTH_SUCCESS: "AUTH/INIT_AUTH_SUCCESS",
  INIT_AUTH_FAIL: "AUTH/INIT_AUTH_FAIL",
  ADD_ACCESS_TOKEN: "AUTH/ADD_ACCESS_TOKEN"
};

export const actions = {
  initAuthStart: (payload, meta) => ({
    type: types.INIT_AUTH_START,
    payload,
    meta
  }),
  initAuthSuccess: (payload, meta) => ({
    type: types.INIT_AUTH_SUCCESS,
    payload,
    meta
  }),
  initAuthFail: (error, meta) => ({ type: types.INIT_AUTH_FAIL, error, meta }),
  addAccessToken: payload => ({ type: types.ADD_ACCESS_TOKEN, payload })
};

const getAccessToken = state => _.get(state, "auth.accessToken");

export const selectors = {
  getAccessToken
};

export const initialState = Immutable.from({
  accessToken: undefined
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ACCESS_TOKEN: {
      const accessToken = _.get(action, "payload.user.token");
      const newState = Immutable.setIn(state, ["accessToken"], accessToken);
      return duckUntils.updateState(newState, state);
    }
    default: {
      return state;
    }
  }
};

export const initAuthStartEpic = (action$, store) =>
  action$.pipe(
    ofType(types.INIT_AUTH_START),
    switchMap(
      ({ meta }) =>
        new Promise(resolve => {
          authServices
            .login()
            .then(payload => {
              resolve(actions.initAuthSuccess(payload, meta));
            })
            .catch(error => {
              resolve(actions.initAuthFail(error, meta));
            });
        })
    )
  );

export const initAuthSuccessEpic = action$ =>
  action$.pipe(
    ofType(types.INIT_AUTH_SUCCESS),
    switchMap(
      ({ payload }) =>
        new Promise(resolve => {
          resolve(actions.addAccessToken(payload));
        })
    )
  );

export const epics = [initAuthStartEpic, initAuthSuccessEpic];
