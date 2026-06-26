import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed left-1/2 top-2.5 z-[1000] flex w-[min(1180px,calc(100%_-_28px))] items-center justify-between rounded-3xl border px-4 py-3.5 backdrop-blur-[14px] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 md:top-[18px] md:px-[22px] md:py-4 ${
        scrolled
          ? "border-white/10 bg-brand-bg/85 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "border-white/[0.07] bg-brand-bg/40"
      }`}
      initial={{ x: "-50%", y: -24, opacity: 0 }}
      animate={{ x: "-50%", y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <a href="#home" className="text-2xl font-black">Portfolio<span className="text-brand-purple">.</span></a>

      <div className="hidden gap-7 md:flex">
        {links.map((link) => (
          <a className="text-sm text-brand-muted transition duration-300 hover:text-white" href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="hidden items-center justify-center gap-2.5 rounded-[14px] border-0 bg-gradient-to-br from-brand-purple to-brand-blue px-5 py-[13px] font-bold text-white shadow-button transition duration-300 hover:-translate-y-1 md:inline-flex"
      >
        Let&apos;s Talk
      </a>

      <button
        type="button"
        className="block border-0 bg-transparent text-2xl text-white md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {open && (
        <motion.div
          className="absolute left-0 top-[68px] grid w-full gap-4 rounded-[20px] border border-white/10 bg-brand-bg/95 p-5 backdrop-blur-xl md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((link) => (
            <a className="text-brand-muted transition hover:text-white" href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
