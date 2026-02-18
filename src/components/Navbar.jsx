import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Portfolio
      </motion.div>

      {/* Desktop & Mobile Links */}
      <motion.ul
        className={`nav-links ${menuOpen ? "active" : ""}`}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.li variants={fadeInUp}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        </motion.li>
        <motion.li variants={fadeInUp}>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </motion.li>
        <motion.li variants={fadeInUp}>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </motion.li>
      </motion.ul>

      {/* Hamburger Button */}
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </motion.nav>
  );
};
