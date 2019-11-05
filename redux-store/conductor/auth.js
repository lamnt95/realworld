import _ from "lodash";
import { types as authTypes } from "../api/auth";
import { actions as userActions } from "../api/user";

function getUserPayloadLoginSuccess(payload) {
  const { user } = payload;
  const { username, bio, image, email } = user || {};
  if (_.isEmpty(username)) return { users: [{}] };
  return { users: [{ username, bio, image, email }] };
}

const authConductor = (store, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case authTypes.REGISTER_SUCCESS:
    case authTypes.INIT_AUTH_SUCCESS: {
      const usersPayload = getUserPayloadLoginSuccess(payload);
      store.dispatch(userActions.addManyUser(usersPayload));
      break;
    }
    default:
      break;
  }
};

export default authConductor;
