import React from "react";

// Import your food images
import food1 from "../assets/pasta.jpg";
import food2 from "../assets/salad.jpg";
import food3 from "../assets/soup.jpg";
import food4 from "../assets/desert.jpg";
import food5 from "../assets/iyan.jpg";
import food6 from "../assets/jollof-1.jpg";
import food7 from "../assets/menu-jolo.jpg";
import food8 from "../assets/sourcurry.jpg";


// Import your restaurant/event images
import event1 from "../assets/event-1.jpg";
import event2 from "../assets/event-2.jpg";
import event3 from "../assets/rest-int-1.jpg";
import event4 from "../assets/restSlide-1.jpg";

const Gallery = () => {
  const foodImages = [
    food1, food2, food3, food4, food5, food6, food7, food8
  ];

  const eventImages = [
    event1, event2, event3, event4
  ];

  return (
    <div className="bg-gray-100! text-center py-12">
      {/* Section 1 – Food Gallery */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-white text-3xl font-bold mb-3 bg-slate-900 rounded ">
          Food Gallery
        </h2>
        <p className="text-gray-700! mb-8">
          A visual journey through our dishes — fresh ingredients, vibrant colors, and authentic taste.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foodImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img src={img} alt={`Dish ${index + 1}`} className="w-full h-56 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 – Restaurant & Events */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className=" text-white text-3xl font-bold mb-3 bg-slate-900 rounded">
          Restaurant & Events
        </h2>
        <p className="text-gray-700! mb-8">
          Our space is designed to make every meal special — whether it’s a family dinner, friends’ hangout, or romantic date night. 
          We also host small gatherings, birthdays, and private events.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {eventImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img src={img} alt={`Event ${index + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
