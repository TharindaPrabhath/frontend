// react
import { useState } from "react";

// mui
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      minWidth: "25em",
      width: "40%",
    },
    padding: "2em 1em",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const initialFormData = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Signup() {
  const [formData, setFormData] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>(initialFormData);
  const classes = useStyles();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" textAlign="center">
        Create a new Account
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          name="email"
          label="Email"
          required
          value={formData?.email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          required
          value={formData?.password}
          onChange={handleChange}
        />
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          required
          value={formData?.confirmPassword}
          onChange={handleChange}
        />
        <Link to="/login">
          <Typography textAlign="center" color="black">
            I already have an account
          </Typography>
        </Link>
        <Button variant="contained" type="submit">
          Signup
        </Button>
      </form>
    </Paper>
  );
}
