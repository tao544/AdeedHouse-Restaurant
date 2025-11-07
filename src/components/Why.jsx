import React from 'react'

const Why = () => {

  const reasons = [
    "Freshly prepared meals made daily",
    "Skilled chefs with years of experience",
    "Clean and comfortable dining area",
    "Fast takeaway and delivery services",
    "Affordable meals with great taste",
  ];

  return (
    <section className='container-fluid py-5'>
      <div className="text-center text-white mb-5">
        <h3 className='text-warning fw-bold mb-3'>Why Choose Us</h3>
      </div>
      <h4 className='text-black text-center mb-4'>Why People Love Adeed House</h4>
      <ul className='list-unstyled fs-5 text-secondary text-center mx-auto' >
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