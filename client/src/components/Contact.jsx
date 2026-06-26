import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLocationDot, FaPaperPlane, FaPhone } from "react-icons/fa6";
import API from "../api.js";
import SectionTitle from "./SectionTitle.jsx";
import { glassCardClass, inputClass, sectionClass, submitButtonClass } from "../utils/styles.js";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus("");

    try {
      await API.post("/contact", form);
      setStatus("Message sent successfully. I will reply soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus(error.response?.data?.message || "Message failed. Please check backend.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className={sectionClass}>
      <SectionTitle
        eyebrow="Contact"
        title="Let's work together on your next project."
        description="This form stores messages in MongoDB and admin can view them from dashboard."
      />

      <div className="grid items-center gap-[60px] lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className={`${glassCardClass} rounded-[30px] p-[34px]`}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="mb-6 text-[28px] font-bold">Contact Information</h3>
          <p className="mb-4 flex items-center gap-3.5 leading-[1.8] text-brand-muted"><FaPhone className="text-brand-cyan" /> +91 84478 64304</p>
          <p className="mb-4 flex items-center gap-3.5 leading-[1.8] text-brand-muted"><FaEnvelope className="text-brand-cyan" /> khanariz541@gmail.com</p>
          <p className="mb-4 flex items-center gap-3.5 leading-[1.8] text-brand-muted"><FaPhone className="text-brand-cyan" /> +91 8447864304</p>
          <p className="mb-4 flex items-center gap-3.5 leading-[1.8] text-brand-muted"><FaLocationDot className="text-brand-cyan" /> India</p>
          <div className="mt-10 size-[230px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.55),transparent_18%),radial-gradient(circle_at_center,rgba(139,92,246,0.32),transparent_60%),conic-gradient(from_90deg,rgba(34,211,238,0.12),rgba(139,92,246,0.45),rgba(236,72,153,0.25),rgba(34,211,238,0.12))] [filter:drop-shadow(0_0_65px_rgba(34,211,238,0.25))]" />
        </motion.div>

        <motion.form
          className={`${glassCardClass} grid gap-4 rounded-[30px] p-[34px]`}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <input className={inputClass} name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input className={inputClass} name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <input className={inputClass} name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
          <textarea className={inputClass} name="message" rows="6" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          <button className={submitButtonClass} type="submit" disabled={sending}>{sending ? "Sending..." : "Send Message"} <FaPaperPlane /></button>
          {status && <span className="my-3.5 block font-extrabold text-brand-cyan">{status}</span>}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
