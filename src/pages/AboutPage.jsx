import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12 space-y-10 font-sans">
      {/* Header */}
      <header className="text-center">
        <h2 className="text-4xl font-bold text-red-700 mb-2 text-warning">Adeed House Restaurant</h2>
        <p className="text-lg text-muted">Bringing people together through food since 2018</p>
      </header>

      {/* Section 1 – Our Story */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h3 className="text-2xl font-semibold text-red-600 text-center">Our Story</h3>
        <p className='text-muted'>
          Established in 2018, Adeed House began with a simple dream — to bring people together through
          good food and warm hospitality. From a small local kitchen, we’ve grown into one of Ikeja’s most
          loved dining spots, known for blending traditional African dishes with modern continental flavors.
        </p>
        <p className='text-muted'>
          We believe that food should not just fill the stomach but also comfort the soul. That’s why every
          dish we serve is prepared with care, using fresh ingredients and authentic recipes passed down
          through generations.
        </p>
      </section>

      {/* Section 2 – Mission & Values */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h3 className="text-2xl font-semibold text-red-600 text-center mb-4">Our Mission & Values</h3>
        <h4 className="text-lg mt-4 mb-2 text-muted">Our Mission:</h4>
        <p className='text-muted'>
          To provide an unforgettable dining experience with delicious, healthy meals served in a comfortable
          environment.
        </p>
        <h4 className="text-lg font-semibold mt-4 mb-2 text-muted">Our Values:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li className='text-muted'>Passion for taste and quality</li>
          <li className='text-muted'>Excellent customer service</li>
          <li className='text-muted'>Clean and welcoming atmosphere</li>
          <li className='text-muted'>Constant innovation in our menu</li>
        </ul>
      </section>

      {/* Section 3 – Meet Our Chefs */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h3 className="text-2xl font-semibold text-red-600 text-center mb-4">Meet Our Chefs</h3>
        <p className='text-muted'>
          Our talented chefs are the heartbeat of Adeed House. With years of experience in African and
          continental cuisines, they turn every meal into a masterpiece.
        </p>
        <p className="italic border-l-4 border-yellow-500 pl-4 text-gray-600">
          “Cooking is an art, and our guests are our inspiration.” — <strong>Chef Adeed</strong>
        </p>
        <button className="mt-4 bg-yellow-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition">
          Explore Our Menu
        </button>
      </section>
    </div>
  );
};

export default AboutPage;