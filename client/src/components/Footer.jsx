import { FaArrowUp, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { mutedTextClass, socialLinkClass } from "../utils/styles.js";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-[7%] pb-7 pt-[70px]">
      <div className="grid gap-[38px] lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.1fr]">
        <div>
          <h2 className="mb-3.5 text-3xl font-bold">Portfolio<span className="text-brand-purple">.</span></h2>
          <p className={mutedTextClass}>Premium MERN portfolio built with React, Node, Express and MongoDB.</p>
          <div className="mt-[18px] flex gap-3">
            <a className={socialLinkClass} href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a className={socialLinkClass} href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a className={socialLinkClass} href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Navigation</h3>
          <a className={`${mutedTextClass} mb-2 block`} href="#home">Home</a>
          <a className={`${mutedTextClass} mb-2 block`} href="#about">About</a>
          <a className={`${mutedTextClass} mb-2 block`} href="#skills">Skills</a>
          <a className={`${mutedTextClass} mb-2 block`} href="#projects">Projects</a>
          <a className={`${mutedTextClass} mb-2 block`} href="#contact">Contact</a>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Services</h3>
          <a className={`${mutedTextClass} mb-2 block`} href="#services">Web Development</a>
          <a className={`${mutedTextClass} mb-2 block`} href="#services">Backend APIs</a>
          <a className={`${mutedTextClass} mb-2 block`} href="#services">MERN Apps</a>
          <a className={`${mutedTextClass} mb-2 block`} href="#services">UI Design</a>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Newsletter</h3>
          <p className={mutedTextClass}>Add email updates or blog feature here later.</p>
          <div className="mt-[18px] flex gap-3">
            <input className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-[15px] text-white outline-none placeholder:text-zinc-500" placeholder="Enter email" />
            <button className="w-[52px] rounded-[14px] border-0 bg-gradient-to-br from-brand-purple to-brand-blue text-white" type="button">&rarr;</button>
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-[22px]">
        <p className={mutedTextClass}>&copy; 2026 Your Name. All rights reserved.</p>
        <a className="grid size-[46px] place-items-center rounded-full bg-brand-purple text-white" href="#home"><FaArrowUp /></a>
      </div>
    </footer>
  );
}

export default Footer;
