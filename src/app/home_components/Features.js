import photo1 from "../assets/features1.png";
import photo2 from "../assets/features2.png";
import photo3 from "../assets/features3.png";
import photo4 from "../assets/features4.png";
const Features = () => {
  return (
    <div className="border-b-1 border-text-secondary/10 pb-24 mt-24 lg:mt-36 lg:mb-35">
      <h2 className="pb-6 lg:pb-12 text-2xl text-center dark:text-secondary text-text-secondary font-semibold tracking-tight lg:mt-12 lg:text-4xl">
        Ne Sunuyoruz?
      </h2>
      <div className="flex justify-evenly items-center space-y-8 md:space-y-16 lg:space-y-0 flex-wrap">
        <div className="flex flex-col items-center justify-center w-70 h-110 bg-text-secondary/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-2xl hover:bg-text-secondary/20">
          <div className="max-w-40 md:max-w-50 mt-7">
            <img
              src={photo1.src}
              alt="feature-1"
              className="rounded-full border-2 border-text-secondary"
            />
          </div>

          <h2 className="px-7 pt-7 font-medium text-lg text-center underline underline-offset-5 decoration-5 decoration-secondary/50">
            Kişiselleştirilmiş Deneyim
          </h2>
          <p className="px-6 py-5 text-text-secondary/60">
            İlgi alanlarına göre önerilen mekanlarla, tam sana uygun bir keşif
            gezintisi oluştur!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-70 h-110 bg-text-secondary/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-2xl hover:bg-text-secondary/20">
          <div className="max-w-40 md:max-w-50 mt-7">
            <img
              src={photo2.src}
              alt="feature-1"
              className="rounded-full border border-2 border-text-secondary"
            />
          </div>

          <h3 className="px-7 pt-7 font-medium text-lg text-center underline underline-offset-5 decoration-5 decoration-secondary/50">
            Zaman Verimliliği
          </h3>
          <p className="px-6 py-5 text-text-secondary/60">
            Seçtiğin mekanlar arasında en kısa mesafeyi hesaplayalım. Sen de
            zaman kaybetmeden gezintini tamamla!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-70 h-110 bg-text-secondary/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-2xl hover:bg-text-secondary/20">
          <div className="max-w-40 md:max-w-50 mt-7">
            <img
              src={photo3.src}
              alt="feature-1"
              className="rounded-full border border-2 border-text-secondary"
            />
          </div>

          <h3 className="px-7 pt-7 font-medium text-lg text-center underline underline-offset-5 decoration-5 decoration-secondary/50">
            Popüler Gezintiler
          </h3>
          <p className="px-6 py-5 text-text-secondary/60">
            Kullanıcıların en çok tercih ettiği gezintileri keşfet ve en popüler
            mekanları gez!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-70 h-110 bg-text-secondary/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-2xl hover:bg-text-secondary/20">
          <div className="max-w-40 md:max-w-50 mt-7">
            <img
              src={photo4.src}
              alt="feature-1"
              className="rounded-full border border-2 border-text-secondary"
            />
          </div>

          <h3 className="px-7 pt-7 font-medium text-lg text-center underline underline-offset-5 decoration-5 decoration-secondary/50">
            Akıllı Planlama
          </h3>
          <p className="px-6 py-5 text-text-secondary/60">
            Gezintini planlarken mekanların kapanış saatlerini göz önünde
            bulundur ve en verimli gezintiyi oluştur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
