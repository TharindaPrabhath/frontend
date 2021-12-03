import axios from "./axios";

export const getTodos = async () => {
  await axios.get("/todos");
};
