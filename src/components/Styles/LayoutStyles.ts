import { makeStyles } from "@material-ui/core";

export const useLayoutStyles = makeStyles((theme) => {
  return {
    page: {
      width: "100%",
    },
    toolbar: theme.mixins.toolbar,
  };
});