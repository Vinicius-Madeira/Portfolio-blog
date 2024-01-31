import { baseMediaURL, baseStoreURL, formatPlaytime, Game } from "./SteamData";
import { FaSteam } from "react-icons/fa";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Theme,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";

interface GameCardProps {
  game: Game;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 150,
    },
    strong: {
      color: theme.palette.primary.main,
    },
    button: {
      padding: "8px 0",
    },
  })
);

export default function GameCard({ game }: GameCardProps) {
  const classes = useStyles();
  const bannerURL = `${baseMediaURL}/${game.appid}/header.jpg`;
  const StoreGameURL = `${baseStoreURL}/${game.appid}`;

  return (
    <Card variant="outlined">
      <CardMedia
        className={classes.media}
        component="img"
        alt={`${game.name} Banner`}
        image={bannerURL}
        title={`${game.name}`}
      />
      <CardContent>
        <Typography variant="h5" component="h2" noWrap gutterBottom>
          {game.name}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {"Played for "}
          <span className={classes.strong}>
            {formatPlaytime(game.playtime_2weeks).toFixed(1)}
          </span>
          {" hour(s) in the last "}
          <span className={classes.strong}>two weeks</span>
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {"Played for "}
          <span className={classes.strong}>
            {formatPlaytime(game.playtime_forever).toFixed(1)}
          </span>
          {" hour(s) in "}
          <span className={classes.strong}>total</span>
        </Typography>
        <CardActions className={classes.button}>
          <Button
            variant="contained"
            endIcon={<FaSteam />}
            size="small"
            color="primary"
            href={StoreGameURL}
            target="_blank"
            rel="noopener"
          >
            Check it out on Steam
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
