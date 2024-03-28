import "./App.css";
import Header from "./componentsFirstPage/header/header.js";
import RecomendBlock from "./componentsFirstPage/RecomendBlockGym/recomendBlock.js";
import AboutUS from "./componentsFirstPage/AboutUs/aboutUs.js";
import Services from "./componentsFirstPage/Servives/OurServices.js";
import KartochkiTreners from "./componentsFirstPage/Servives/KartochkiTreners.js";
import TeamGroup from "./componentsFirstPage/Team/OurTeam.js";
import Footer from "./componentsFirstPage/footer/footer.js";
import HeaderServices from "./componentsSecondPage/HeaderServices/HeaderServices.js";

import { Helmet } from "react-helmet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  //…уже написанный код для главной страницы,
  {
    path: "/Services",
    element: <HeaderServices />,
    // errorElement: <Error404 />,
  },
]);

function SitePage() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default function App() {
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
      <HeaderServices />
    </div>
  );
}
