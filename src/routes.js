import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "pages/LandingPages/AboutUs";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import PresentationPage from "layouts/pages/presentation";
// Assuming you have a Home component to import
// import Home from "pages/LandingPages/Home";

const routes = [
  {
    name: "home",
    icon: <Icon>home</Icon>,
    route: "/",
    component: <PresentationPage />,
  },
  {
    name: "about us",
    icon: <Icon>info</Icon>,
    route: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "contact us",
    icon: <Icon>contact_mail</Icon>,
    route: "/contact-us",
    component: <ContactUs />,
  },
];

export default routes;
