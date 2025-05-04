import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Description1 from "../components/description1";
import Description2 from "../components/description2";
import Comments from "../components/comments";
import Footer from "../components/Footer";
import Totop from "../components/toTop";

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
