import clover from "../assets/clover.png";
import step1 from "../assets/estep 1.png";
import step2 from "../assets/estep 2.png";
import step3 from "../assets/estep 3.png";

const StepsSection3 = () => {
  return (
    <section className="bg-[#1C211B] text-white px-6 lg:px-20 pt-24 pb-24 flex flex-col items-center">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        {/* Left Text Section */}
        <div className="md:w-2/3 mb-4">
          <h2 className="text-3xl mt-10 md:text-4xl font-bold">Ecomitra’s</h2>
          <div className="mt-2">
            <h2 className="text-[#26B33B] text-3xl md:text-4xl font-bold relative inline-block">
            Ecokind
              <span className="block h-[1px] bg-white w-full mt-3"></span>
            </h2>
          </div>
          <p className="text-gray-300 mt-4 text-base font-[Poppins]">
            Ecomitra’s EcoKind service is dedicated to making a positive impact on both people and the planet. Through EcoKind, we facilitate donations to orphans and those in need, fostering a sustainable model of social responsibility. By supporting vulnerable communities, we reduce inequality and promote social sustainability, while also encouraging the reuse and repurposing of resources. EcoKind is about giving back, not just through charity, but by creating a more equitable and sustainable world for future generations.
          </p>
          <p className="text-[#26B33B] mt-2 text-base font-medium font-[Poppins]">
          With EcoKind, your donations don’t just help others—they promote sustainability and compassion, ensuring that every item you donate goes toward making a difference.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={clover}
            alt="Clover"
            className="w-50 h-50 rounded-full bg-[#A7E85A] p-0"
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
            LIST YOUR DONATIONS
            </p>
            <div className="border-b border-[#26B33B] w-20 my-2"></div>
            <p className="text-gray-300 mt-2  font-[Poppins]">
            The first step in making a meaningful impact is to list the items you wish to donate. Whether it’s clothes, books, toys, electronics, or other essentials, simply upload the details on our platform. By listing your donations, you ensure that your items reach those who need them most—orphans, underprivileged communities, and vulnerable individuals.
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
            QUALITY CHECK
            </p>
            <div className="border-b border-[#26B33B] w-20 my-2"></div>
            <p className="text-gray-300 text-base font-[Poppins]">
            Once your donations are listed, Ecomitra conducts a quality check to assess
their condition and ensure they are suitable for reuse or redistribution. This step ensures that only items in good condition are passed on, helping provide tangible support to those in need. If the items cannot be directly used, they will
be responsibly recycled to maximize value for charity.
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
            <p className="text-gray-300 text-base font-[Poppins]">
            After the quality check, a verified and trusted pickup partner is assigned to collect your donations. You’ll receive real-time updates about your pickup partner’s details and an estimated time of arrival. This ensures a smooth and hassle-free donation process, with your items being efficiently delivered to those who need them.
            </p>
          </div>
          <div className="flex-1">
            <img src={step3} alt="Step 3" className="rounded-xl w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection3;
