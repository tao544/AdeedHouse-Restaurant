import React from 'react'
import pics1 from '../assets/rest-int-1.jpg'
import pics2 from '../assets/order-food.jpg'
import pics3 from '../assets/jollof-1.jpg'
import pics4 from '../assets/truffle-spaq.jpg'
import pics5 from '../assets/sourcurry.jpg'
import pics6 from '../assets/drinks-1.jpg'
import { Link } from "react-router-dom";

const Gallery = () => {
  const images =[pics1, pics2, pics3, pics4, pics5, pics6];
  return (
   <section className='container-fluid py-5 bg-light'>
    <div className="text-center">
      <h4 className='fw-bold  text-slate-700! mb-3'>A Glimpse of Our Flavors</h4>
      <p className='text-gray-900! mb-4'>Browse through some of our favorite dishes and happy dining moments</p>
      
      {/* gallery grid */}
      <div className="row">
        {images.map((img, index)=>(
          <div key={index} className='col-6 col-md-4'>
            <img src={img} alt={`gallery ${index + 1}`} className='img-fluid rounded shadow-sm mt-4 hover:scale-105 transition-transform duration-300' />
          </div>
        ))}
      </div>
      {/* button */}
        <div className="mt-4">
<Link to="/gallery">
  <button className="btn btn-warning bg-amber-800! text-white p-2 fw-semibold hover:bg-transparent! hover:text-slate-800!">View More Photos</button>
</Link>
        </div>

    </div>

   </section>
  )
}

export default Gallery