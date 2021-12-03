// redux
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// reducers
import reducers from "./reducers";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
