import { Container, Grid, makeStyles } from "@material-ui/core";
import RecentGames from "../components/Hobbies/SteamAPI/RecentGames";
import HobbyCard from "../components/Hobbies/HobbyCard";
import { studies, genres } from "../components/Hobbies/HobbyData";
import CardItem from "../components/Hobbies/CardItem";

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
          <CardItem title={"Gaming"} subheader={"My top games at the moment"}>
            <RecentGames />
          </CardItem>
        </Grid>

        <Grid item md={12}>
          <CardItem
            title={"Study"}
            subheader={"Some of the stuff I've been studying"}
          >
            <Container>
              <Grid container spacing={2} className={classes.container}>
                {studies.map((hobby) => (
                  <Grid item key={hobby.title} md={4}>
                    <HobbyCard hobby={hobby} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </CardItem>
        </Grid>

        <Grid item md={12}>
          <CardItem
            title={"Music"}
            subheader={"Some genres that I listen quite alot"}
          >
            <Container>
              <Grid container spacing={2} className={classes.container}>
                {genres.map((genre) => (
                  <Grid item key={genre.title} md={4}>
                    <HobbyCard hobby={genre} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </CardItem>
        </Grid>
      </Grid>
    </Container>
  );
}
