import HeroSection from "../components/Home/HeroSection";
import Parallax from "../components/Home/Parallax";
import TopBooks from "../components/Home/TopBooks";

const Home = () => {
  return (
    <div className=" container mx-auto px-5 py-2">
      <HeroSection />
      <Parallax />
      <TopBooks />
      <TopBooks title="New Arrivals" filterId="new" />
      <TopBooks title="Top Favorites" filterId="loved" />
    </div>
  );
};

export default Home;
