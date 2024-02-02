import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { RouteName, routes } from "../Router";
import { Avatar, Breadcrumbs, Tooltip, Typography } from "@material-ui/core";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import CodeIcon from "@material-ui/icons/Code";
import { ReactElement } from "react";
import { GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import { useStyles } from "./Styles/HeaderStyles";

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
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0} color="default">
        <Toolbar variant="dense" className={classes.wrapper}>
          <Tooltip title="Vinicius Madeira" arrow placement="right">
            <Avatar src="./Foto1.jpg" alt="MeInTheCar" />
          </Tooltip>
          <Typography className={classes.text}>Vinicius Madeira</Typography>
          <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
            {routes.map((route) => {
              return (
                <Link
                  key={route?.name}
                  color="inherit"
                  to={route?.path}
                  className={`${classes.link} ${
                    location.pathname === route?.path ? `${classes.active}` : ""
                  }`}
                  onClick={() => navigate(route?.path)}
                >
                  {getRouteIcon(route?.name)}
                  {route?.name}
                </Link>
              );
            })}
          </Breadcrumbs>
          <div className={classes.icons}>
            <Avatar>
              <Link
                to="https://github.com/Vinicius-Madeira"
                target="_blank"
                rel="noopener"
              >
                <Tooltip title="GitHub" arrow>
                  <GitHub />
                </Tooltip>
              </Link>
            </Avatar>
            <Avatar>
              <Link
                to="https://www.instagram.com/vinimad13?igsh=MWdwdzBiMmoxajhjdw=="
                target="_blank"
                rel="noopener"
              >
                <Tooltip title="Instagram" arrow>
                  <Instagram />
                </Tooltip>
              </Link>
            </Avatar>
            <Avatar>
              <Link
                to="https://www.linkedin.com/in/vinicius-madeira-6031511a0/"
                target="_blank"
                rel="noopener"
              >
                <Tooltip title="LinkedIn" arrow>
                  <LinkedIn />
                </Tooltip>
              </Link>
            </Avatar>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
