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

import HeaderPrice from "./componentsPricePage/HeaderPricePage/HeaderPricePage.js";

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
    path: "/TestPage",
    element: <Test />,
  },
  {
    path: "/Pricing",
    element: <PricingPage />,
  },
]);

function MainPage() {
  return (
    <div className="ProjectGym">
      <Helmet>
        <title>GymProject</title>
        <meta name="description" content="All about gym and just gym" />
        <meta name="viewport" content="width=device-width" />
      </Helmet>
      <Header />
      <RecomendBlock />
      <AboutUS />
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
      <Footer />
    </div>
  );
}

function PricingPage() {
  return (
    <div className="TeamPage">
      <HeaderPrice />

      <Footer />
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
