import sellYourScrap from "../assets/ecokindbg.jpg";
import stepsImage from "../assets/ecosteps.png";

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
          From Trash to Treasure, <br />
          <span className="text-[#26B33B]">Contribute with kindness
          </span>
        </h1>
        <p className="text-gray-200 mt-4 text-lg px-4 font-[Poppins]">
        "Spread kindness with EcoKind by Ecomitra! Join us in making a

difference by donating to orphans and those in need. Together, we
can create a brighter future, one act of generosity at a time."
        </p>
      </div>

      <div className="relative z-10 flex justify-center mt-32 -mb-[50%]">
        <img
          src={stepsImage}
          alt="Sell Your Scrap Steps"
          className="w-[92%] max-w-3xl"
        />
      </div>
    </section>
  );
};

export default EcolifePage;
