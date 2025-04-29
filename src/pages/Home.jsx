import HeroSection from "../components/Home/HeroSection";
import Parallax from "../components/Home/Parallax";
import TopBooks from "../components/Home/TopBooks";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto px-5">
        <HeroSection />
      </div>
      <Parallax />

      <TopBooks />
      <TopBooks title="New Arrivals" filterId="new" />
      <TopBooks title="Top Rated" filterId="rate" />
      <Footer />
    </div>
  );
};

export default Home;
