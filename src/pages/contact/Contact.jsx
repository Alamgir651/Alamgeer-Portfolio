import React, { useEffect, useState } from "react";
import AOS from "aos";
import toast, { Toaster } from "react-hot-toast";
import "./Contact.css";
import profileImage from "../../assets/image4.png";
import { FaMapMarkerAlt, FaPhone, FaPaperPlane, FaGlobe } from "react-icons/fa";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    const formData = {
      name: e.target.elements[0].value,
      email: e.target.elements[1].value,
      subject: e.target.elements[2].value,
      message: e.target.elements[3].value,
    };

    const promise = fetch(
      "https://portfolio-api-three-gamma.vercel.app/api/send-message",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    ).then((res) => {
      if (!res.ok) {
        return res.json().then((data) => Promise.reject(data));
      }
      return res.json();
    });
    toast.promise(promise, {
      loading: "Sending message...",
      success: (data) => {
        e.target.reset();
        setIsSending(false);
        return " Message sent successfully!";
      },
      error: (err) => {
        setIsSending(false);
        return ` Error: ${err.message || "Something went wrong!"}`;
      },
    });
  };

  return (
    <section id="contact" className="contact-section">
<Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: 'my-toast-animation',
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />      <div className="container">
        <span className="background-text-contact">Contact</span>

        <div className="section-header-contact" data-aos="fade-up">
          <h2>
            <span id="contactspan">Contact</span> Me
          </h2>
          <p>
            "Have a project or idea in mind? Feel free to contact me—let’s build
            something amazing together"
          </p>
        </div>

        <div className="contact-info-grid" data-aos="fade-up">
          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <h3 className="info-title">ADDRESS</h3>
            <p>Punjab, Pakistan</p>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <FaPhone />
            </div>
            <h3 className="info-title">CONTACT NUMBER</h3>
            <p>0303-0834088</p>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <FaPaperPlane />
            </div>
            <h3 className="info-title">EMAIL ADDRESS</h3>
            <p>khanalamgeer996@gmail.com</p>
          </div>
        </div>

        <div className="contact-form-area">
          <div className="contact-image">
            <img src={profileImage} alt="image" loading="lazy" />
          </div>

          <form
            className="form-container"
            data-aos="fade-left"
            onSubmit={handleSubmit}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows="6" required></textarea>
            <button
              type="submit"
              className="send-message-btn"
              disabled={isSending}
            >
              {isSending ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
