import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";
import RecentGames from "../components/Hobbies/SteamAPI/RecentGames";
import HobbyCard from "../components/Hobbies/HobbyCard";
import { hobbies } from "../components/Hobbies/HobbyData";
import { genres } from "../components/Hobbies/MusicData";
import MusicCard from "../components/Hobbies/MusicCard";

const useStyles = makeStyles({
  container: {
    justifyContent: "space-evenly",
  },
});

export default function Hobbies() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Card variant="elevation">
            <CardHeader
              title={"Gaming"}
              titleTypographyProps={{
                align: "center",
                color: "primary",
                gutterBottom: true,
              }}
              subheader={"My top games at the moment"}
              subheaderTypographyProps={{ variant: "body2", align: "center" }}
            />
            <CardContent>
              <RecentGames />
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={12}>
          <Card variant="elevation">
            <CardHeader
              title={"Study"}
              titleTypographyProps={{
                align: "center",
                color: "primary",
                gutterBottom: true,
              }}
              subheader={"Some of the stuff I've been studying"}
              subheaderTypographyProps={{
                variant: "body2",
                align: "center",
              }}
            />
            <CardContent>
              <Container>
                <Grid container spacing={2} className={classes.container}>
                  {hobbies.map((hobby) => (
                    <Grid item key={hobby.title} md={4}>
                      <HobbyCard hobby={hobby} />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={12}>
          <Card variant="elevation">
            <CardHeader
              title={"Music"}
              titleTypographyProps={{
                align: "center",
                color: "primary",
                gutterBottom: true,
              }}
              subheader={"Some genres that I listen quite alot"}
              subheaderTypographyProps={{
                variant: "body2",
                align: "center",
              }}
            />
            <CardContent>
              <Container>
                <Grid container spacing={2} className={classes.container}>
                  {genres.map((genre) => (
                    <Grid item key={genre.title} md={4}>
                      <MusicCard genre={genre} />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
