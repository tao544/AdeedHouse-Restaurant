import React, {useState, useEffect} from 'react'

const Testimonials = () => {
 const testContent = [
  {
    name: " Amaka O.",
    content: "The Jollof Rice here is top-notch! It reminds me of home."
  },
  {
    name: " Samuel T. ",
    content: "Beautiful ambience and friendly staff. Highly recommend!"
  },
  {
    name: "Bola A.",
    content: "Affordable, delicious, and consistent. Adeed House is my go-to lunch spot"
  },
 ];

 const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
   setCurrent((prev) => (prev + 1) % testContent.length);
  }, 4000);

  return () => clearInterval(interval); // cleanup on unmount
}, [testContent.length]);

// const start = current * 2;
// const visibleContent = testContent.slice(start, start + 2);
const visibleContent = [testContent[current]];


  return (
    <section className='container-fluid bg-dark py-5'>
      <div className="text-center text-white mb-5">
        <h4 className='fw-bold text-warning'> What Our Customers Say </h4>
      </div>

      <div className="row justify-content-center transition-all">
        {visibleContent.map((item, index)=>(
          <div key={index} className='bg-white col-md-5 rounded-3 shadow-sm p-4 text-left'>
            <p className='text-muted fst-italic'>{item.content}</p>
            <p className='fw-semibold text-warning mt-3 mb-1'>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};



export default Testimonials