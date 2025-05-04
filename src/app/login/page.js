"use client";
import Navbar from "../home_components/Navbar";
import Footer from "../home_components/Footer";
import Totop from "../home_components/toTop";
import Login from "./loginui";

const login = () => {
  return (
    <div>
      <div className="space-y-12 container mx-auto px-8 mb-12">
        <Navbar />
        <Login />
      </div>
      <Totop />
      <Footer />
    </div>
  );
};

export default login;
