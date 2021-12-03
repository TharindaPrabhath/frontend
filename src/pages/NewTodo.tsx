// mui
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";
import { useState } from "react";
import { isEmpty } from "../utils";

// redux
import { useDispatch } from "react-redux";
import { addTodo } from "../state/actions/todo";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      minWidth: "25em",
      width: "40%",
    },

    padding: "10% 1em",
  },
  paper: {
    padding: "2em 0.5em",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const initialFormData = {
  title: "",
  description: "",
};

export default function NewTodo() {
  const [formData, setFormData] = useState<{
    title?: string;
    description?: string;
  }>(initialFormData);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // validation
    if (isEmpty(formData.title)) return;

    // dispatch the new todo
    // this will add new todo to the db via api via redux store
    dispatch(addTodo(formData.title!, formData.description));

    // // create the todo obj
    // const todo: Todo = {
    //   title: formData.topic!,
    //   description: formData.description,
    //   createdAt: "",
    //   isUpdated: false,
    // };
    // console.log(todo);

    // // send to the api
    // axios
    //   .post("/todos", { ...todo })
    //   .then(() => {
    //     console.log("Success");
    //   })
    //   .catch((err) => console.error(err));
  };

  return (
    <Box className={classes.box}>
      <Paper className={classes.paper}>
        <Typography variant="h6" fontSize="0.9em">
          Create a new Todo
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <TextField
            name="title"
            label="Title"
            required
            value={formData?.title}
            onChange={handleChange}
          />
          <TextField
            name="description"
            label="Description"
            multiline
            rows={5}
            value={formData?.description}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Create
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
