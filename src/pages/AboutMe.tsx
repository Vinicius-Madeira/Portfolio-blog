import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { useAboutMeStyles } from "./Styles/AboutMeStyles";

export default function AboutMe() {
  const classes = useAboutMeStyles();
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Card>
            <CardHeader
              title={"Education"}
              titleTypographyProps={{
                align: "center",
                color: "primary",
                gutterBottom: true,
              }}
            />
            <CardContent>
              <Container>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <Card className={classes.card} elevation={0}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            {"UNIP"}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {"My first undergraduate course was in "}
                            <span className={classes.strong}>
                              {"Biomedical Sciences "}
                            </span>
                            {
                              "at Universidade Paulista. I started it in 2018 and finished in 2021 as a bachelor's adept in "
                            }
                            <span className={classes.strong}>
                              {"clinical analysis"}
                            </span>
                            .
                          </Typography>
                        </CardContent>
                      </div>
                      <CardMedia
                        className={classes.media}
                        component="img"
                        image="./unip-logo.png"
                        title="UNIP Logo"
                        alt="UNIP Logo"
                      />
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Card className={classes.card} elevation={0}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            {"Mackenzie"}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {"I started my second undergrad course in 2023 in "}
                            <span className={classes.strong}>
                              {"System Analysis and Development, "}
                            </span>
                            {
                              "at Universidade Presbiteriana Mackenzie. I'm currently at the 3rd semester, and expected conclusion is june 2025. "
                            }
                          </Typography>
                        </CardContent>
                      </div>
                      <CardMedia
                        className={classes.media}
                        component="img"
                        image="./mackenzie-logo.png"
                        title="Mackenzie Logo"
                        alt="Mackenzie Logo"
                      />
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={12}>
          <Card>
            <CardHeader
              title={"Experience"}
              titleTypographyProps={{
                align: "center",
                color: "primary",
                gutterBottom: true,
              }}
            />
            <CardContent>
              <Container>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <Card className={classes.card} elevation={0}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            {"UNIP"}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {"My very first professional experience began at "}
                            <span className={classes.strong}>
                              {"UNIP"}
                            </span>{" "}
                            {" in january 2021 as an intern in "}
                            <span className={classes.strong}>
                              {"clinical analysis"}
                            </span>
                            {" and ended in december 2021."}
                          </Typography>
                        </CardContent>
                      </div>
                      <CardMedia
                        className={classes.media}
                        component="img"
                        image="./unip-logo.png"
                        title="UNIP Logo"
                        alt="UNIP Logo"
                      />
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Card className={classes.card} elevation={0}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            {"Skyone"}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {"My experience at "}
                            <span className={classes.strong}>{"Skyone"}</span>
                            {" began in september 2023 as an intern in "}
                            <span className={classes.strong}>front-end</span>
                            {" development and that's where I'm currently at."}
                          </Typography>
                        </CardContent>
                      </div>
                      <CardMedia
                        className={classes.media}
                        component="img"
                        image="./skyone-logo2.png"
                        title="Skyone Logo"
                        alt="Skyone Logo"
                      />
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={12}>
          <Card>
            <CardHeader
              title={"Knowledge"}
              titleTypographyProps={{
                align: "center",
                color: "primary",
                gutterBottom: true,
              }}
            />
            <CardContent>
              <Container>
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <Card className={classes.card} elevation={0}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            {"Front-end"}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {
                              "Knowledge in the languages HTML, CSS Javascript, Typescript, and the libraries React and Material-UI."
                            }
                          </Typography>
                        </CardContent>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item md={4}>
                    <Card className={classes.card} elevation={0}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            {"Back-end"}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {
                              "Primary knowledge in the programming languages Java, Go, and the frameworks Spring and Spring Boot."
                            }
                          </Typography>
                        </CardContent>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item md={4}>
                    <Card className={classes.card} elevation={0}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            {"Others"}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {
                              "Knowledge in the versioning tool Git, MySQL and PostgreSQL databases, linux-based systems, and SOLID design pattern."
                            }
                          </Typography>
                        </CardContent>
                      </div>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={12}>
          <Card>
            <CardHeader
              title={"Curiosity"}
              titleTypographyProps={{
                align: "center",
                color: "primary",
                gutterBottom: true,
              }}
            />
            <CardContent>
              <Container>
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <Card className={classes.card} elevation={0}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            {"Favorite Artists"}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {
                              "My favorite band is twenty one pilots, but at the moment I'm really into Eve and 米津玄師."
                            }
                          </Typography>
                        </CardContent>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item md={4}>
                    <Card className={classes.card} elevation={0}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            {"Favorite Foods"}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {
                              "My favorite dishes are Parmigiana, meat/chicken Pancakes and Lasagna."
                            }
                          </Typography>
                        </CardContent>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item md={4}>
                    <Card className={classes.card} elevation={0}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            {"Favorite Shows"}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {
                              "My favorite shows are Brooklyn nine-nine, Avatar: the last airbender and One Piece."
                            }
                          </Typography>
                        </CardContent>
                      </div>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
