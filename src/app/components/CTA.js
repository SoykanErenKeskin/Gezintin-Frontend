const CTA = () => {
  return (
    // <button className="transition-all duration-500 py-3 px-4 rounded-lg bg-linear-to-br from-primary to-accent text-text-secondary group-hover:bg-black">
    //   Gezinti Oluştur
    // </button>
    <div className="flex max-w-sm rounded-lg bg-gradient-to-tr from-accent to-secondary p-0.5 shadow-lg">
      <button className="flex-1 tracking-wide text-text font-bold text-md bg-text-secondary px-5 py-4 rounded-lg hover:bg-text-secondary/80 cursor-pointer">
        Gezinti Oluştur
      </button>
    </div>
  );
};

export default CTA;
