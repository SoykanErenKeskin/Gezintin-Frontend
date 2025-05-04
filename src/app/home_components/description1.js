import photo from "../assets/desc1.png";

const description1 = () => {
  return (
    <div className="border-b-1 border-text-secondary/10 pb-16 mt-24 lg:mt-36 lg:mb-35">
      <div className="flex justify-center items-center flex-wrap">
        <div className="flex items-center justify-center lg:mt-6 mb-10 w-full lg:w-1/2 lg:mb-0">
          <div className="flex justify-center">
            <img src={photo.src} alt="heroPhoto" className="rounded-lg" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-12">
          <div className="flex flex-col justify-center lg:items-start items-center">
            <h3 className="lg:pb-6 text-2xl mx-w-xl dark:text-secondary text-text-secondary font-semibold tracking-tight lg:mt-12 lg:text-4xl">
              En Gözde Noktalar Bir Tıklamada
            </h3>
            <p className="my-1 max-w-xl py-1 text-justify font-light text-md lg:text-lg text-text-secondary first-letter:ml-1">
              Şehrin en popüler mekanlarını keşfetmek artık çok daha kolay! En
              çok ziyaret edilen ve en beğenilen noktaları tek bir tıklamayla
              görüntüleyebilir, sana en uygun gezintiyi oluşturabilirsin. Vakit
              kaybetmeden en gözde mekanları keşfet, unutulmaz bir gezi deneyimi
              yaşa!
            </p>
            <p className="mb-2 max-w-xl pb-1 lg:pb-4 text-justify font-light text-md lg:text-lg text-text-secondary first-letter:ml-1">
              Vakit kaybetmeden en gözde mekanları keşfet, unutulmaz bir gezi
              deneyimi yaşa!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default description1;
