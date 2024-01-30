import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Theme,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
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
  })
);

export default function AboutMe() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Card>
            <CardHeader
              title={"Formação acadêmica"}
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
                    <Card className={classes.root}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            UNIP
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            Minha primeira graduação foi em{" "}
                            <span className={classes.strong}>Biomedina</span> na
                            Universidade Paulista (UNIP). Iniciei o curso em
                            2018, logo após concluir o ensino médio, e o concluí
                            em 2021 como biomédico bacharel habilitado em{" "}
                            <span className={classes.strong}>
                              análises clínicas
                            </span>
                            .
                          </Typography>
                        </CardContent>
                      </div>
                      <CardMedia
                        className={classes.media}
                        component="img"
                        image="./unip-logo.jpg"
                        title="UNIP Logo"
                        alt="UNIP Logo"
                      />
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Card className={classes.root}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            Mackenzie
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            Iniciei minha segunda graduação em 2023 no curso de{" "}
                            <span className={classes.strong}>
                              Análise e desenvolvimento de sistemas
                            </span>
                            {", "}
                            na Universidade Presbiteriana Mackenzie. Atualmente
                            estou iniciando o 3º semestre letivo com previsão de
                            término para junho de 2025.
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
                  <Grid item md={6}>
                    <Card className={classes.root}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            UNIP
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            Minha experiência profissional se inicia na{" "}
                            <span className={classes.strong}>UNIP</span> em
                            janeiro de 2021 como estagiário em{" "}
                            <span className={classes.strong}>
                              análises clínicas
                            </span>
                            .
                          </Typography>
                        </CardContent>
                      </div>
                      <CardMedia
                        className={classes.media}
                        component="img"
                        image="./unip-logo.jpg"
                        title="UNIP Logo"
                        alt="UNIP Logo"
                      />
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Card className={classes.root}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            Skyone
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            Minha experiência na{" "}
                            <span className={classes.strong}>Skyone</span> em
                            setembro de 2023 como estagiário em desenvolvimento{" "}
                            <span className={classes.strong}>front-end</span> e
                            é onde estou atuando no momento.
                          </Typography>
                        </CardContent>
                      </div>
                      <CardMedia
                        className={classes.media}
                        component="img"
                        image="./skyone-logo-flat.jpg"
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
              title={"Conhecimentos"}
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
                    <Card className={classes.root}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            {"Front-end"}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {
                              "Conhecimento nas linguagens HTML, CSS, Javascript e Typescript, e das bibliotecas React e Material-UI"
                            }
                          </Typography>
                        </CardContent>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item md={4}>
                    <Card className={classes.root}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            {"Back-end"}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {
                              "Conhecimento primário nas linguagens de programação Java e Go, e os frameworks Spring e Spring Boot"
                            }
                          </Typography>
                        </CardContent>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item md={4}>
                    <Card className={classes.root}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant="h5" gutterBottom>
                            {"Diversos"}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {
                              "Conhecimento na ferramenta versionamento Git, bancos de dados MySQL e PostgreSQL, sistemas Linux, e padrão de design SOLID.  "
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
