import ReduxHelper from "../reduxHelper";
import feedConductor from "./feed";
import nameModules from "../api/nameModules";

const conductor = store => next => action => {
  const { type } = action || {};
  const nameModule = ReduxHelper.getNameModule(type);
  switch (nameModule) {
    case nameModules.FEED: {
      feedConductor(store, action);
      break;
    }
    default:
      break;
  }

  next(action);
};

export default conductor;
