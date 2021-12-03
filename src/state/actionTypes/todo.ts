import Todo from "../../models/Todo";

export enum TodoActionType {
  ADD_TODO,
  GET_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
}

interface AddTodoAction {
  type: TodoActionType.ADD_TODO;
  payload: {
    item: Todo;
  };
}

interface GetTodosAction {
  type: TodoActionType.GET_TODOS;
  payload: {
    items: Todo[];
  };
}

interface UpdateTodoAction {
  type: TodoActionType.UPDATE_TODO;
  payload: {
    id: string;
    item: Todo;
  };
}

interface DeleteTodoAction {
  type: TodoActionType.DELETE_TODO;
  payload: {
    id: string;
  };
}

export type TodoAction =
  | AddTodoAction
  | GetTodosAction
  | UpdateTodoAction
  | DeleteTodoAction;
