import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { RouteName, routes } from "../Router";
import { Breadcrumbs } from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import CodeIcon from "@material-ui/icons/Code";
import { ReactElement } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 20,
    },
    breadcrumb: {
      display: "flex",
      margin: "auto",
      "& :hover > *:is(:hover)": {
        textDecoration: "underline",
      },
      "& :active > *:is(:active)": {
        opacity: 0.8,
      },
    },
    link: {
      display: "flex",
      textDecoration: "none",
      "& :first-child": {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
      },
    },
  })
);

// Checks each routeName and provides an icon element to it
function getRouteIcon(name: RouteName): ReactElement {
  switch (name) {
    case RouteName.HOME:
      return <HomeIcon />;
    case RouteName.ABOUT_ME:
      return <EmojiPeopleIcon />;
    case RouteName.HOBBIES:
      return <SportsEsportsIcon />;
    default:
      return <CodeIcon />;
  }
}

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
            {routes.map((route) => {
              return (
                <Link
                  key={route.name}
                  color="inherit"
                  to={route.path}
                  className={classes.link}
                >
                  {getRouteIcon(route.name)}
                  {route.name}
                </Link>
              );
            })}
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
