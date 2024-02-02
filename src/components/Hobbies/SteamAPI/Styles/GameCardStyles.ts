import { Theme, createStyles, makeStyles } from "@material-ui/core";

export const useGameStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 150,
    },
    strong: {
      color: theme.palette.primary.main,
    },
    button: {
      padding: "8px 0",
    },
  })
);
