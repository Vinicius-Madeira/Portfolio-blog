import { useHobbyStyles } from "./Styles/HobbyCardStyles";
import { HobbyProps } from "./HobbyData";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

interface HobbyCardProps {
  hobby: HobbyProps;
}

export default function HobbyCard({ hobby }: HobbyCardProps) {
  const classes = useHobbyStyles();
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
