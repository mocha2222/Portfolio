import { motion } from "framer-motion";

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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >

        <motion.a
          href="https://stationery-store-ip.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10 }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/E-commerce.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Stationary Website (Group Project)</h3>
          <p>
            A responsive website designed to showcase stationary products
            and provide basic product information.
          </p>
          <div className="project-tech">
            <span>Vue JS</span>
            <span>CSS & Bootstrap</span>
            <span>Express</span>
          </div>
        </motion.a>

        <motion.a
          href="https://github.com/Malikaaaaaaaaaaa/Student-Internship-Management-System.git"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10 }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/Internship.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Internship Management System (Group Project)</h3>
          <p>
            A website designed to manage internship applications
            and provide internship opportunity information.
          </p>
          <div className="project-tech">
            <span>Thymeleaf</span>
            <span>Spring Boot</span>
          </div>
        </motion.a>

        <motion.a
          href="https://github.com/mocha2222/Skincare-Shop.git"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10 }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/SkincareShop.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Skincare Website (Individual Project)</h3>
          <p>
            A responsive website designed to showcase skincare products
            and provide basic product information.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>CSS & Bootstrap</span>
            <span>JavaScript</span>
          </div>
        </motion.a>

        <motion.a
          href="https://github.com/mocha2222/automata-project.git"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10 }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/Automata.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Automata Project (Group Project)</h3>
          <p>
            A simple tool for calculating the DFA and NFA, convert NFA to DFA and Minimize DFA.
          </p>
          <div className="project-tech">
            <span>Html & Css</span>
            <span>JavaScript</span>
          </div>
        </motion.a>

        <motion.a
          href="https://github.com/yourusername/word-prediction-tool"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10 }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/WordPrediction.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Word Prediction Tool in MATLAB (Group Project)</h3>
          <p>
            A simple tool that predicts the next word
            based on bigram modeling.
          </p>
          <div className="project-tech">
            <span>MATLAB</span>
          </div>
        </motion.a>

        <motion.a
          href="https://github.com/yourusername/weather-app"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10 }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/WeatherApp.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Weather App</h3>
          <p>
            A simple and user-friendly web application that provides
            real-time weather updates including temperature, humidity,
            wind speed, and conditions.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </motion.a>

      </motion.div>
    </motion.section>
  );
};
