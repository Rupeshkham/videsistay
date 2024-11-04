// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Images
import assistance from "../../../assets/images/expert-assistance-insight.svg";
import bookings from "../../../assets/images/fast-and-easy-bookings-insight.svg";
import guarantee from "../../../assets/images/price-match-guarantee-insight.svg";
import verified from "../../../assets/images/verified-listings-insight.svg";

// Reusable InfoCard component
function InfoCard({ image, title, description }) {
  return (
    <MKBox display="flex" flexDirection="column" alignItems="center" textAlign="center">
      <MKBox
        component="img"
        src={image}
        alt={`${title} Icon`}
        sx={{ width: "100%", maxWidth: "50px", mb: 2 }}
      />
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </MKBox>
  );
}

// Adding PropTypes for InfoCard
InfoCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function Information() {
  return (
    <MKBox component="section" pt={6} mt={6}>
      <Container>
        <Grid container spacing={3}>
          {/* Left side occupying 4 columns with sticky title and description */}
          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              position: "sticky",
              top: "100px", // Adjust as needed for your layout
              padding: 2,
              backgroundColor: "white", // Ensures visibility over other content
              zIndex: 10, // Optional: ensure it stays on top
              height: "fit-content", // Adjust to fit content height
            }}
          >
            <Typography variant="h3" component="h3" gutterBottom>
              Book your Perfect Accommodation
            </Typography>
            <Typography variant="body2">
              Take the hassle out of securing your student home for the best years of your life
            </Typography>
          </Grid>

          {/* Right side occupying 8 columns */}
          <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              {/* First Row of InfoCards */}
              <Grid item xs={12} md={6}>
                <InfoCard
                  image={bookings}
                  title="Quick & Easy Bookings"
                  description="Time is money. Save both when you book with us..."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoCard
                  image={verified}
                  title="100% Verified Listings"
                  description="We promise to deliver what you see on the website..."
                />
              </Grid>
              {/* Second Row of InfoCards */}
              <Grid item xs={12} md={6}>
                <InfoCard
                  image={guarantee}
                  title="Price-Match Guarantee"
                  description="Find a lower price and we'll match it. No questions asked..."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoCard
                  image={assistance}
                  title="24x7 Assistance"
                  description="If you have a doubt or a query, we’re always a call away..."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
