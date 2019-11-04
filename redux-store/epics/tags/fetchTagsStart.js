import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";
import { types as tagsTypes, actions as tagsActions } from "../../api/tags";
import tagServices from "../../../src/services/tagServices";

const fetchTagsStartEpic = action$ =>
  action$.pipe(
    ofType(tagsTypes.FETCH_TAGS_START),
    switchMap(
      () =>
        new Promise(resolve => {
          tagServices
            .fetchTag()
            .then(tags => {
              resolve(tagsActions.fetchTagsSuccess(tags));
            })
            .catch(error => {
              resolve(tagsActions.fetchTagsFail(error));
            });
        })
    )
  );

export default fetchTagsStartEpic;
