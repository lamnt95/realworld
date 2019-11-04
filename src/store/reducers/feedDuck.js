import _ from "lodash";
import Immutable from "seamless-immutable";
import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";
import feedServices from "../../services/feedServices";
import duckUntils from "../../utils/duck.utils";
import { selectors as authSelectors } from "./authDuck";

export const types = {
  FETCH_FEED_START: "FEED/FETCH_FEED_START",
  FETCH_FEED_SUCCESS: "FEED/FETCH_FEED_SUCCESS",
  FETCH_FEED_FAIL: "FEED/FETCH_FEED_FAIL",
  ADD_MANY_FEED: "FEED/ADD_MANY_FEED"
};

export const actions = {
  fetchFeedStart: (payload, meta) => ({
    type: types.FETCH_FEED_START,
    payload,
    meta
  }),
  fetchFeedSuccess: (payload, meta) => ({
    type: types.FETCH_FEED_SUCCESS,
    payload,
    meta
  }),
  fetchFeedFail: (error, meta) => ({
    type: types.FETCH_FEED_FAIL,
    error,
    meta
  }),
  addManyFeed: (payload, meta) => ({
    type: types.ADD_MANY_FEED,
    payload,
    meta
  })
};

const getFeed = state => _.get(state, "feed.common");

export const selectors = { getFeed };

export const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MANY_FEED: {
      const feeds = _.get(action, "payload.articles");
      const feedsID = feeds.map(({ id }) => id);
      const newState = Immutable.setIn(state, ["common"], feedsID);
      return ;
    }

    default: {
      return state;
    }
  }
};

export const fetchFeedStartEpic = (action$, store) =>
  action$.pipe(
    ofType(types.FETCH_FEED_START),
    switchMap(
      () =>
        new Promise(resolve => {
          const state = store.value;
          const accessToken = authSelectors.getAccessToken(state);
          feedServices
            .fetchFeed(accessToken)
            .then(feeds => {
              resolve(actions.fetchFeedSuccess(feeds));
            })
            .catch(error => {
              resolve(actions.fetchFeedFail(error));
            });
        })
    )
  );

export const fetchFeedSuccessEpic = action$ =>
  action$.pipe(
    ofType(types.FETCH_FEED_SUCCESS),
    switchMap(
      ({ payload }) =>
        new Promise(resolve => resolve(actions.addManyFeed(payload)))
    )
  );

export const epics = [fetchFeedStartEpic, fetchFeedSuccessEpic];
