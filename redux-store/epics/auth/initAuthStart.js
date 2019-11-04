import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";
import authServices from "../../src/services/authServices";
import { types as authTypes, actions as authActions } from "../api/auth";

const initAuthStartEpic = action$ =>
  action$.pipe(
    ofType(authTypes.INIT_AUTH_START),
    switchMap(
      ({ meta }) =>
        new Promise(resolve => {
          authServices
            .login()
            .then(payload => {
              resolve(authActions.initAuthSuccess(payload, meta));
            })
            .catch(error => {
              resolve(authActions.initAuthFail(error, meta));
            });
        })
    )
  );

export default initAuthStartEpic;
