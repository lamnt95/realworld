import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";
import {
  types as tutsTypes,
  actions as tutsActions,
  selectors as tutsSelectors
} from "../../api/tuts";
import { selectors as authSelectors } from "../../api/auth";
import tutsServices from "../../../src/services/tutsServices";

const fetchTagsStartEpic = (action$, store) =>
  action$.pipe(
    ofType(tutsTypes.UN_LIKE_TUT_START),
    switchMap(
      ({ payload }) =>
        new Promise(resolve => {
          const state = store.value;
          const { tuts } = payload;
          const { id } = tuts[0];
          const accessToken = authSelectors.getAccessToken(state);
          const slug = tutsSelectors.getTutsSlug(state, id);
          tutsServices
            .unLikeTut(accessToken, slug)
            .then(tuts => {
              resolve(tutsActions.unLikeTutSuccess(tuts));
            })
            .catch(error => {
              resolve(tutsActions.unLikeTutFail(error));
            });
        })
    )
  );

export default fetchTagsStartEpic;
