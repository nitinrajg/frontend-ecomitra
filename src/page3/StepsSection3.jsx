import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clover from "../assets/clover.png";
import step1 from "../assets/estep 1.png";
import step2 from "../assets/estep 2.png";
import step3 from "../assets/estep 3.png";

const steps = [
  {
    title: "LIST YOUR DONATIONS",
    description:
      "The first step in making a meaningful impact is to list the items you wish to donate. Whether it’s clothes, books, toys, electronics, or other essentials, simply upload the details on our platform...",
    image: step1,
  },
  {
    title: "QUALITY CHECK",
    description:
      "Once your donations are listed, Ecomitra conducts a quality check to assess their condition and ensure they are suitable for reuse or redistribution...",
    image: step2,
  },
  {
    title: "CONNECT WITH PICKUP PARTNER",
    description:
      "After the quality check, a verified and trusted pickup partner is assigned to collect your donations. You’ll receive real-time updates about your pickup partner’s details...",
    image: step3,
  },
];

const StepsSection3 = () => {
  return (
    <section className="bg-[#1C211B] text-white px-6 lg:px-20 pt-24 pb-24 flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-2/3 mb-4"
        >
          <h2 className="text-3xl mt-10 md:text-4xl font-bold">Ecomitra’s</h2>
          <div className="mt-2">
            <h2 className="text-[#26B33B] text-3xl md:text-4xl font-bold relative inline-block">
              Ecokind
              <span className="block h-[1px] bg-white w-full mt-3"></span>
            </h2>
          </div>
          <p className="text-gray-300 mt-4 text-base font-[Poppins]">
            Ecomitra’s EcoKind service is dedicated to making a positive impact
            on both people and the planet...
          </p>
          <p className="text-[#26B33B] mt-2 text-base font-medium font-[Poppins]">
            With EcoKind, your donations don’t just help others—they promote
            sustainability and compassion...
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/3 flex justify-center"
        >
          <img
            src={clover}
            alt="Clover"
            className="w-50 h-50 rounded-full bg-[#A7E85A] p-0"
          />
        </motion.div>
      </div>

      {/* Steps Section */}
      <div className="w-full max-w-5xl space-y-16">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          const ref = useRef(null);
          const inView = useInView(ref, { once: true, amount: 0.3 });

          return (
            <motion.div
              ref={ref}
              key={index}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`flex flex-col md:flex-row ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center md:items-start gap-8`}
            >
              <div className="flex-1">
                <h3 className="text-[#26B33B] text-2xl font-bold">
                  STEP {index + 1}
                </h3>
                <p className="text-gray-300 font-semibold text-base">
                  {step.title}
                </p>
                <div className="border-b border-[#26B33B] w-20 my-2"></div>
                <p className="text-gray-300 text-base font-[Poppins]">
                  {step.description}
                </p>
              </div>
              <div className="flex-1">
                <img
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  className="rounded-xl w-full"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StepsSection3;
