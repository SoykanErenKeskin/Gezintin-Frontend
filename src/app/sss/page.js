import Navbar from "../home_components/Navbar";
import Footer from "../home_components/Footer";
import Totop from "../home_components/toTop";
import Faq from "./Faqui";

const sss = () => {
  return (
    <div>
      <div className="space-y-12 container mx-auto px-8">
        <Navbar />
        <Faq />
      </div>
      <Totop />
      <Footer />
    </div>
  );
};

export default sss;
