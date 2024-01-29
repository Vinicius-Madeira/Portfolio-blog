import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";
import RecentGames from "../components/SteamAPI/RecentGames";
import HobbyCard from "../components/Hobbies/HobbyCard";
import { hobbies } from "../components/Hobbies/HobbyData";

const useStyles = makeStyles({
  container: {
    justifyContent: "space-evenly",
  },
});

export default function Hobbies() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Card variant="elevation" elevation={5}>
            {/* TODO -> Add background to the card using classes */}
            <CardHeader
              title={"Gaming"}
              titleTypographyProps={{
                align: "center",
                color: "primary",
                gutterBottom: true,
              }}
              subheader={"My top games at the moment"}
              subheaderTypographyProps={{ variant: "body2", align: "center" }}
            />
            <CardContent>
              <RecentGames />
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={12}>
          <Card variant="elevation" elevation={5}>
            <CardHeader
              title={"Study"}
              titleTypographyProps={{
                align: "center",
                color: "primary",
                gutterBottom: true,
              }}
              subheader={"Some of the things I've been studying"}
              subheaderTypographyProps={{
                variant: "body2",
                align: "center",
              }}
            />
            <CardContent>
              <Container>
                <Grid container spacing={2} className={classes.container}>
                  {hobbies.map((hobby) => (
                    <Grid item key={hobby.title} md={4}>
                      <HobbyCard hobby={hobby} />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
