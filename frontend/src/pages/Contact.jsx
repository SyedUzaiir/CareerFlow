import React, { useState } from "react";
// Make sure to install lucide-react: npm install lucide-react
import { Mail, Phone, MapPin, Send } from "lucide-react";

// You can create a reusable Input component for cleaner code
const InputField = ({
  id,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}) => (
  <div>
    <label htmlFor={id} className="sr-only">
      {placeholder}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
    />
  </div>
);

// Main App component to render the contact page
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // e.g., send the data to a server.
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    // Reset form after submission
    setFormData({ name: "", email: "", phone: "", message: "" });
  };
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We're here to help and answer any question you might have. We look
            forward to hearing from you!
          </p>
        </div>
        <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg border border-gray-200 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side: Send a Message Form */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <InputField
                  id="name"
                  name="name"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputField
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your Phone (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <div>
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full sm:w-auto rounded-md bg-gradient-to-r  px-6 py-3 font-semibold text-white shadow-md bg-fuchsia-500 hover:bg-fuchsia-700  focus:outline-none focus:ring-2  focus:ring-offset-2 transition-all duration-200 ease-in-out"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side: Contact Details */}
            <div className="flex flex-col space-y-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-0 md:mb-6">
                Our Contact Details
              </h2>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <Mail size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Email Us
                  </h3>
                  <p className="text-gray-600">
                    Get in touch via email for any inquiries.
                  </p>
                  <a
                    href="mailto:udayrajsingh@gmail.com"
                    className="text-purple-600 font-medium hover:underline"
                  >
                    maraheem812@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <Phone size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Call Us
                  </h3>
                  <p className="text-gray-600">
                    Reach out to us during business hours.
                  </p>
                  <a
                    href="tel:+9392566104"
                    className="text-purple-600 font-medium hover:underline"
                  >
                    +91 939 256 6104
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <MapPin size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Our Office
                  </h3>
                  <p className="text-gray-600">
                    No. 155, 1st Cross and 2nd Main, Mindspace, Hyderabad,
                    Telangana, India
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                We typically respond within 24-48 business hours. For urgent
                matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
