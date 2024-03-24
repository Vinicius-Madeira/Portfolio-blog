import { Theme, createStyles, makeStyles } from "@material-ui/core";

export const useHeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 20,
    },
    wrapper: {
      display: "flex",
    },
    breadcrumb: {
      display: "flex",
      margin: "auto",
      "& :hover > a:is(:hover)": {
        textDecoration: "underline",
        textDecorationColor: theme.palette.primary.main,
        textUnderlineOffset: "3px",
        textDecorationThickness: 2,
      },
      "& :active > a:is(:active)": {
        opacity: 0.8,
      },
    },
    link: {
      color: theme.palette.common.black,
      padding: "2px 4px",
      display: "flex",
      borderRadius: 8,
      textDecoration: "none",
      "& :first-child": {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
      },
    },
    active: {
      textDecoration: "underline",
      textDecorationColor: theme.palette.primary.light,
      textUnderlineOffset: "3px",
      textDecorationThickness: 2,
    },
    icons: {
      display: "flex",
      flexDirection: "row",
      "& :nth-child(n)": {
        background: "transparent",
        color: theme.palette.common.black,
        cursor: "pointer",
      },
    },
    text: {
      position: "absolute",
      left: 80,
    },
  })
);