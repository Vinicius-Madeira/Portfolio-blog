import { Theme, createStyles, makeStyles } from "@material-ui/core";


export const useAboutMeStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    media: {
      width: 150,
      height: 150,
      alignSelf: "center",
    },
    strong: {
      color: theme.palette.primary.main,
    },
  })
);