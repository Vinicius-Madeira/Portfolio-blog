import {
  Card,
  CardContent,
  CardMedia,
  Theme,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import { Palette } from "@material-ui/icons";

interface GameCardProps {
  name: string;
  id: number;
  playtimeTwoWeeks: number;
  playtimeForever: number;
}

const baseMediaURL = "https://cdn.cloudflare.steamstatic.com/steam/apps";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    strong: {
      color: theme.palette.secondary.main,
    },
  })
);

// Steam API returns the playtime in minutes.
// This function formats the playtime to hours.
function formatPlaytime(time: number): number {
  return time / 60;
}

export default function GameCard({
  name,
  id,
  playtimeTwoWeeks,
  playtimeForever,
}: GameCardProps) {
  const classes = useStyles();
  const bannerURL = `${baseMediaURL}/${id}/header.jpg`;
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        alt={`${name} Banner`}
        image={bannerURL}
        title={`${name} Banner`}
      />
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          Played for:{" "}
          <span className={classes.strong}>
            {formatPlaytime(playtimeTwoWeeks).toFixed(1) + " hour(s)"}
          </span>{" "}
          in the last two weeks
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          Played for:{" "}
          <span className={classes.strong}>
            {formatPlaytime(playtimeForever).toFixed(1) + " hour(s)"}
          </span>{" "}
          in total
        </Typography>
      </CardContent>
    </Card>
  );
}
