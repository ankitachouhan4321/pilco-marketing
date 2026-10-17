import React, { useState } from "react";

// Add your official PILCO email in the .env file.
const CONTACT_EMAIL = "ankitachouhan4585@gmail.com";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  enquiryType: "",
  product: "",
  company: "",
  city: "",
  quantity: "",
  message: "",
  website: "",
};

const enquiryTypes = [
  "Product Enquiry",
  "Request a Quotation",
  "Bulk Order / Wholesale",
  "Warehouse Storage Project",
  "Custom Storage Solution",
  "Dealership / Distribution",
  "General Enquiry",
];

const productCategories = [
  "Plastic Pallets",
  "Plastic Crates",
  "Industrial Storage Crates",
  "Heavy Duty Pallet Racks",
  "Warehouse Storage Racks",
  "Industrial Storage Racks",
  "Mezzanine Floors",
  "Cantilever Racks",
  "Display Racks",
  "Flow Racks",
  "Cable Trays",
  "Cable Ducts",
  "Other Storage Solutions",
];

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Honeypot spam protection
    if (formData.website) {
      setStatus({
        type: "danger",
        message: "Unable to process this submission.",
      });
      return;
    }

    if (!CONTACT_EMAIL) {
      setStatus({
        type: "danger",
        message:
          "Enquiry service is not configured. Please contact our team directly.",
      });
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");

    if (cleanPhone.length < 10 || cleanPhone.length > 15) {
      setStatus({
        type: "danger",
        message: "Please enter a valid phone number.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const form = new FormData();

    form.append("_subject", `PILCO ${formData.enquiryType} - ${formData.name}`);

    form.append("_template", "table");
    form.append("_captcha", "false");

    form.append("Full Name", formData.name.trim());
    form.append("Phone Number", formData.phone.trim());
    form.append("Email Address", formData.email.trim());
    form.append("Enquiry Type", formData.enquiryType);
    form.append("Product Category", formData.product || "Not Specified");

    form.append("Company Name", formData.company || "Not Provided");

    form.append("City / Location", formData.city || "Not Provided");

    form.append("Required Quantity", formData.quantity || "Not Specified");

    form.append("Requirements", formData.message.trim());

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
        {
          method: "POST",
          body: form,
          headers: {
            Accept: "application/json",
          },
        },
      );

      const result = await response.json();

      if (
        response.ok &&
        (result.success === "true" || result.success === true)
      ) {
        setStatus({
          type: "success",
          message:
            "Thank you for contacting PILCO! Your enquiry has been submitted. Our team will get back to you shortly.",
        });

        setFormData({ ...initialFormData });
      } else {
        throw new Error(result.message || "Unable to submit enquiry.");
      }
    } catch (error) {
      console.error("PILCO enquiry error:", error);

      setStatus({
        type: "danger",
        message:
          "Sorry, we couldn't submit your enquiry. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="pilco-contact-section py-5" id="contact">
        <div className="container py-lg-4">
          <div className="row g-4 g-lg-5 align-items-start">
            {/* LEFT: COMPANY INFORMATION */}
            <div class="col-lg-5">
              <div className="pilco-contact-details mt-4">
                <div className=" mb-4">
                  <div className="top-head">Contact Information </div>

                  <h3 className="heading">Reach Out to Our Team</h3>

                  <p>
                    Have a question or need assistance with your storage
                    requirements? Connect with our team.
                  </p>
                </div>

                {/* PHONE NUMBER */}
                <div className="pilco-contact-info-item">
                  <div className="pilco-contact-info-icon">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>

                  <div className="pilco-contact-info-text">
                    <h4>Call Us</h4>

                    <a href="tel:+918045804245">+91 80458 04245</a>
                  </div>
                </div>

                {/* EMAIL ADDRESS */}
                <div className="pilco-contact-info-item">
                  <div className="pilco-contact-info-icon">
                    <i className="fa-solid fa-envelope-open-text"></i>
                  </div>

                  <div className="pilco-contact-info-text">
                    <h4>Email Us</h4>

                    <a href="mailto:abc@gmail.com">abc@gmail.com</a>
                  </div>
                </div>

                {/* OFFICE ADDRESS */}
                <div className="pilco-contact-info-item">
                  <div className="pilco-contact-info-icon">
                    <i className="fa-regular fa-map"></i>
                  </div>

                  <div className="pilco-contact-info-text">
                    <h4>Our Location</h4>

                    <p>
                      145-146, 1st Floor, Vardhman Fortune Mall, Opp. Hans
                      Cinema, G.T Karnal Road, Delhi-110033, Delhi, India
                    </p>
                  </div>
                </div>

                {/* BUSINESS HOURS */}
                <div className="pilco-contact-info-item">
                  <div className="pilco-contact-info-icon">
                    <i className="fa-solid fa-clock"></i>
                  </div>

                  <div className="pilco-contact-info-text">
                    <h4>Business Hours</h4>

                    <p>
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: CONTACT FORM */}
            <div className="col-lg-7">
              <div className="pilco-contact-form">
                <div className="pilco-form-header">
                  <span className="top-head">WE'RE HERE TO HELP</span>

                  <h2 className="heading">Request a Quote</h2>

                  <p>
                    Tell us about your industrial storage or material handling
                    requirements.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* HONEYPOT */}
                  <div className="visually-hidden" aria-hidden="true">
                    <label htmlFor="pilco-website">
                      Leave this field empty
                    </label>

                    <input
                      id="pilco-website"
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="row g-3">
                    {/* FULL NAME */}
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="pilco-name">
                        Full Name <span>*</span>
                      </label>

                      <input
                        id="pilco-name"
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        autoComplete="name"
                        maxLength={100}
                        required
                      />
                    </div>

                    {/* PHONE */}
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="pilco-phone">
                        Phone Number <span>*</span>
                      </label>

                      <input
                        id="pilco-phone"
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your contact number"
                        autoComplete="tel"
                        minLength={10}
                        maxLength={20}
                        required
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="pilco-email">
                        Email Address <span>*</span>
                      </label>

                      <input
                        id="pilco-email"
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        autoComplete="email"
                        maxLength={150}
                        required
                      />
                    </div>

                    {/* ENQUIRY TYPE */}
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="pilco-enquiry">
                        Enquiry Type <span>*</span>
                      </label>

                      <select
                        id="pilco-enquiry"
                        className="form-select"
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Enquiry Type</option>

                        {enquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* PRODUCT CATEGORY */}
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="pilco-product">
                        Product Interested In
                      </label>

                      <select
                        id="pilco-product"
                        className="form-select"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                      >
                        <option value="">Select Product</option>

                        {productCategories.map((product) => (
                          <option key={product} value={product}>
                            {product}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* CITY */}
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="pilco-city">
                        City / Location
                      </label>

                      <input
                        id="pilco-city"
                        type="text"
                        className="form-control"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Your city or location"
                        autoComplete="address-level2"
                        maxLength={100}
                      />
                    </div>

                    {/* QUANTITY */}
                    <div className="col-md-12">
                      <label className="form-label" htmlFor="pilco-quantity">
                        Required Quantity
                      </label>

                      <input
                        id="pilco-quantity"
                        type="text"
                        className="form-control"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 100 pallets / 20 racks"
                        maxLength={100}
                      />
                    </div>

                    {/* MESSAGE */}
                    <div className="col-12">
                      <label className="form-label" htmlFor="pilco-message">
                        Your Requirements <span>*</span>
                      </label>

                      <textarea
                        id="pilco-message"
                        className="form-control"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your storage requirements, dimensions, quantity or project details..."
                        maxLength={3000}
                        required
                      />
                    </div>

                    {/* FEEDBACK */}
                    {status.message && (
                      <div className="col-12">
                        <div
                          className={`alert alert-${status.type} mb-0`}
                          role="status"
                          aria-live="polite"
                        >
                          {status.message}
                        </div>
                      </div>
                    )}

                    {/* SUBMIT */}
                    <div className="col-12 mt-4">
                      <button
                        type="submit"
                        className="btn pilco-btn px-4 py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <i className="fa-solid fa-spinner fa-spin "></i>
                            Sending Enquiry...
                          </>
                        ) : (
                          <>
                            Submit Enquiry
                            <i className="fa-regular fa-paper-plane ps-2"></i>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="pilco-form-privacy">
                        <i className="fa-solid fa-lock"></i>
                        Your details will be used to respond to your enquiry.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
