import HeroSection from "../components/Home/HeroSection";
import Parallax from "../components/Home/Parallax";

const Home = () => {
  return (
    <div className=" container mx-auto px-5 py-2">
      <HeroSection />
      <Parallax />
      <HeroSection />
    </div>
  );
};

export default Home;
