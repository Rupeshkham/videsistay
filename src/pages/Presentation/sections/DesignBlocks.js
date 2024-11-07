// Import necessary components
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
// Image imports

import Connecticut from "../../../assets/images/university/Connecticut.jpg";
import Massachusetts from "../../../assets/images/university/Massachusetts.jpg";
import comparisonData from "./data/comparisonData";
// import Hampshire from "../../../assets/images/university/New Hampshire.jpg";
// import Jersey from "../../../assets/images/university/New Jersey.jpg";
function DesignBlocks() {
  return (
    <MKBox component="section" my={2} py={2}>
      {/* About Us Section */}
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="About Us"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Welcome to Videsi Stays
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Founded in 2023, Videsi Stays aims to provide affordable and comfortable housing for
            students. Our team is dedicated to creating a supportive environment that helps students
            thrive both academically and personally.
          </MKTypography>
        </Grid>
      </Container>

      {/* Stay Confident Section */}
      <Container sx={{ mt: 6 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Text on Left, Image on Right */}
          <Grid item xs={12} md={6}>
            <MKTypography variant="h3" fontWeight="bold" mb={2}>
              STAY Confident
            </MKTypography>
            <MKTypography variant="body1" color="text">
              You can rest easy knowing you have safe and clean accommodations at Extended Stay
              America. Our hotel staff is committed to your safety, health, and comfort.
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MKBox component="img" src={Connecticut} alt="Stay Confident" width="100%" />
          </Grid>
        </Grid>
      </Container>

      {/* Comfortable Living Section */}
      <Container sx={{ mt: 6 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Image on Left, Text on Right */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <MKBox component="img" src={Massachusetts} alt="Comfortable Living" width="100%" />
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <MKTypography variant="h3" fontWeight="bold" mb={2}>
              Comfortable Living
            </MKTypography>
            <MKTypography variant="body1" color="text">
              All our hotels feature fully furnished, spacious suites with fully equipped kitchens,
              free Wi-Fi, free breakfast*, and premium cable. We also offer on-site guest laundry
              and pet-friendly suites.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Text on Left, Image on Right */}
          <Grid item xs={12} md={6}>
            <MKTypography variant="h3" fontWeight="bold" mb={2}>
              Stress Free
            </MKTypography>
            <MKTypography variant="body1" color="text">
              Let us take some stress away by staying with us this semester! With no binding
              long-term lease agreements, no first and last month&apos;s rent and no cleaning fees,
              we make it easy for you to move in quickly.
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MKBox component="img" src={Connecticut} alt="Stay Confident" width="100%" />
          </Grid>
        </Grid>
      </Container>

      {/* Comfortable Living Section */}
      <Container sx={{ mt: 6 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Image on Left, Text on Right */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <MKBox component="img" src={Massachusetts} alt="Comfortable Living" width="100%" />
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <MKTypography variant="h3" fontWeight="bold" mb={2}>
              Less Bills
            </MKTypography>
            <MKTypography variant="body1" color="text">
              Staying at an extended stay hotel helps you save on normal, everyday costs of living
              like electric, gas, internet, cable, parking and water. And the longer you stay with
              us, the more you save.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mt: 8 }}>
        <MKTypography
          variant="h4"
          fontWeight="bold"
          mb={2}
          display="flex"
          alignItems="center"
          justifyContent="center" // Added this line for horizontal centering
          textAlign="center" // Optional: Ensures text is centered within its container
        >
          See how we compare to apartment living
        </MKTypography>
        <TableContainer component={Paper} sx={{ maxWidth: 800, mx: "auto", my: 4 }} my={6} py={6}>
          <Table sx={{ width: "100%" }}>
            <TableHead sx={{ display: "contents" }}>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bold", width: "33%" }}>
                  Feature
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", width: "33%" }}>
                  Videsi Stays
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", width: "33%" }}>
                  Rental Property
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center" sx={{ width: "33%" }}>
                    {row.feature}
                  </TableCell>
                  <TableCell align="center" sx={{ width: "33%" }}>
                    {row.videsiStays}
                  </TableCell>
                  <TableCell align="center" sx={{ width: "33%" }}>
                    {row.rentalProperty}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </MKBox>
  );
}

export default DesignBlocks;
