import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginInline: 12,
    },
    toolbar: {
      display: "flex",
      justifyContent: "center",
    },
    text: {
      width: "55%",
    },
    name: {
      color: theme.palette.secondary.main,
    },
  };
});

export default function Homepage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <Typography
          className={classes.text}
          variant="h2"
          component={"h1"}
          color="textPrimary"
        >
          Olá! Sou <span className={classes.name}>Vinicius Madeira</span>,
          desenvolvedor front-end
        </Typography>
      </div>
    </div>
  );
}
