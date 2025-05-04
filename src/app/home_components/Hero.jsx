import CTA from "./CTA";
const Hero = () => {
  return (
    <div className="border-b-1 border-text-secondary/10 pb-16 mt-24 lg:mt-36 lg:mb-35">
      <div className="flex justify-center items-center flex-wrap">
        <div className="flex items-center justify-center lg:mt-6 mb-10 w-full lg:w-1/2">
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="heroPhoto"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-12">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="lg:pb-6 text-4xl text-justify text-text-secondary font-semibold tracking-tight lg:mt-12 lg:text-7xl lg:text-left">
              Keşfet, Planla, Gezmeye Başla
            </h1>
            <p className="my-2 max-w-xl py-2 lg:py-6 text-justify font-medium text-md lg:text-lg text-text-secondary/60 first-letter:ml-2">
              Senin için en iyi rotayı biz oluşturalım! İlgi alanlarına göre
              öneriler al, popüler gezintileri keşfet ya da kendi gezintini
              planla. Hemen gezintini oluştur ve yola çık!
            </p>
            <CTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
