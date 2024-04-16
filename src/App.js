import "./App.css";
import { Helmet } from "react-helmet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./componentsMainPage/header/header.js";
import RecomendBlock from "./componentsMainPage/RecomendBlockGym/recomendBlock.js";
import AboutUS from "./componentsMainPage/AboutUs/aboutUs.js";
import Services from "./componentsMainPage/Servives/OurServices.js";
import KartochkiTreners from "./componentsMainPage/Servives/KartochkiTreners.js";
import TeamGroup from "./componentsMainPage/Team/OurTeam.js";
import Footer from "./componentsMainPage/footer/footer.js";

import HeaderServices from "./componentsServicePage/HeaderServices/HeaderServices.js";
import Schedule from "./componentsServicePage/SchedyleBlock/Schedule.js";

import HeaderTeamPage from "./compoentsTeamPage/HeaderTeamPage/HeaderTeamPage.js";
import TeamPageDudes from "./compoentsTeamPage/TeamPageTreners/TeamPageTreners.js";
import ReviewsPage from "./compoentsTeamPage/Reviews/Reviews.js";

import HeaderPrice from "./componentsPricePage/HeaderPricePage/HeaderPricePage.js";

import Prices from "./componentsPricePage/Prices/Prices.js";

import ContactUs from "./ContactUsPage/ContactUsPage.js";

import SimpleRegistrationForm from "./RegistrationGestPage/RegistrationGestPage.js";
import SimpleAutorizationForm from "./AuthorizationGestPage/AuthorizationGestPage.js";

import TestPage from "./testPage/testPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    // errorElement: <Error404 />
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/TeamPage",
    element: <TeamTreners />,
  },
  {
    path: "/Pricing",
    element: <PricingPage />,
  },
  {
    path: "/ContactUs",
    element: <ContactUsPage />,
  },
  {
    path: "/Registration",
    element: <SimpleRegistration />,
  },
  {
    path: "/Authorization ",
    element: <SimpleAutorization />,
  },
  {
    path: "/TestPage",
    element: <Test />,
  },
]);

function MainPage() {
  return (
    <div className="ProjectGym">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>

        <meta name="description" content="All about gym and just gym" />
        <meta name="viewport" content="width=device-width" />
      </Helmet>
      <Header />
      <AboutUS />
      <RecomendBlock />
      <Services />
      <KartochkiTreners />
      <TeamGroup />
      <Footer />
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="ProjectGymServicesPage">
      <HeaderServices />
      <RecomendBlock />
      <Services />
      <KartochkiTreners />
      <Schedule />
      <Footer />
    </div>
  );
}

function TeamTreners() {
  return (
    <div className="TeamPage">
      <HeaderTeamPage />
      <TeamPageDudes />
      <ReviewsPage />
      <Footer />
    </div>
  );
}

function PricingPage() {
  return (
    <div className="TeamPage">
      <HeaderPrice />
      <Prices />
      <Footer />
    </div>
  );
}
function ContactUsPage() {
  return (
    <div className="Contact">
      <ContactUs />
    </div>
  );
}
function SimpleRegistration() {
  return (
    <div className="Registrations">
      <SimpleRegistrationForm />
    </div>
  );
}
function SimpleAutorization() {
  return (
    <div className="Authoriz">
      <SimpleAutorizationForm />
    </div>
  );
}

function Test() {
  return (
    <div className="test">
      <TestPage />
    </div>
  );
}

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
