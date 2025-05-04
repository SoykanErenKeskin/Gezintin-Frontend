import Navbar from "../home_components/Navbar";
import Hero from "../home_components/Hero";
import Features from "../home_components/Features";
import Description1 from "../home_components/description1";
import Description2 from "../home_components/description2";
import Comments from "../home_components/comments";
import Footer from "../home_components/Footer";
import Totop from "../home_components/toTop";

const home = () => {
  return (
    <div>
      <div className="space-y-12 container mx-auto px-8">
        <Navbar />
        <Hero />
        <Features />
        <Description1 />
        <Comments />
        <Description2 />
      </div>
      <Totop />
      <Footer />
    </div>
  );
};

export default home;
