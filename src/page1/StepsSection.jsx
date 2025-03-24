import { motion } from "framer-motion";
import clover from "../assets/clover.png";
import step1 from "../assets/p1step1.png";
import step2 from "../assets/p1step2.png";
import step3 from "../assets/p1step3.png";
import step4 from "../assets/p1step4.png";

const steps = [
  {
    title: "STEP 1",
    subtitle: "LIST YOUR SCRAP",
    description:
      "Start by listing the scrap you want to sell on our platform. Whether it’s metal, paper, plastic, or e-waste, simply upload the details and quantities of your scrap along with clear pictures. This helps us connect you with the right buyers, ensuring transparency and fair pricing.",
    image: step1,
    animation: { x: -100 }, // Slide from left
  },
  {
    title: "STEP 2",
    subtitle: "SCHEDULE PICKUP",
    description:
      "Choose a convenient time for your scrap collection. Our platform allows you to pick a date and time that fits your schedule, ensuring a hassle-free experience without interrupting your daily routine.",
    image: step2,
    animation: { x: 100 }, // Slide from right
  },
  {
    title: "STEP 3",
    subtitle: "CONNECT WITH PICKUP PARTNER",
    description:
      "Once you schedule a pickup, Ecomitra assigns a trusted and verified pickup partner from our network. You’ll receive real-time updates about your partner’s details and estimated arrival time, ensuring a seamless and reliable process.",
    image: step3,
    animation: { x: -100 }, // Slide from left
  },
  {
    title: "STEP 4",
    subtitle: "GET PAID INSTANTLY",
    description:
      "When the pickup partner arrives, your scrap is collected, and you get paid instantly based on the agreed price. With Ecomitra, selling your scrap is efficient, transparent, and environmentally responsible, contributing to a cleaner and greener world.",
    image: step4,
    animation: { x: 100 }, // Slide from right
  },
];

const StepsSection = () => {
  return (
    <section className="bg-[#1C211B] text-white px-6 lg:px-20 pt-24 pb-24 flex flex-col items-center">
      <div className="flex flex-col gap-8 justify-between items-center mb-16 w-full max-w-5xl md:flex-row">
        {/* Left Text Section */}
        <div className="mb-4 md:w-2/3">
          <h2 className="mt-10 text-3xl font-bold md:text-4xl">Ecomitra’s</h2>
          <div className="mt-2">
            <h2 className="text-[#26B33B] text-3xl md:text-4xl font-bold relative inline-block">
              Sell Your Scrap
              <span className="block h-[1px] bg-white w-full mt-3"></span>
            </h2>
          </div>
          <p className="text-gray-300 mt-4 text-base font-[Poppins]">
            Ecomitra’s Sell Your Scrap service makes recycling easy and
            sustainable. By connecting individuals and businesses with scrap
            merchants, we ensure that waste is repurposed, not wasted. This
            reduces landfill waste, conserves resources, and helps build a
            circular economy. Sell your scrap today, and be part of a cleaner,
            greener future!
          </p>
          <p className="text-[#26B33B] mt-2 text-base font-medium font-[Poppins]">
            Ecomitra simplifies scrap selling with convenience and transparency,
            empowering individuals to turn waste into value while promoting
            sustainability.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:w-1/3">
          <img
            src={clover}
            alt="Clover"
            className="w-50 h-50 rounded-full bg-[#A7E85A] p-4"
          />
        </div>
      </div>

      {/* Steps Container */}
      <div className="space-y-16 w-full max-w-5xl">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center md:items-start gap-8`}
            initial={{ opacity: 0, ...step.animation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.3, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-[#26B33B] text-2xl font-bold">{step.title}</h3>
              <p className="text-base font-semibold text-gray-300">{step.subtitle}</p>
              <div className="border-b border-[#26B33B] w-20 my-2 mx-auto md:mx-0"></div>
              <p className="text-base text-gray-300">{step.description}</p>
            </div>
            <div className="flex-1">
              <img src={step.image} alt={step.subtitle} className="w-full rounded-xl" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
