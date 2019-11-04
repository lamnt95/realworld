import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";
import { types as authTypes, actions as authActions } from "../api/auth";

const initAuthSuccessEpic = action$ =>
  action$.pipe(
    ofType(authTypes.INIT_AUTH_SUCCESS),
    switchMap(
      ({ payload }) =>
        new Promise(resolve => {
          resolve(authActions.addAccessToken(payload));
        })
    )
  );

export default initAuthSuccessEpic;
