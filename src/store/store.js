import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import chats from "./reducers/chats";
import auth from "./reducers/auth";
import user from "./reducers/user";
import users from "./reducers/users";
import messages from "./reducers/messages";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const rootReducer = combineReducers({
  chats,
  auth,
  user,
  users,
  messages,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
