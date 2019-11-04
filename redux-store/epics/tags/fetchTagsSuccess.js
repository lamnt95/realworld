import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";
import { types as tagsTypes, actions as tagsActions } from "../../api/tags";

const fetchTagsSuccess = action$ =>
  action$.pipe(
    ofType(tagsTypes.FETCH_TAGS_SUCCESS),
    switchMap(
      ({ payload }) =>
        new Promise(resolve => {
          resolve(tagsActions.addManyTags(payload));
        })
    )
  );

export default fetchTagsSuccess;
