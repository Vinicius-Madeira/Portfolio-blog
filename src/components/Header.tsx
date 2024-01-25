import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { routes } from "./Router";
import { Breadcrumbs, Typography } from "@material-ui/core";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 20,
    },
    navBtn: {
      flexGrow: 0,
      paddingInline: 16,
      marginRight: 8,
    },
    textBtn: {
      fontWeight: 500,
    },
    active: {
      background: "rgba(34, 34, 34, 0.1)",
    },
    link: {
      display: "flex",
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(path: string) {
    navigate(path);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to={routes[0].path} className={classes.link}>
              <HomeIcon className={classes.icon} />
              {routes[0].name}
            </Link>

            <Link color="inherit" to={routes[1].path} className={classes.link}>
              <HomeIcon className={classes.icon} />
              {routes[1].name}
            </Link>

            <Link color="inherit" to={routes[2].path} className={classes.link}>
              <HomeIcon className={classes.icon} />
              {routes[2].name}
            </Link>
          </Breadcrumbs>
          {/* {routes.map((route) => {
            return (
              <Button
                key={route.name}
                variant="text"
                color="default"
                className={
                  location.pathname === route.path
                    ? `${classes.navBtn} ${classes.active}`
                    : classes.navBtn
                }
                onClick={() => handleClick(route.path)}
              >
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className={classes.textBtn}
                >
                  {route.name}
                </Typography>
              </Button>
            );
          })} */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
