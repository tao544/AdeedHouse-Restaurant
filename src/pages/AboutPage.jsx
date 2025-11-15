import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-300! text-gray-500 p-6 md:p-12 font-sans">
      {/* Header */}
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold text-amber-900! mb-2">Adeed House Restaurant</h2>
        <p className="text-lg text-muted">Bringing people together through food since 2018</p>
      </header>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-8!">
        {/* Section 1 – Our Story */}
        <section className="space-y-4 ">
          <h3 className="text-2xl font-semibold text-slate-700! text-center md:text-left">Our Story</h3>
          <p className="text-muted">
            Established in 2018, Adeed House began with a simple dream — to bring people together through
            good food and warm hospitality. From a small local kitchen, we’ve grown into one of Ikeja’s most
            loved dining spots, known for blending traditional African dishes with modern continental flavors.
          </p>
          <p className="text-muted">
            We believe that food should not just fill the stomach but also comfort the soul. That’s why every
            dish we serve is prepared with care, using fresh ingredients and authentic recipes passed down
            through generations.
          </p>
        </section>

        {/* Section 2 – Mission & Values */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-700! text-center md:text-left mb-4">Our Mission & Values</h3>
          <div>
            <h4 className="text-lg mb-2 text-muted pl-3 ">Our Mission:</h4>
            <p className="text-muted">
              To provide an unforgettable dining experience with delicious, healthy meals served in a comfortable
              environment.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-muted pl-3">Our Values:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-muted">Passion for taste and quality</li>
              <li className="text-muted">Excellent customer service</li>
              <li className="text-muted">Clean and welcoming atmosphere</li>
              <li className="text-muted">Constant innovation in our menu</li>
            </ul>
          </div>
        </section>

        {/* Section 3 – Meet Our Chefs */}
        <section className="md:col-span-2 space-y-4">
          <h3 className="text-2xl font-semibold text-slate-700! text-center mb-4">Meet Our Chefs</h3>
          <p className="text-muted text-center md:text-left">
            Our talented chefs are the heartbeat of Adeed House. With years of experience in African and
            continental cuisines, they turn every meal into a masterpiece.
          </p>
          <p className="italic border-l-4 border-yellow-700 pl-4 text-gray-600">
            “Cooking is an art, and our guests are our inspiration.” — <strong>Chef Adeed</strong>
          </p>
          <div className="text-center">
            <Link to="/menu">
              <button className="mt-4 bg-amber-700 text-white px-6 py-2 rounded hover:bg-yellow-600 transition-transform duration-300">
                Explore Our Menu
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;