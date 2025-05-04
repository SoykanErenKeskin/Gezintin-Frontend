import photo from "../assets/desc2.png";

const description2 = () => {
  return (
    <div className="pb-16 mt-24 lg:mt-36 lg:mb-35">
      <div className="flex justify-center items-center flex-wrap-reverse">
        <div className="w-full lg:w-1/2 lg:pr-12">
          <div className="flex flex-col justify-center items-center">
            <h3 className="lg:pb-6 text-2xl max-w-xl text-text-secondary font-semibold tracking-tight lg:mt-12 lg:text-4xl">
              Kişiselleştirilmiş Özel Gezintiler ve Önerilen Mekanlar
            </h3>
            <p className="my-1 max-w-xl py-1 text-justify font-light text-md lg:text-lg text-text-secondary first-letter:ml-1">
              Senin için en ideal gezintiyi biz oluşturalım! İlgi alanlarını ve
              tercihlerini analiz ederek, tam sana uygun mekanları seçiyor ve en
              verimli yol planını oluşturuyoruz. Yapay zeka destekli bu özel
              gezinti ile keşif deneyimini kişiselleştir, gezintinin keyfini
              çıkar!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center lg:mt-6 mb-10 w-full lg:w-1/2 lg:mb-0">
          <div className="flex justify-center">
            <img src={photo.src} alt="heroPhoto" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default description2;
