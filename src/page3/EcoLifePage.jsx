import sellYourScrap from "../assets/p1.png";
import stepsImage from "../assets/tag.png";

const EcolifePage = () => {
  return (
    <section className="relative bg-[#1C211B] text-white min-h-screen flex flex-col items-center px-6 lg:px-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${sellYourScrap})` }}
      ></div>

      <div className="relative z-10 text-center max-w-3xl pt-72 md:pt-64">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          From Trash To Cash, <br />
          <span className="text-[#26B33B]">Sell Your Scrap</span>
        </h1>
        <p className="text-gray-200 mt-4 text-lg px-4">
          "Turn your trash into cash with Ecomitra! Our hassle-free platform
          connects you with trusted scrap merchants, ensuring fair prices and
          eco-friendly disposal. Whether you are a group or an individual,
          selling scrap has never been this easy or sustainable. Join us in
          building a cleaner, greener future—one piece of scrap at a time!"
        </p>
      </div>

      <div className="relative z-10 flex justify-center mt-32 -mb-[50%]">
        <img
          src={stepsImage}
          alt="Sell Your Scrap Steps"
          className="w-[92%] max-w-5xl"
        />
      </div>
    </section>
  );
};

export default EcolifePage;
