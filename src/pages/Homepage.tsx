import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

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
    },
    strong: {
      color: theme.palette.secondary.main,
    },
  };
});

export default function Homepage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={12}>
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
        </Grid>
        <Grid item md={6}>
          <Card>
            <CardHeader
              title={"Experiências"}
              titleTypographyProps={{
                align: "center",
                color: "primary",
                gutterBottom: true,
              }}
            />
            <CardContent>
              <Container>
                <Grid container spacing={2}>
                  <Grid item md={12}>
                    <Card className={classes.card}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            Vinicius
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            Minha experiência profissional se inicia na{" "}
                            <span className={classes.strong}>Skyone</span> em
                            setembro de 2023 como estagiário em desenvolvimento{" "}
                            <span className={classes.strong}>front-end</span>.
                          </Typography>
                        </CardContent>
                      </div>
                      <CardMedia
                        className={classes.media}
                        component="img"
                        image="./Foto1.jpg"
                        title="Foto 1"
                        alt="Foto 1"
                      />
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
