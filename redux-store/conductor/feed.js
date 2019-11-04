import { types as feedTypes } from "../api/feed";
import { actions as tutsActions } from "../api/tuts";

const feedConductor = (store, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case feedTypes.FETCH_FEED_SUCCESS: {
      store.dispatch(tutsActions.addManyTuts(payload));
      break;
    }
    default:
      break;
  }
};

export default feedConductor;
