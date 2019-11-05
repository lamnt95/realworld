import { types as feedTypes } from "../api/feed";
import { actions as tutsActions } from "../api/tuts";
import { actions as userActions } from "../api/user";

const getTutsPayload = articlesData => ({
  tuts: articlesData.map(
    ({
      title,
      body,
      updatedAt,
      description,
      favorited,
      favoritesCount,
      id,
      slug,
      author
    }) => ({
      title,
      body,
      updatedAt,
      description,
      favorited,
      favoritesCount,
      id,
      slug,
      author: { username: author.username }
    })
  )
});

const getUserPayload = articlesData => ({
  users: articlesData.map(({ author }) => ({
    ...author
  }))
});

const feedConductor = (store, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case feedTypes.FETCH_FEED_SUCCESS: {
      const { articles } = payload || {};
      const tutsPayload = getTutsPayload(articles);
      const userPayload = getUserPayload(articles);
      store.dispatch(tutsActions.addManyTuts(tutsPayload));
      store.dispatch(userActions.addManyUser(userPayload));
      break;
    }
    default:
      break;
  }
};

export default feedConductor;
