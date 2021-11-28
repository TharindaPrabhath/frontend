// mui
import Box from "@mui/system/Box";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

// components
import TodoCard from "../components/TodoCard";
import { useEffect, useState } from "react";

// axios
import axios from "../utils/axios";

// models
import Todo from "../models/Todo";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    padding: theme.spacing(2),
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
  },
}));

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("/todos")
      .then((res) => {
        setTodos(res.data as Todo[]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box className={classes.box}>
      {todos.map((todo, index) => {
        return <TodoCard key={index} todo={todo} />;
      })}
    </Box>
  );
}
