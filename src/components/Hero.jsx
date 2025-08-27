import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Soeng Prakbormey
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {" "}
            Web Developer 
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
             A third-year student pursuing a double degree in Computer 
             Science at the Institute of Technology of Cambodia (ITC) 
             and English Literature at the Institute of Foreign Languages (IFL). 
             I am passionate about technology, software development, and effective
              communication. I enjoy solving problems, building useful tools, and learning new concepts.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "Bormey",
  origin: "🌍 Phnom Penh, Cambodia ",
  role: "Web Developer",
  stack: {
    languages: ["JavaScript", "HTML", "CSS", "C++", "C" "SQL"],
    frameworks: ["React", "Next.js"],
  },
  skills: {
    languages: ["English", "Khmer"],
    softSkills: [
      "Teamwork & Communication",
      "Time Management",
      "Willingness to Learn",
    ],
  }
  traits: [
    "clean-code believer",
    "UI/UX explorer",
    "tech enthusiast",
  ],
  missionStatement:
    "Building useful solutions, learning every step, and making technology simpler for everyone",
  availability: "Open to opportunities",

};`}
            </SyntaxHighlighter>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};