import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
  makeStyles,
} from "@material-ui/core";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginInline: 12,
    },
    toolbar: {
      display: "flex",
      justifyContent: "center",
    },
    text: { width: "100%" },
    strong: {
      color: theme.palette.primary.main,
    },
    test: {
      position: "absolute",
      inset: "33% 0 33% 0",
    },
    buttons: {
      marginInline: 10,
      display: "flex",
      gap: 16,
    },
  };
});

export default function Homepage() {
  const classes = useStyles();
  return (
    <Container className={classes.test} style={{ scrollbarGutter: "stable" }}>
      <Card
        style={{
          boxShadow: "none",
          backgroundColor: "inherit",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={7}>
            <CardContent>
              <Typography
                className={classes.text}
                variant="h2"
                component={"h1"}
                color="textPrimary"
              >
                Hi, I'm <span className={classes.strong}>Vinicius Madeira</span>
              </Typography>
              <Typography
                className={classes.text}
                variant="h6"
                component={"p"}
                color="textSecondary"
                gutterBottom
              >
                {"Front-end Developer"}
              </Typography>
              <Typography
                className={classes.text}
                style={{ fontWeight: 400 }}
                variant="h6"
                component={"p"}
                color="textSecondary"
                gutterBottom
              >
                {
                  "I'm 23 years old, currently an intern at an IT company and undergraduate student in System Analysis and Development. I'm very passionate about learning new techonologies and overall stuff about life."
                }
              </Typography>
              <Typography
                className={classes.text}
                style={{ fontWeight: 400, marginTop: 16 }}
                variant="body1"
                component={"p"}
                color="textSecondary"
              >
                {
                  "If you wanna know more about me feel free to check out my other pages where you can see more about my education and stuff that I do on my free time."
                }
              </Typography>
            </CardContent>

            <div className={classes.buttons}>
              <Link to="/about">
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<CallMadeIcon />}
                >
                  {"About me"}
                </Button>
              </Link>

              <Link to="/hobbies">
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<CallMadeIcon />}
                >
                  {"Hobbies"}
                </Button>
              </Link>
            </div>
          </Grid>

          <Grid item md={5}>
            <ImageList rowHeight={160} cols={5}>
              <ImageListItem cols={1}>
                <img src="./Foto3.jpg" alt={"Foto 3"} />
              </ImageListItem>
              <ImageListItem cols={2}>
                <img src="./Foto2.jpg" alt={"Foto 2"} />
              </ImageListItem>
              <ImageListItem cols={3}>
                <img src="./Foto4.jpg" alt={"Foto 4"} />
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
