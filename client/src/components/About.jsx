import { motion } from "framer-motion";
import { FaCircleCheck, FaCode, FaRocket, FaWandMagicSparkles } from "react-icons/fa6";
import SectionTitle from "./SectionTitle.jsx";
import { glassCardClass, mutedTextClass, sectionClass } from "../utils/styles.js";

function About() {
  return (
    <section id="about" className={sectionClass}>
      <SectionTitle
        eyebrow="About Me"
        title="I create beautiful websites with clean code and strong logic."
        description="My focus is premium design, smooth animation, responsive layout and reliable backend systems."
      />

      <div className="grid items-center gap-[60px] lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className={`${glassCardClass} relative overflow-hidden rounded-[34px]`}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img className="w-full" src="/arizpic.jpeg" alt="About" />
          <div className="absolute bottom-6 left-6 rounded-[18px] border border-white/10 bg-brand-bg/80 px-[18px] py-3.5">MERN Stack Developer</div>
        </motion.div>

        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="mb-[18px] text-[34px] font-bold leading-tight">Professional, modern and client-ready development.</h3>
          <p className={mutedTextClass}>
            I design and develop websites that look premium and work perfectly on mobile, tablet and desktop.
            This portfolio is built to show your skills, projects, services and contact details in a strong way.
          </p>

          <div className="my-6 grid gap-3.5">
            <p className="flex items-center gap-3"><FaCircleCheck className="text-brand-cyan" /> Premium dark UI with neon gradient design</p>
            <p className="flex items-center gap-3"><FaCircleCheck className="text-brand-cyan" /> MERN backend with MongoDB database</p>
            <p className="flex items-center gap-3"><FaCircleCheck className="text-brand-cyan" /> Contact form and admin dashboard</p>
            <p className="flex items-center gap-3"><FaCircleCheck className="text-brand-cyan" /> Smooth scroll reveal and hover animations</p>
          </div>

          <div className="grid gap-3.5 md:grid-cols-3">
            <div className="grid gap-2.5 rounded-[18px] border border-white/10 bg-white/[0.04] p-[18px]"><FaCode className="text-2xl text-brand-purple" /><span>Clean Code</span></div>
            <div className="grid gap-2.5 rounded-[18px] border border-white/10 bg-white/[0.04] p-[18px]"><FaRocket className="text-2xl text-brand-purple" /><span>Fast Performance</span></div>
            <div className="grid gap-2.5 rounded-[18px] border border-white/10 bg-white/[0.04] p-[18px]"><FaWandMagicSparkles className="text-2xl text-brand-purple" /><span>Premium UI</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
