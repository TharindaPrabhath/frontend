// redux
import { Dispatch } from "redux";
import Todo from "../../models/Todo";

// axios
import axios from "../../utils/axios";
import { TodoAction, TodoActionType } from "../actionTypes/todo";

export const getTodos = () => {
  return async (dispatch: Dispatch<TodoAction>) => {
    // get todos from db via api
    await axios
      .get("/todos")
      .then((res) => {
        dispatch({
          type: TodoActionType.GET_TODOS,
          payload: {
            items: res.data as Todo[],
          },
        });
      })
      .catch((err) => console.error(err));
  };
};

export const addTodo = (title: string, description?: string) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    // create the new todo obj
    const newTodo: Todo = {
      _id: "",
      title: title,
      description: description,
      createdAt: "",
      isUpdated: false,
    };
    // add todo to the db via api
    await axios
      .post("/todos", { ...newTodo })
      .then((res) => {
        dispatch({
          type: TodoActionType.ADD_TODO,
          payload: {
            item: res.data,
          },
        });
      })
      .catch((err) => console.error(err));
  };
};

export const deleteTodo = (id: string) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    // delete todo from the db via api
    await axios
      .delete(`/todos/${id}`)
      .then((res) => {
        dispatch({
          type: TodoActionType.DELETE_TODO,
          payload: {
            id: id,
          },
        });
      })
      .catch((err) => console.error(err));
  };
};
