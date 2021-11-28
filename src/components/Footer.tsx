// mui
import { Theme } from "@mui/material";
import grey from "@mui/material/colors/grey";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Box from "@mui/system/Box";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    boxShadow: theme.shadows[1],
    color: grey[600],
    padding: theme.spacing(3),
    textAlign: "center",
    // backgroundColor: theme.palette.primary.dark,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography variant="h6" fontSize="0.8em">
        © All Rights Reserved
      </Typography>
    </Box>
  );
}
