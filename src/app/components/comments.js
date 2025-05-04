import userComments from "../constants/index";

const comments = () => {
  return (
    <div className="border-b-1 border-text-secondary/10 pb-24 mt-24 lg:mt-36 lg:mb-35">
      <h2 className="lg:pb-6 text-2xl text-center text-secondary font-semibold tracking-tight lg:mt-12 lg:text-4xl">
        Kullanıcılarımızın Deneyimlerini Görün
      </h2>
      <div>
        <ul className="flex flex-row py-10 gap-10 overflow-y-auto scrollbar">
          {userComments.map((comment, index) => (
            <li
              key={index}
              className="flex flex-col border-1 border-text-secondary/10 rounded-xl backdrop-blur-2xl justify-between drop-shadow-xl px-8 py-6 bg-text-secondary/10 hover:bg-text-secondary/20"
            >
              <p className="w-35 italic text-text-secondary/70 mb-4">
                {comment.comment}
              </p>
              <p className="w-35 text-right font-semibold text-text-secondary">
                ~{comment.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default comments;
