import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { glassCardClass, primaryButtonClass, secondaryButtonClass, socialLinkClass } from "../utils/styles.js";

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-[7%] pb-[75px] pt-[120px] md:pt-[155px]">
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:76px_76px]" />
      <div className="absolute right-[10%] top-[18%] size-[340px] rounded-full bg-brand-purple opacity-50 blur-[70px]" />
      <div className="absolute bottom-[12%] left-[8%] size-[260px] rounded-full bg-brand-cyan opacity-50 blur-[70px]" />

      <div className="relative z-[3] grid items-center gap-[70px] lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          className="relative z-[3]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-[26px] inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-brand-muted">
            <span className="size-[9px] rounded-full bg-brand-green shadow-[0_0_22px_#22c55e]" /> Available for freelance projects
          </div>

          <h1 className="mb-[22px] text-[clamp(48px,7vw,92px)] font-black leading-[1.02] tracking-[-2px] md:tracking-[-4px]">
            Hi, I&apos;m <span className="bg-gradient-to-r from-brand-purple via-brand-cyan to-brand-pink bg-clip-text text-transparent">Ariz Pervez Khan</span>
          </h1>

          <h2 className="mb-[22px] text-[clamp(22px,3vw,34px)] font-bold text-zinc-200">Full Stack Developer</h2>

          <p className="max-w-[640px] text-lg leading-[1.8] text-brand-muted">
            I build fast, modern and premium web applications using the MERN stack,
            clean UI design and smooth animations that make every website feel professional.
          </p>

          <div className="mt-[34px] flex flex-wrap items-center gap-4">
            <a href="#projects" className={primaryButtonClass}>View My Work <FaArrowRight /></a>
            <a href="/resume.pdf" className={secondaryButtonClass} download="Ariz Pervez Khan Resume.pdf">Download CV <FaDownload /></a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a className={socialLinkClass} href="https://github.com/zk6577" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a className={socialLinkClass} href="www.linkedin.com/in/ariz-pervez-khan-082b37315" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>

          </div>
        </motion.div>

        <motion.div
          className="relative grid min-h-[390px] place-items-center md:min-h-[520px]"
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute size-[320px] animate-rotate-slow rounded-[38%] border-2 border-brand-purple/55 md:size-[440px]" />
          <div className="absolute size-[360px] animate-rotate-slower rounded-[38%] border-2 border-brand-cyan/30 md:size-[500px]" />
          <div className="absolute left-[55px] top-[100px] z-[5] size-7 animate-float rounded-full bg-brand-purple" />
          <div className="absolute right-20 top-[150px] z-[5] size-[18px] animate-float rounded-full bg-brand-cyan" />
          <div className="absolute bottom-[105px] right-[125px] z-[5] size-[22px] animate-float rounded-full bg-brand-pink" />
          <img
            src="/arizpic.jpeg"
            alt="Your profile"
            className="relative z-[4] aspect-square w-[280px] rounded-[46px] border border-brand-purple/60 object-cover shadow-[0_0_95px_rgba(139,92,246,0.35)] md:w-[min(380px,76vw)]"
          />
         
        </motion.div>
      </div>

      <motion.div
        className={`${glassCardClass} relative z-[3] mx-auto mt-[42px] grid max-w-[960px] overflow-hidden rounded-[26px] sm:grid-cols-2 lg:grid-cols-3`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.8 }}
      >
        <div className="border-b border-white/10 p-[25px] text-center sm:border-r lg:border-b-0"><strong className="block text-3xl text-brand-purple">10</strong><span className="text-brand-muted">Projects</span></div>
        <div className="border-b border-white/10 p-[25px] text-center lg:border-b-0 lg:border-r"><strong className="block text-3xl text-brand-purple">5K+</strong><span className="text-brand-muted">Commits</span></div>
        <div className="p-[25px] text-center"><strong className="block text-3xl text-brand-purple">100%</strong><span className="text-brand-muted">Responsive</span></div>
      </motion.div>
    </section>
  );
}

export default Hero;
