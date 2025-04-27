import { Container } from "lucide-react";
import HeroSection from "../components/Home/HeroSection";
import Parallax from "../components/Home/Parallax";
import TopBooks from "../components/Home/TopBooks";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto px-5">
        <HeroSection />
      </div>
      <Parallax />
      <div className="container mx-auto px-10">
        <TopBooks />
        <TopBooks title="New Arrivals" filterId="new" />
        <TopBooks title="Top Rated" filterId="rate" />
      </div>
    </div>
  );
};

export default Home;
