import "./App.css";
import Header from "./components/header/header.js";
import RecomendBlock from "./components/RecomendBlockGym/recomendBlock.js";
import AboutUS from "./components/AboutUs/aboutUs.js";
import Services from "./components/Servives/OurServices.js";
import KartochkiTreners from "./components/Servives/KartochkiTreners.js";
import TeamGroup from "./components/Team/OurTeam.js";
import Footer from "./components/footer/footer.js";
import { Helmet } from "react-helmet";

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
    </div>
  );
}
