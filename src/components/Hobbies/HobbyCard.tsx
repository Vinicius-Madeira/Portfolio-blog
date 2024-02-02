import { useStyles } from "./Styles/HobbyCardStyles";
import { Hobby } from "./HobbyData";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

interface HobbyCardProps {
  hobbyProps: Hobby;
}

export default function HobbyCard({ hobbyProps: hobby }: HobbyCardProps) {
  const classes = useStyles();
  return (
    <Card elevation={0}>
      {hobby?.imgSrc ? (
        <CardMedia
          className={classes.media}
          component="img"
          image={hobby?.imgSrc}
          title={hobby?.imgTitle}
          alt={hobby?.imgTitle + " Banner"}
        />
      ) : null}
      <CardContent>
        <Typography variant="h5" component="h2" noWrap gutterBottom>
          {hobby?.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {hobby?.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
