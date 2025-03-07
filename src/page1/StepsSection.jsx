import clover from "../assets/clover.png";
import step1 from "../assets/p1step1.png";
import step2 from "../assets/p1step2.png";
import step3 from "../assets/p1step3.png";
import step4 from "../assets/p1step4.png";

const StepsSection = () => {
  return (
    <section className="bg-[#1C211B] text-white px-6 lg:px-20 pt-24 pb-24 flex flex-col items-center">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        {/* Left Text Section */}
        <div className="md:w-2/3 mb-4">
          <h2 className="text-3xl mt-10 md:text-4xl font-bold">Ecomitra’s</h2>
          <div className="mt-2">
            <h2 className="text-[#26B33B] text-3xl md:text-4xl font-bold relative inline-block">
              Sell Your Scrap
              <span className="block h-[1px] bg-white w-full mt-3"></span>
            </h2>
          </div>
          <p className="text-gray-300 mt-4 text-base">
            Ecomitra’s Sell Your Scrap service makes recycling easy and
            sustainable. By connecting individuals and businesses with scrap
            merchants, we ensure that waste is repurposed, not wasted. This
            reduces landfill waste, conserves resources, and helps build a
            circular economy. Sell your scrap today, and be part of a cleaner,
            greener future!
          </p>
          <p className="text-[#26B33B] mt-2 text-base font-medium">
            Ecomitra simplifies scrap selling with convenience and transparency,
            empowering individuals to turn waste into value while promoting
            sustainability.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={clover}
            alt="Clover"
            className="w-50 h-50 rounded-full bg-[#A7E85A] p-4"
          />
        </div>
      </div>

      {/* Steps Container */}
      <div className="w-full max-w-5xl space-y-16">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1">
            <h3 className="text-[#26B33B] text-2xl font-bold">STEP 1</h3>
            <p className="text-gray-300 font-semibold text-base">
              LIST YOUR SCRAP
            </p>
            <div className="border-b border-[#26B33B] w-20 my-2"></div>
            <p className="text-gray-300 text-base">
              Start by listing the scrap you want to sell on our platform.
              Whether it’s metal, paper, plastic, or e-waste, simply upload the
              details and quantities of your scrap along with clear pictures.
              This helps us connect you with the right buyers, ensuring
              transparency and fair pricing.
            </p>
          </div>
          <div className="flex-1">
            <img src={step1} alt="Step 1" className="rounded-xl w-full" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
          <div className="flex-1">
            <h3 className="text-[#26B33B] text-2xl font-bold">STEP 2</h3>
            <p className="text-gray-300 font-semibold text-base">
              SCHEDULE PICKUP
            </p>
            <div className="border-b border-[#26B33B] w-20 my-2"></div>
            <p className="text-gray-300 text-base">
              Choose a convenient time for your scrap collection. Our platform
              allows you to pick a date and time that fits your schedule,
              ensuring a hassle-free experience without interrupting your daily
              routine.
            </p>
          </div>
          <div className="flex-1">
            <img src={step2} alt="Step 2" className="rounded-xl w-full" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1">
            <h3 className="text-[#26B33B] text-2xl font-bold">STEP 3</h3>
            <p className="text-gray-300 font-semibold text-base">
              CONNECT WITH PICKUP PARTNER
            </p>
            <div className="border-b border-[#26B33B] w-20 my-2"></div>
            <p className="text-gray-300 text-base">
              Once you schedule a pickup, Ecomitra assigns a trusted and
              verified pickup partner from our network. You’ll receive real-time
              updates about your partner’s details and estimated arrival time,
              ensuring a seamless and reliable process.
            </p>
          </div>
          <div className="flex-1">
            <img src={step3} alt="Step 3" className="rounded-xl w-full" />
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
          <div className="flex-1">
            <h3 className="text-[#26B33B] text-2xl font-bold">STEP 4</h3>
            <p className="text-gray-300 font-semibold text-base">
              GET PAID INSTANTLY
            </p>
            <div className="border-b border-[#26B33B] w-20 my-2"></div>
            <p className="text-gray-300 text-base">
              When the pickup partner arrives, your scrap is collected, and you
              get paid instantly based on the agreed price. With Ecomitra,
              selling your scrap is efficient, transparent, and environmentally
              responsible, contributing to a cleaner and greener world.
            </p>
          </div>
          <div className="flex-1">
            <img src={step4} alt="Step 4" className="rounded-xl w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
