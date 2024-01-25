import { makeStyles } from "@material-ui/core";
import Header from "./Header";

const useStyles = makeStyles((theme) => {
  return {
    page: {
      width: "100%",
    },
    toolbar: theme.mixins.toolbar,
  };
});

export default function Layout({ children }: any) {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
