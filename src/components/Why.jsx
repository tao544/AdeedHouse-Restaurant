import React from 'react'
import aboutBg from "../assets/aboutBg.jpg";

const Why = () => {

  const reasons = [
    "Freshly prepared meals made daily",
    "Skilled chefs with years of experience",
    "Clean and comfortable dining area",
    "Fast takeaway and delivery services",
    "Affordable meals with great taste",
  ];

  return (
    <section className='container-fluid py-5' style={{backgroundImage: `url(${aboutBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="text-center text-white mb-5">
        <h3 className='text-amber-950! fw-bold mb-3'>Why Choose Us</h3>
      </div>
      <h4 className='text-slate-700! text-center mb-4'>Why People Love Adeed House</h4>
      <ul className='list-unstyled fs-5 text-secondary text-center mx-auto ' >
        {reasons.map((reason, index)=>(
          <li key={index} className='mb-3'>
            {reason}
          </li>
        ))}

      </ul>
        


    </section>
  )
}

export default Why