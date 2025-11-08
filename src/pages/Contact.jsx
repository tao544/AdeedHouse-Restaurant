import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We’ll get back to you soon.");
    // You can later replace this alert with real email sending logic (e.g., using EmailJS)
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="container py-5">
      {/* Section 1 – Contact Information */}
      <div className="text-center mb-5">
        <h3 className="fw-bold text-warning mb-3">We’d Love to Hear From You!</h3>
        <p className="text-muted">
          Whether you’re placing an order, making a reservation, or giving feedback, we’re just a message away.
        </p>
      </div>

      <div className="row justify-content-center mb-5">
  <div className="col-md-10 col-lg-8">
    <div className="bg-light p-4 rounded shadow-sm">
      <h5 className="fw-semibold mb-3 text-dark">Contact Information</h5>
      <p className="mb-1"><i className="bi bi-geo-fill m-2 text-red-600"></i><strong>Address:</strong> 12, Obafemi Awolowo Way, Ikeja, Lagos, Nigeria</p>
      <p className="mb-1"><i className="bi bi-telephone-fill m-2 text-red-600"></i><strong>Phone:</strong> +234 816 234 7890</p>
      <p className="mb-1"><i className="bi bi-envelope-fill m-2 text-red-600"></i><strong>Email:</strong> adeedhouse@gmail.com</p>
      <p className="mb-0"><i className="bi bi-alarm m-2 text-red-600"></i><strong>Hours:</strong> Mon–Sat: 9:00 AM – 10:00 PM | Sun: 12:00 PM – 9:00 PM</p>
    </div>
  </div>
</div>

      {/* Section 2 – Contact Form */}
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <h4 className="fw-bold text-center text-warning mb-4">Send Us a Message</h4>
          <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="4"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-warning fw-semibold px-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
