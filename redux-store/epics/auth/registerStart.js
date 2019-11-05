import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";
import authServices from "../../../src/services/authServices";
import { types as authTypes, actions as authActions } from "../../api/auth";

const registerStartEpic = action$ =>
  action$.pipe(
    ofType(authTypes.REGISTER_START),
    switchMap(
      ({ payload, meta }) =>
        new Promise(resolve => {
          authServices
            .register(payload)
            .then(res => {
              resolve(authActions.registerSuccess(res, meta));
            })
            .catch(error => {
              resolve(authActions.registerFail(error, meta));
            });
        })
    )
  );

export default registerStartEpic;
