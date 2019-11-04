import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";
import { types as feedTypes, actions as feedActions } from "../../api/feed";
import { selectors as authSelectors } from "../../api/auth";
import feedServices from "../../../src/services/feedServices";

const fetchFeedStartEpic = (action$, store) =>
  action$.pipe(
    ofType(feedTypes.FETCH_FEED_START),
    switchMap(
      () =>
        new Promise(resolve => {
          const state = store.value;
          const accessToken = authSelectors.getAccessToken(state);
          feedServices
            .fetchFeed(accessToken)
            .then(feeds => {
              resolve(feedActions.fetchFeedSuccess(feeds));
            })
            .catch(error => {
              resolve(feedActions.fetchFeedFail(error));
            });
        })
    )
  );

export default fetchFeedStartEpic;
