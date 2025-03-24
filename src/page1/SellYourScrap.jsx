import sellYourScrap from "../assets/p1.png";
import stepsImage from "../assets/tag.png";

const SellYourScrap = () => {
  return (
    <section className="relative bg-[#1C211B] text-white min-h-screen flex flex-col items-center px-6 lg:px-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover opacity-50"
        style={{ backgroundImage: `url(${sellYourScrap})` }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 pt-64 max-w-3xl text-center md:pt-56 lg:pt-72">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          From Trash To Cash, <br />
          <span className="text-[#26B33B]">Sell Your Scrap</span>
        </h1>
        <p className="text-gray-200 mt-4 text-lg px-4 font-[Poppins]">
          "Turn your trash into cash with Ecomitra! Our hassle-free platform
          connects you with trusted scrap merchants, ensuring fair prices and
          eco-friendly disposal. Whether you are a group or an individual,
          selling scrap has never been this easy or sustainable. Join us in
          building a cleaner, greener future—one piece of scrap at a time!"
        </p>
      </div>

      {/* Steps Image */}
      <div className="flex relative z-10 justify-center mt-20 w-full">
        <div className="px-4 w-full max-w-5xl transform translate-y-1/2 md:px-8">
          <img
            src={stepsImage}
            alt="Sell Your Scrap Steps"
            className="object-contain w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default SellYourScrap;
