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
  {
    path: "/",
    element: <MainPage/>,
    // errorElement: <Error404 />,
  },
  {
    path: "/services",
    element: <HeaderServices />,
    
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
      <HeaderServices />
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