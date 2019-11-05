import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";
import { types as feedTypes, actions as feedActions } from "../../api/feed";

const fetchFeedSuccessEpic = action$ =>
  action$.pipe(
    ofType(feedTypes.FETCH_FEED_SUCCESS),
    switchMap(
      ({ payload }) =>
        new Promise(resolve => resolve(feedActions.addManyFeed(payload)))
    )
  );

export default fetchFeedSuccessEpic;
