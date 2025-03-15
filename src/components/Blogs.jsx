import React from "react";
import person3 from "../assets/Ellipse 96.png";
import person2 from "../assets/Ellipse 98.png";
import person1 from "../assets/Ellipse 99.png";

const testimonials = [
  {
    id: 1,
    image: person1,
    name: "John Doe",
    review:
      "As a scrap merchant, Ecomitra has helped me connect with industries directly, removing middlemen and increasing my business opportunities.",
    business: "eco-one",
  },
  {
    id: 2,
    image: person2,
    name: "Jane Smith",
    review:
      "Ecomitra is addressing a crucial problem in the waste management industry with a smart, scalable solution. Their commitment to innovation makes them a promising startup.",
    business: "aaa business",
  },
  {
    id: 3,
    image: person3,
    name: "Michael Brown",
    review: "Wonderful Service!!",
    business: "mintech solutions",
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="bg-[#1C211B] py-12 flex justify-center">
      <div className="flex flex-wrap gap-6 p-10 justify-center">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-80 bg-gray-100 rounded-xl shadow-lg overflow-hidden"
          >
            {/*Green Section */}
            <div className="bg-[#26B33B] p-6 flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 object-cover rounded-full border-4 border-white"
              />
            </div>

            {/* Bottom Section */}
            <div className="bg-gray-100 p-6 text-left">
              <div className="mb-12">
                <div className="flex text-yellow-500 mb-2 text-[24px]">
                  ★★★★★
                </div>
                <p className="text-gray-800 font-semibold mb-2">
                  {testimonial.business}
                </p>
                <p className="text-gray-800 text-[14px] font-medium -mb-8">
                  {testimonial.review}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;