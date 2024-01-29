import { baseApiURL, key, userID, ResponseData, Game } from "./SteamData";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import GameCard from "./GameCard";
import {
  Backdrop,
  CircularProgress,
  Container,
  Grid,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core";

const fullURL = `${baseApiURL}${key}&steamid=${userID}`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    container: {
      justifyContent: "space-evenly",
    },
  })
);

export default function RecentGames() {
  const classes = useStyles();
  let resp: ResponseData;
  const { isLoading, data } = useQuery({
    queryKey: ["games"],
    queryFn: () =>
      axios.get(fullURL).then((response) => {
        return response.data;
      }),
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return (
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color={"primary"} />
      </Backdrop>
    );
  } else {
    resp = data;
  }

  return (
    <Container>
      <Grid container spacing={2} className={classes.container}>
        {resp.response.games.map((game: Game) => (
          <Grid item key={game.appid} md={4}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
