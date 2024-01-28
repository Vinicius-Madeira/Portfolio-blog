import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
} from "@material-ui/core";
import RecentGames from "../components/SteamAPI/RecentGames";

export default function Hobbies() {
  return (
    <Container>
      <Grid container>
        <Grid item md={12}>
          <Card variant="elevation" elevation={5}>
            {/* TODO -> Add background to the card using classes */}
            <CardHeader
              color="secondary"
              title={"What I've been playing..."}
              titleTypographyProps={{
                align: "center",
                color: "primary",
                gutterBottom: true,
              }}
              subheader={"These are my top games at the moment"}
              subheaderTypographyProps={{ variant: "body2", align: "center" }}
            />
            <CardContent>
              <RecentGames />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
