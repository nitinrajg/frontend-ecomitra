import stepsImage from "../assets/business steps.png";
import sellYourScrap from "../assets/businessbg.jpg";

const BusinessPage = () => {
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
          <span className="text-[#26B33B]">Connect, Bid & Trade</span>
        </h1>
        <p className="text-gray-200 mt-4 text-lg px-4 font-[Poppins]">
        "Streamline your scrap management with Ecomitra!

Our digital platform connects your business with a network of verified scrap
merchants, enabling competitive bidding for maximum value. Experience
transparency, efficiency, and sustainability while turning waste into opportunity.
Partner with us to drive your business toward a greener future!"
        </p>
      </div>

      <div className="relative z-10 flex justify-center mt-20 -mb-[50%]">
        <img
          src={stepsImage}
          alt="Sell Your Scrap Steps"
          className="w-[92%] max-w-4xl"
        />
      </div>
    </section>
  );
};

export default BusinessPage;
