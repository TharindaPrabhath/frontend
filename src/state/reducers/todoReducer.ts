import Todo from "../../models/Todo";
import { TodoAction, TodoActionType } from "../actionTypes/todo";

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoReducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionType.GET_TODOS:
      return { todos: action.payload.items };

    case TodoActionType.ADD_TODO:
      return { todos: [...state.todos, action.payload.item] };

    case TodoActionType.DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo._id !== action.payload.id),
      };

    default:
      return initialState;
  }
};

export default todoReducer;
