"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Totop from "../components/toTop";
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
