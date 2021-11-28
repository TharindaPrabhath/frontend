import { useState } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import Menu from "@mui/icons-material/Menu";

// constants
import { NAV_LINKS } from "../constants/links";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: theme.palette.secondary.light,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuBtn: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  container: {
    display: "flex",
    gap: theme.spacing(3),
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      gap: theme.spacing(8),
    },
  },
  navLink: {
    cursor: "pointer",
    color: "black",
  },
  avatar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" component="div">
          Simple ToDo
        </Typography>
        <Box className={classes.menuBtn}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "black" }}
            onClick={() => setOpenDrawer(true)}
          >
            <Menu />
          </IconButton>
        </Box>

        <Box className={classes.container}>
          {NAV_LINKS.map((link, index) => {
            return (
              <Link to={link.to} key={index} className={classes.navLink}>
                <Typography variant="h6" component="h6" fontSize="1em">
                  {link.title}
                </Typography>
              </Link>
            );
          })}
        </Box>

        <Drawer
          anchor="top"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <Box
            sx={{ width: "auto" }}
            role="presentation"
            onClick={() => setOpenDrawer(false)}
            onKeyDown={() => setOpenDrawer(false)}
          >
            <List>
              {NAV_LINKS.map((link, index) => (
                <ListItemButton key={index} alignItems="center">
                  <Link to={link.to}>
                    <Typography className={classes.navLink}>
                      {link.title}
                    </Typography>
                  </Link>
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box className={classes.avatar}>
          <Avatar>TP</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
