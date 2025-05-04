import photo1 from "../assets/personalized/photo1.png";
import photo2 from "../assets/personalized/photo2.png";
import photo3 from "../assets/personalized/photo3.png";
import photo4 from "../assets/personalized/photo4.png";

const personalized = () => {
  return (
    <div>
      <div className="border-b-1 border-text-secondary/10 pb-16 mt-6 lg:mt-9 lg:mb-35">
        <h1 className="lg:pb-6 text-3xl mb-8 mx-w-xl text-center text-text-secondary font-semibold tracking-tight lg:mt-12 lg:text-5xl">
          Kişiselleştirilmiş Gezinti Nedir?
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
                Senin İçin Tasarlanmış Bir Keşif Deneyimi
              </h3>
              <p className="my-1 max-w-xl py-1 text-justify font-light text-md mb-1 lg:pb-4 lg:text-lg text-text-secondary first-letter:ml-1">
                Her gezginin ilgi alanları farklıdır ve herkesin keşfetmekten
                keyif aldığı mekanlar değişebilir.
                <span className="font-bold text-text-secondary">
                  {" "}
                  Kişiselleştirilmiş Gezinti
                </span>
                , tam da bu noktada devreye girerek, yapay zeka destekli
                önerilerle sana en uygun keşif deneyimini sunar.
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
                Tercihlerini Tanıyoruz, Sana En Uygun Mekanları Öneriyoruz
              </h3>
              <p className="my-1 max-w-xl py-1 text-justify font-light text-md mb-1 lg:pb-4 lg:text-lg text-text-secondary first-letter:ml-1">
                Gezintine başlamadan önce, ilgi alanlarını ve tercihlerini
                anlamak için birkaç basit soruyla sana özel bir test yapıyoruz.
                Sanat galerilerini mi seviyorsun, yoksa doğayla iç içe
                olabileceğin yerler mi ilgini çekiyor? Belki de tarihî yapılar
                senin için vazgeçilmezdir. İşte bu soruların cevaplarına göre
                senin için en ideal mekanları belirliyoruz.
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
                Planlamayı Biz Yapıyoruz, Sen Sadece Keşfet
              </h3>
              <p className="my-1 max-w-xl py-1 text-justify font-light text-md mb-1 lg:pb-4 lg:text-lg text-text-secondary first-letter:ml-1">
                Gezintini oluşturduğunda, en kısa ve en verimli yolculuk planı
                senin için hazırlanır. Aynı zamanda mekanların kapanış saatleri
                de dikkate alınarak planın oluşturulur. Böylece gittiğinde
                kapalı olabilecek yerlerle karşılaşmaz, keyifli bir keşif süreci
                yaşarsın.
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
                Şehri Kendi Zevkine Göre Keşfet!
              </h3>
              <p className="my-1 max-w-xl py-1 text-justify font-light text-md mb-1 lg:pb-4 lg:text-lg text-text-secondary first-letter:ml-1">
                <span className="font-bold text-text-secondary">
                  Kişiselleştirilmiş Gezinti
                </span>
                , senin tercihlerine dayalı olarak oluşturulmuş en özel keşif
                deneyimini sunar. Şehri kendi zevkine göre keşfetmek ve
                unutulmaz anılar biriktirmek için hemen keşfe çık!
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
    </div>
  );
};

export default personalized;
