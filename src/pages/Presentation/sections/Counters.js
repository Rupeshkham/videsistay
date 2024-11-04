import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MKBox from "components/MKBox";

// Import images from the src folder
import bed from "../../../assets/images/homepage-beds.svg";
import cities from "../../../assets/images/homepage-cities.svg";
import university from "../../../assets/images/homepage-universities.svg";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <MKBox display="flex" flexDirection="column" alignItems="center" textAlign="center">
              <MKBox
                component="img"
                src={bed}
                alt="Beds Icon"
                sx={{ width: "100%", maxWidth: "50px", mb: 2 }}
              />
              <Typography variant="h4" component="h2">
                1M+ Beds
              </Typography>
              <Typography variant="body2">
                Book your perfect place from an extensive list of options.
              </Typography>
            </MKBox>
          </Grid>

          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <MKBox
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              sx={{ mx: "auto" }}
            >
              <MKBox
                component="img"
                src={cities}
                alt="Cities Icon"
                sx={{ width: "100%", maxWidth: "50px", mb: 2 }}
              />
              <Typography variant="h4" component="h2">
                800+ Universities
              </Typography>
              <Typography variant="body2">
                Find the best student homes near prestigious universities.
              </Typography>
            </MKBox>
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>

          <Grid item xs={12} md={4}>
            <MKBox display="flex" flexDirection="column" alignItems="center" textAlign="center">
              <MKBox
                component="img"
                src={university}
                alt="University Icon"
                sx={{ width: "100%", maxWidth: "50px", mb: 2 }}
              />
              <Typography variant="h4" component="h2">
                250+ Global Cities
              </Typography>
              <Typography variant="body2">We operate in major cities around the world.</Typography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
