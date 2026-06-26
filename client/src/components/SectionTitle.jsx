import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations.js";
import { mutedTextClass, sectionKickerClass } from "../utils/styles.js";

function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-[60px] max-w-[780px] text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <p className={sectionKickerClass}>{eyebrow}</p>
      <h2 className="my-3.5 text-[clamp(34px,5vw,58px)] font-extrabold leading-[1.1] tracking-[-2px]">
        {title}
      </h2>
      {description && <span className={mutedTextClass}>{description}</span>}
    </motion.div>
  );
}

export default SectionTitle;
