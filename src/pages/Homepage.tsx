import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@material-ui/core";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { Link } from "react-router-dom";
import { useHomepageStyles } from "./Styles/HomepageStyles";

export default function Homepage() {
  const classes = useHomepageStyles();
  return (
    <Container className={classes.container}>
      <Card elevation={0} className={classes.card}>
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
                className={classes.body}
                variant="h6"
                component={"p"}
                color="textSecondary"
                gutterBottom
              >
                {
                  "I'm 23 years old, currently an intern at an IT company and undergraduate student in System Analysis and Development. I'm very passionate about learning new technologies and overall stuff about life."
                }
              </Typography>
              <Typography
                className={classes.textFooter}
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
            <ImageList rowHeight={320} cols={5}>
              <ImageListItem cols={4}>
                <img src="./Foto4.jpg" alt={"MeAtWork"} />
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
