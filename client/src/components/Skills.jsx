import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import useFetch from "../hooks/useFetch.js";
import { fallbackSkills } from "../data/staticData.js";
import { glassCardClass, mutedTextClass, sectionClass } from "../utils/styles.js";

function Skills() {
  const { data: skills } = useFetch("/skills", fallbackSkills);

  return (
    <section id="skills" className={sectionClass}>
      <SectionTitle
        eyebrow="Skills"
        title="Tech stack I use to build complete web apps."
        description="Frontend, backend, database, UI design and deployment skills in one place."
      />

      <div className="grid items-center gap-[60px] lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className={`${glassCardClass} rounded-[30px] p-[34px]`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {skills.map((skill) => (
            <div className="mb-6 last:mb-0" key={skill._id || skill.name}>
              <div className="mb-2.5 flex justify-between"><span>{skill.name}</span><strong className="text-brand-cyan">{skill.level}%</strong></div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.08]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className={`${glassCardClass} rounded-[30px] p-[34px] text-center`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mx-auto mb-[22px] grid size-[210px] place-items-center rounded-full bg-[radial-gradient(circle_at_center,#030712_58%,transparent_60%),conic-gradient(#8b5cf6,#22d3ee,#ec4899,rgba(255,255,255,0.08)_92%)]"><span className="text-[44px] font-black">90%</span></div>
          <h3>Problem Solving</h3>
          <p className={mutedTextClass}>I write reusable components, organized backend APIs and scalable database models.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
