import { Container, Grid, Typography } from "@material-ui/core";
import { useQuery } from "@tanstack/react-query";
import { baseApiURL, key, userID, ResponseData, Game } from "./Data";
import axios from "axios";
import GameCard from "./GameCard";

const fullURL = `${baseApiURL}${key}&steamid=${userID}`;

export default function RecentGames() {
  let resp: ResponseData;
  const { isLoading, data } = useQuery({
    queryKey: ["games"],
    queryFn: () =>
      axios.get(fullURL).then((response) => {
        return response.data;
      }),
    retry: 2,
  });

  if (isLoading) {
    return (
      <Typography variant="h2" align="center">
        Loading...
      </Typography>
    );
  } else {
    resp = data;
  }

  return (
    <Container>
      <Grid container>
        {resp.response.games.map((game: Game) => (
          <Grid item key={game.appid} md={4}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
