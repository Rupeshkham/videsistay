/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import PropTypes from "prop-types";

// Material Kit 2 React examples
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import assistance from "../../../../assets/images/expert-assistance-insight.svg";
import bookings from "../../../../assets/images/fast-and-easy-bookings-insight.svg";
import guarantee from "../../../../assets/images/price-match-guarantee-insight.svg";
import verified from "../../../../assets/images/verified-listings-insight.svg";

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
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
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
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Welcome to Videsi Stays"
              description="Founded in 2023, Videsi Stays aims to provide affordable and comfortable housing for students. Our team is dedicated to creating a supportive environment that helps students thrive both academically and personally."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
