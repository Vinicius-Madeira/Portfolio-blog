import { Container, Grid } from "@material-ui/core";
import RecentGames from "../components/Hobbies/SteamAPI/RecentGames";
import HobbyCard from "../components/Hobbies/HobbyCard";
import { studies, genres } from "../components/Hobbies/HobbyData";
import CardItem from "../components/Hobbies/CardItem";

export default function Hobbies() {
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
              <Grid container spacing={2} justifyContent="space-evenly">
                {studies?.map((hobby) => (
                  <Grid item key={hobby?.title} md={4}>
                    <HobbyCard hobbyProps={hobby} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </CardItem>
        </Grid>

        <Grid item md={12}>
          <CardItem
            title={"Music"}
            subheader={"Some genres that I listen quite a lot"}
          >
            <Container>
              <Grid container spacing={2} justifyContent="space-evenly">
                {genres?.map((genre) => (
                  <Grid item key={genre?.title} md={4}>
                    <HobbyCard hobbyProps={genre} />
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
