import Navbar from "../home_components/Navbar";
import Footer from "../home_components/Footer";
import Totop from "../home_components/toTop";
import Personalized from "./personalized";
import Classic from "./classic";
import Popular from "./popular";
import Tabs from "../home_components/tabs";

const page = () => {
  return (
    <div className="mt-16 p-0">
      <div className="space-y-12 container mx-auto px-8 mt-20 md:mt-16">
        <Navbar />
      </div>
      <Tabs items={items} />

      <Totop />
      <Footer />
    </div>
  );
};

export default page;

const classicIco = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="currentColor"
    className="w-8 sm:w-12 md:w-16 h-16 text-black dark:text-white"
  >
    <path d="M8,1A2,2,0,0,0,6,3V45a2,2,0,0,0,4,0V3A2,2,0,0,0,8,1Z" />
    <path d="M43.55,13.74C38.22,7.18,32.71,7.62,27.84,8c-4.63.37-8.29.66-12.29-4.27A2,2,0,0,0,12,5V22a2,2,0,0,0,.94,1.7,9.09,9.09,0,0,0,4.91,1.46c4,0,7.8-2.62,11.28-5,5.14-3.53,8.49-5.52,11.81-3.45a2,2,0,0,0,2.61-3ZM26.87,16.85C22.22,20,19,22,16,20.78V9.66c4.18,3,8.37,2.63,12.16,2.33,2.54-.2,4.79-.38,7,.31C32.23,13.17,29.46,15.07,26.87,16.85Z" />
  </svg>
);
const personalizedIco = (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-8 sm:w-12 md:w-16 h-16 text-black dark:text-white"
  >
    <title />
    <g data-name="Layer 2" id="Layer_2">
      <path d="M27.11,6.32,25.7,4.91a3.06,3.06,0,0,0-4.24,0L5.9,20.46a3,3,0,0,0,0,4.24l1.42,1.42a3,3,0,0,0,4.24,0L27.11,10.56A3,3,0,0,0,27.11,6.32ZM25.7,9.15l-3.53,3.53h0L19.34,9.86h0l3.53-3.53a1,1,0,0,1,1.42,0L25.7,7.73A1,1,0,0,1,25.7,9.15Z" />
    </g>
  </svg>
);
const popularIco = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 sm:w-12 md:w-16 h-16 text-black dark:text-white"
  >
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
  </svg>
);

const items = [
  { title: "Klasik", content: <Classic />, icon: classicIco },
  {
    title: "Kişiselleştirilmiş",
    content: <Personalized />,
    icon: personalizedIco,
  },
  { title: "Popüler", content: <Popular />, icon: popularIco },
];
