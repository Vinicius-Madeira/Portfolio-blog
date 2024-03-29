import { makeStyles } from "@material-ui/core";

export const useHomepageStyles = makeStyles((theme) => {
  return {
    root: {
      marginInline: 12,
    },
    toolbar: {
      display: "flex",
      justifyContent: "center",
    },
    text: {
      width: "100%",
    },
    body: {
      fontWeight: 400,
    },
    textFooter: {
      marginTop: 16,
      fontWeight: 400,
    },
    strong: {
      color: theme.palette.primary.main,
    },
    container: {
      position: "absolute",
      inset: "33% 0",
    },
    card: {
      backgroundColor: "inherit",
    },
    buttons: {
      marginInline: 10,
      display: "flex",
      gap: 16,
    },
  };
});
