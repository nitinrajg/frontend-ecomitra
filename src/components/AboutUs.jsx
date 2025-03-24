import React from 'react';

const AboutUs = () => {
  return (
    <div className="px-4 py-20 min-h-screen md:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="mb-8">
          <span className="text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-white">"Providing </span>
            <span className="text-[#26B33B]">Connections</span>
            <span className="text-white">, </span>
          </span>
          <div className="mt-4">
            <span className="text-4xl font-bold md:text-5xl lg:text-6xl">
              <span className="text-white">Enabling </span>
              <span className="text-[#26B33B]">Sustainability</span>
              <span className="text-white">.</span>
              <span className="text-[#26B33B]">"</span>
            </span>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3">
        {/* Sustainability Card */}
        <div className="bg-[#26B33B]/10 p-6 rounded-lg border border-[#26B33B]/20">
          <h3 className="text-[#26B33B] text-2xl font-bold mb-4">Sustainability</h3>
          <p className="text-white/80">
          EcoMitra is dedicated to promoting sustainable practices by facilitating the recycling and proper disposal of scrap materials. By encouraging the sale and recycling of scrap, EcoMitra significantly reduces waste and minimizes the environmental impact of discarded materials, contributing to a cleaner and greener environment.
          </p>
        </div>

        {/* Innovation Card */}
        <div className="bg-[#26B33B]/10 p-6 rounded-lg border border-[#26B33B]/20">
          <h3 className="text-[#26B33B] text-2xl font-bold mb-4">Innovation</h3>
          <p className="text-white/80">
          EcoMitra leverages innovative technologies to streamline the process of scrap collection and recycling. The application incorporates automated systems for cleaning and maintenance, treats wastewater on-site, and operates using renewable energy sources. These innovations not only improve operational efficiency but also reduce the overall environmental footprint of the recycling process.
          </p>
        </div>

        {/* Community Card */}
        <div className="bg-[#26B33B]/10 p-6 rounded-lg border border-[#26B33B]/20">
          <h3 className="text-[#26B33B] text-2xl font-bold mb-4">Community</h3>
          <p className="text-white/80">
          EcoMitra actively engages with local communities to raise awareness about the importance of recycling and sustainable practices. The application provides educational resources and outreach programs to empower communities to embrace eco-friendly habits. Additionally, EcoMitra collaborates with various organizations and institutions to develop and implement sustainable solutions for waste management, fostering a sense of community involvement and responsibility.
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-[#26B33B]/10 p-8 rounded-lg border border-[#26B33B]/20 mb-16">
        <p className="text-lg leading-relaxed text-white/80">
          Eco Mitra is a digital platform dedicated to connecting individuals, scrap merchants, 
          and large-scale industries for efficient{' '}
          <span className="text-[#26B33B] font-semibold">scrap management</span>. 
          Our network allows people and businesses to easily connect with local scrap 
          merchants for hassle-free transactions and pickups.
          <br /><br />
          For industries generating bulk scrap, we provide a streamlined solution, linking 
          them with professional aggregators to ensure responsible and sustainable disposal.
          <br /><br />
          Together, we're driving a cleaner, more connected future in the recycling industry.
        </p>
      </div>

      {/* Vision, Mission, Goals Section */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Vision */}
        <div className="space-y-4">
          <button className="bg-[#26B33B] text-white px-6 py-2 rounded-lg font-semibold w-full md:w-auto">
            OUR VISION
          </button>
          <div className="bg-[#26B33B]/10 p-6 rounded-lg border border-[#26B33B]/20">
            <p className="text-white/80">
              Ecomitra's vision is to create a sustainable future by becoming the leading 
              digital platform for waste management, empowering communities and industries 
              to efficiently recycle and contribute to a cleaner, greener world.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="space-y-4">
          <button className="bg-[#26B33B] text-white px-6 py-2 rounded-lg font-semibold w-full md:w-auto">
            OUR MISSION
          </button>
          <div className="bg-[#26B33B]/10 p-6 rounded-lg border border-[#26B33B]/20">
            <p className="text-white/80">
              Ecomitra's mission is to revolutionize waste management by connecting scrap 
              generators with merchants through a transparent, digital platform, promoting 
              sustainability, efficiency, and convenience in scrap collection and recycling.
            </p>
          </div>
        </div>

        {/* Goals */}
        <div className="space-y-4">
          <button className="bg-[#26B33B] text-white px-6 py-2 rounded-lg font-semibold w-full md:w-auto">
            OUR GOALS
          </button>
          <div className="bg-[#26B33B]/10 p-6 rounded-lg border border-[#26B33B]/20">
            <p className="text-white/80">
              Ecomitra aims to promote sustainability, enhance efficiency, expand its network, 
              empower communities, and innovate through technology, driving a transparent and 
              accessible digital platform for effective waste management and recycling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;