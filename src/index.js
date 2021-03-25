import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import "emoji-mart/css/emoji-mart.css";
import "./assets/css/app.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/icons.min.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { getUserData } from "./store/actions/user";
import { token, userId } from "./utils/helpers/constants";

if (token) {
  store.dispatch(getUserData(userId));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
