import { ResponseData, Game } from "./SteamData";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import GameCard from "./GameCard";
import {
  CircularProgress,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    justifyContent: "space-evenly",
  },
});

const localServer = "http://localhost:8000";

export default function RecentGames() {
  const classes = useStyles();
  let resp: ResponseData;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["games"],
    queryFn: () =>
      axios
        .get(localServer)
        .then((response) => {
          return response.data;
        })
        .catch(function (error) {
          console.error(error.toJSON());
        }),
    staleTime: 1000 * 60 * 5, // 5 minutes until a new request is made to get updated info
  });

  if (isError) {
    return (
      <Typography variant="h5" color="error" align="center">
        {"It wasn't possible to fetch the data for the games"}
      </Typography>
    );
  }
  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress color={"primary"} />
      </div>
    );
  } else {
    resp = data;
  }

  return (
    <Container>
      <Grid container spacing={2} className={classes.container}>
        {resp?.response?.games
          ?.filter((game) => game.appid !== 730)
          .map((game: Game) => (
            <Grid item key={game?.appid} md={4}>
              <GameCard game={game} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
