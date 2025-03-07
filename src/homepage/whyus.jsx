import { motion } from "framer-motion";
import flexibleIcon from "../assets/flexible.png";
import sustainableIcon from "../assets/sustainable.png";
import convenientIcon from "../assets/convenient.png";
import userFriendlyIcon from "../assets/user-friendly.png";

const blobVariants = {
  float: {
    y: [0, -25, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section
      id="about-us"
      className="relative flex justify-center items-center min-h-screen bg-[#1C211B] text-white px-20 scroll-mt-20"
    >
      <div className="relative w-3/4 mx-auto flex justify-center items-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold absolute z-10 text-center leading-tight">
          Why <br /> choose <br /> us?
        </h2>

        <motion.div
          className="absolute top-6 left-16 w-56 h-56 flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-green-400 shadow-[0_0_50px_rgba(34,197,94,0.8)]"
          variants={blobVariants}
          animate="float"
        >
          <img src={flexibleIcon} alt="Flexible" className="w-60 h-35" />
          <p className="text-[#1C211B] text-lg font-medium mt-[-20px]">
            Flexible
          </p>
        </motion.div>

        <motion.div
          className="absolute top-24 right-8 w-64 h-64 flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-green-400 shadow-[0_0_50px_rgba(34,197,94,0.8)]"
          variants={blobVariants}
          animate="float"
        >
          <img src={sustainableIcon} alt="Sustainable" className="w-24 h-24" />
          <p className="text-[#1C211B] text-lg font-medium mt-2">Sustainable</p>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-32 w-60 h-60 flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-green-400 shadow-[0_0_50px_rgba(34,197,94,0.8)]"
          variants={blobVariants}
          animate="float"
        >
          <img src={convenientIcon} alt="Convenient" className="w-22 h-22" />
          <p className="text-[#1C211B] text-lg font-medium mt-2">Convenient</p>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-24 w-52 h-52 flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-green-400 shadow-[0_0_50px_rgba(34,197,94,0.8)]"
          variants={blobVariants}
          animate="float"
        >
          <img
            src={userFriendlyIcon}
            alt="User-Friendly"
            className="w-18 h-18"
          />
          <p className="text-[#1C211B] text-lg font-medium mt-2">
            User-Friendly
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
