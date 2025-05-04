import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Totop from "../components/toTop";
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
