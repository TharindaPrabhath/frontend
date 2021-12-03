// redux
import { combineReducers } from "redux";

// reducers
import todoReducer from "./todoReducer";

const reducers = combineReducers({
  todo: todoReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
