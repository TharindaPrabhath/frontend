// mui
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/system/Box";
import Divider from "@mui/material/Divider";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

// mui-icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// mui-colors
import blue from "@mui/material/colors/blue";
import red from "@mui/material/colors/red";
import Todo from "../models/Todo";
import { isEmpty } from "../utils";

// redux
import { useDispatch } from "react-redux";
import { deleteTodo } from "../state/actions/todo";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: "1em 0.5em",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  row: {
    display: "flex",
    gap: theme.spacing(2),
  },
  bottomRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  editBtn: {
    "&:hover": {
      color: blue[600],
    },
  },
  deleteBtn: {
    "&:hover": {
      color: red[600],
    },
  },
}));

export default function TodoCard({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
  };

  return (
    <Card className={classes.card}>
      <Typography variant="h6" fontSize="1em">
        {todo.title}
      </Typography>
      {!isEmpty(todo.description) && (
        <Typography fontSize="0.9em">{todo.description}</Typography>
      )}
      <Divider />
      <Box className={classes.bottomRow}>
        <Box>
          <Box className={classes.row}>
            <Typography variant="h6" fontSize="0.8em">
              created
            </Typography>
            <Typography fontSize="0.8em">{todo.createdAt}</Typography>
          </Box>
          {todo.isUpdated && (
            <Box className={classes.row}>
              <Typography variant="h6" fontSize="0.8em">
                updated
              </Typography>
              <Typography fontSize="0.8em">{todo.updatedAt}</Typography>
            </Box>
          )}
        </Box>
        <Box className={classes.row}>
          <Tooltip title="Edit">
            <IconButton className={classes.editBtn}>
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton className={classes.deleteBtn} onClick={handleDelete}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Card>
  );
}
