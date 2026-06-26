import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaLayerGroup, FaPalette } from "react-icons/fa6";
import SectionTitle from "./SectionTitle.jsx";
import { services } from "../data/staticData.js";
import { glassCardClass, mutedTextClass, sectionClass } from "../utils/styles.js";

const iconMap = {
  code: <FaCode />,
  database: <FaDatabase />,
  layers: <FaLayerGroup />,
  design: <FaPalette />
};

function Services() {
  return (
    <section id="services" className={sectionClass}>
      <SectionTitle
        eyebrow="Services"
        title="What I can build for clients."
        description="These services make your portfolio useful for freelancing and job opportunities."
      />

      <div className="grid gap-[26px] lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            className={`${glassCardClass} rounded-[28px] p-[30px]`}
            key={service.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="mb-5 grid size-[58px] place-items-center rounded-[18px] bg-gradient-to-br from-brand-purple/35 to-brand-cyan/15 text-2xl text-brand-cyan">{iconMap[service.icon]}</div>
            <h3 className="my-2.5 text-2xl font-bold">{service.title}</h3>
            <p className={mutedTextClass}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
