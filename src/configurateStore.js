import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index.js";

export default function configureStore(preloadedState) {
  const middlewareEnhancer = applyMiddleware(thunk);

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const enhancers = composeEnhancers(middlewareEnhancer);

  const store = createStore(rootReducer, preloadedState, enhancers);
  return store;
}
