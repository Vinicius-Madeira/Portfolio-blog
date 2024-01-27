import { Container, Grid, Typography } from "@material-ui/core";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import GameCard from "./GameCard";

const baseURL =
  "https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=";
const key = "62A3EB407918563A91AF7C42CB9FE4C8";
const userID = "76561198089989397";
const fullURL = `${baseURL}${key}&steamid=${userID}`;

interface ResponseData {
  response: {
    total_count: number;
    games: Game[];
  };
}

interface Game {
  appid: number;
  name: string;
  playtime_2weeks: number;
  playtime_forever: number;
  img_icon_url: string;
}

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
          <Grid item key={game.appid}>
            <GameCard
              name={game.name}
              id={game.appid}
              playtimeTwoWeeks={game.playtime_2weeks}
              playtimeForever={game.playtime_forever}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
