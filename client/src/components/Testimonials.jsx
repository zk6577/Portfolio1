import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import SectionTitle from "./SectionTitle.jsx";
import { testimonials } from "../data/staticData.js";
import { glassCardClass, mutedTextClass, sectionClass } from "../utils/styles.js";

function Testimonials() {
  return (
    <section className={sectionClass}>
      <SectionTitle
        eyebrow="Testimonials"
        title="What people say about my work."
        description="You can replace these demo reviews with your real client or project feedback."
      />

      <div className="grid gap-[26px] lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            className={`${glassCardClass} rounded-[28px] p-[30px]`}
            key={item.name}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
          >
            <div className="mb-[18px] flex gap-1 text-yellow-400">
              {Array.from({ length: item.rating }).map((_, i) => <FaStar key={i} />)}
            </div>
            <p className={mutedTextClass}>&ldquo;{item.message}&rdquo;</p>
            <div className="mt-[22px] flex items-center gap-3.5">
              <div className="grid size-[46px] place-items-center rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan font-black">
                {item.name.charAt(0)}
              </div>
              <span>
                <strong className="block">{item.name}</strong>
                <small className="block text-brand-muted">{item.role}</small>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
