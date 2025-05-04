"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Totop from "../components/toTop";
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
