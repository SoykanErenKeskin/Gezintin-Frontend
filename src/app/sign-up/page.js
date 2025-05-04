"use client";
import Navbar from "../home_components/Navbar";
import Footer from "../home_components/Footer";
import Totop from "../home_components/toTop";
import Signup from "./signupui";

const signup = () => {
  return (
    <div>
      <div className="space-y-12 container mx-auto px-8 mb-12">
        <Navbar />
        <Signup />
      </div>
      <Totop />
      <Footer />
    </div>
  );
};

export default signup;
