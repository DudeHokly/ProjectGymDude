import "./App.css";
import Header from "./components/header/header.js";
import RecomendBlock from "./components/RecomendBlockGym/recomendBlock.js";
import AboutUS from "./components/AboutUs/aboutUs.js";
import Services from "./components/Servives/OurServices.js";
import TeamGroup from "./components/Team/OurTeam.js";
import Footer from "./components/footer/footer.js";

export default function App() {
  return (
    <div>
      <Header />
      <RecomendBlock />
      <AboutUS />
      <Services />
      <TeamGroup />
      <Footer />
    </div>
  );
}
