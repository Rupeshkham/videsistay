import React from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Select from "@mui/material/Select"; // MUI Select
import MenuItem from "@mui/material/MenuItem"; // MUI MenuItem
import FormControl from "@mui/material/FormControl"; // MUI FormControl
import InputLabel from "@mui/material/InputLabel"; // MUI InputLabel
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
// import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "/",
            label: "Login",
            color: "info",
          }}
        />
      </MKBox>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center" // Centers the form horizontally
        style={{ minHeight: "100vh" }} // Ensures full height for vertical centering
        mt={9}
      >
        {/* <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid> */}
        <Grid
          item
          xs={12}
          sm={10}
          md={8} // 70% width on medium screens
          lg={8} // 70% width on large screens
          xl={8} // 70% width on extra large screens
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={5} // Adjust margin-top to center visually
            mb={5} // Adjust margin-bottom for balance
            mx={1}
            p={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                For further questions, including partnership opportunities, please email
                hello@creative-tim.com or contact using our contact form.
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  {/* Full Name */}
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Full Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>

                  {/* Contact No */}
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="text"
                      variant="standard"
                      label="Contact No"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>

                  {/* Room Type (Dropdown using MUI Select with FormControl and InputLabel) */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="standard">
                      <InputLabel shrink>Room Type</InputLabel>
                      <Select defaultValue="" label="Room Type" fullWidth>
                        <MenuItem value="one_bedroom">One Bedroom</MenuItem>
                        <MenuItem value="private_room">Private Room</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* Move-In Date */}
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="date"
                      variant="standard"
                      label="Move-In Date"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>

                  {/* Move-Out Date */}
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="date"
                      variant="standard"
                      label="Move-Out Date"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>

                  {/* Preferred Location */}
                  <Grid item xs={12}>
                    <MKInput
                      type="text"
                      variant="standard"
                      label="Preferred Location"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    Send Message
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
