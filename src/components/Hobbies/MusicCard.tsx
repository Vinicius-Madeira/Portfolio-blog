import { Card, CardContent, Typography } from "@material-ui/core";
import { Genre } from "./MusicData";

interface MusicCardProps {
  genre: Genre;
}

export default function MusicCard({ genre }: MusicCardProps) {
  return (
    <Card elevation={0}>
      <div>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {genre.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {genre.body}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
