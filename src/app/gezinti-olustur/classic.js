import photo1 from "../assets/classic/photo1.png";
import photo2 from "../assets/classic/photo2.png";
import photo3 from "../assets/classic/photo3.png";
import photo4 from "../assets/classic/photo4.png";
import photo5 from "../assets/classic/photo5.png";

const classic = () => {
  return (
    <div>
      <div className="border-b-1 border-text-secondary/10 pb-16 mt-6 lg:mt-9 lg:mb-35">
        <h1 className="lg:pb-6 text-3xl mb-8 mx-w-xl text-center text-text-secondary font-semibold tracking-tight lg:mt-12 lg:text-5xl">
          Klasik Gezinti Nedir?
        </h1>
        <div className="flex justify-center items-center flex-wrap">
          <div className="flex items-center justify-center lg:mt-6 mb-10 w-full lg:w-1/2 lg:mb-0">
            <div className="flex justify-center">
              <img
                src={photo1.src}
                alt="different_colors"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="flex flex-col justify-center lg:items-start items-center">
              <h3 className="lg:pb-6 text-2xl mx-w-xl dark:text-secondary text-text-secondary font-semibold tracking-tight lg:mt-12 lg:text-4xl">
                Özgürce Planla, Kolayca Keşfet!
              </h3>
              <p className="my-1 max-w-xl py-1 text-justify font-light text-md mb-1 lg:pb-4 lg:text-lg text-text-secondary first-letter:ml-1">
                Şehri keşfetmek için kendi planını oluşturmak istiyorsan,
                <span className="font-bold text-text-secondary">
                  {" "}
                  Klasik Gezinti{" "}
                </span>
                tam sana göre! Bu yöntemle, ilgi alanlarına göre görmek
                istediğin mekanları kendin belirleyebilir, gezi planını tamamen
                özgürce oluşturabilirsin.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-1 border-text-secondary/10 pb-16 mt-24 lg:mt-36 lg:mb-35">
        <div className="flex justify-center items-center flex-wrap-reverse">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col justify-center lg:items-start items-center">
              <h3 className="lg:pb-6 text-2xl mx-w-xl dark:text-secondary text-text-secondary font-semibold tracking-tight lg:mt-12 lg:text-4xl">
                İlgi Alanlarına Uygun Kategorileri Seç
              </h3>
              <p className="my-1 max-w-xl py-1 text-justify font-light text-md mb-1 lg:pb-4 lg:text-lg text-text-secondary first-letter:ml-1">
                Gezini planlamaya başlarken, ilgini çeken mekan türlerini
                belirleyebilmen için farklı kategoriler sunuyoruz. Müze, kafe,
                park, sanat galerisi gibi seçeneklerden dilediklerini seçerek,
                şehrin bu alanlardaki tüm mekanlarını görebilirsin. Unutma, bu
                bir filtreleme değil! Seçtiğin kategorilere giren tüm mekanlar
                listelenir, sadece ortak mekanlar gösterilmez.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:mt-6 mb-10 w-full lg:w-1/2 lg:pl-12 lg:mb-0">
            <div className="flex justify-center">
              <img
                src={photo2.src}
                alt="different_colors"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-1 border-text-secondary/10 pb-16 mt-24 lg:mt-36 lg:mb-35">
        <div className="flex justify-center items-center flex-wrap">
          <div className="flex items-center justify-center lg:mt-6 mb-10 w-full lg:w-1/2 lg:mb-0">
            <div className="flex justify-center">
              <img
                src={photo3.src}
                alt="different_colors"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="flex flex-col justify-center lg:items-start items-center">
              <h3 className="lg:pb-6 text-2xl mx-w-xl dark:text-secondary text-text-secondary font-semibold tracking-tight lg:pr-4 lg:mt-12 lg:text-4xl">
                Şehrini, Tarihini ve Başlangıç Saatini Belirle
              </h3>
              <p className="my-1 max-w-xl py-1 text-justify font-light text-md mb-1 lg:pb-4 lg:text-lg text-text-secondary first-letter:ml-1">
                Mekan kategorilerini seçtikten sonra, gezini hangi şehirde
                yapmak istediğini, gezi tarihini ve başlangıç saatini
                belirleyerek keşif sürecini başlatabilirsin. Ayrıca, gezin
                sırasında tercihlerini değiştirmek istersen, sol taraftaki
                panelden kategori seçimlerini güncelleyebilir ve mekan listesini
                yeniden oluşturabilirsin.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-1 border-text-secondary/10 pb-16 mt-24 lg:mt-36 lg:mb-35">
        <div className="flex justify-center items-center flex-wrap-reverse">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col justify-center lg:items-start items-center">
              <h3 className="lg:pb-6 text-2xl mx-w-xl dark:text-secondary text-text-secondary font-semibold tracking-tight lg:mt-12 lg:text-4xl">
                Listenizi Oluşturun ve Düzenleyin
              </h3>
              <p className="my-1 max-w-xl py-1 text-justify font-light text-md mb-1 lg:pb-4 lg:text-lg text-text-secondary first-letter:ml-1">
                Karşına çıkan mekan listesinden en fazla 10 mekan seçerek kendi
                gezi planını oluşturabilirsin. Sağ tarafta yer alan panel
                sayesinde seçtiğin mekanları görebilir, istemediğin mekanları
                tek dokunuşla listenden çıkarabilirsin. Ayrıca, mekanların
                kapanış saatlerine göre bir uyarı alarak, gittiğinde kapalı
                olabilecek yerleri önceden öğrenebilirsin.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:mt-6 mb-10 w-full lg:w-1/2 lg:pl-12 lg:mb-0">
            <div className="flex justify-center">
              <img
                src={photo4.src}
                alt="different_colors"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-1 border-text-secondary/10 pb-16 mt-24 lg:mt-36 lg:mb-35">
        <div className="flex justify-center items-center flex-wrap">
          <div className="flex items-center justify-center lg:mt-6 mb-10 w-full lg:w-1/2 lg:mb-0">
            <div className="flex justify-center">
              <img
                src={photo5.src}
                alt="different_colors"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="flex flex-col justify-center lg:items-start items-center">
              <h3 className="lg:pb-6 text-2xl mx-w-xl dark:text-secondary text-text-secondary font-semibold tracking-tight lg:pr-4 lg:mt-12 lg:text-4xl">
                Tek Tıklamayla En Verimli Gezi Planını Al!
              </h3>
              <p className="my-1 max-w-xl py-1 text-justify font-light text-md mb-1 lg:pb-4 lg:text-lg text-text-secondary first-letter:ml-1">
                Gezini tamamladığında, tek bir tıklamayla en kısa ve en verimli
                güzergahı oluşturabilirsin. Seçtiğin mekanları en ideal sıraya
                koyarak, hem zamandan tasarruf edersin hem de gereksiz yolculuk
                yapmadan keşfini tamamlayabilirsin. Artık her şey hazır, şehri
                keşfetmeye başla!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default classic;
