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
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ 
              backgroundImage: "url('/SkincareShop.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "rgba(0,0,0,0.1)",
              backgroundBlendMode: "darken",
            
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Skincare Website(Individual Project)</h3>
          <p>
            A responsive website designed to showcase
             skincare products and provide basic product information.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>CSS & Boostrap</span>
            <span>Javascript</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/WordPrediction.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "rgba(0,0,0,0.1)",
              backgroundBlendMode: "darken", 
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Word Prediction Tool in MATLAB (Group Project)</h3>
          <p>
            A simple tool that predicts the next word based on bigram modeling.
          </p>
          <div className="project-tech">
            <span>Matlab</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/WeatherApp.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "rgba(0,0,0,0.1)",
              backgroundBlendMode: "darken", 
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Weather App</h3>
          <p>
            A simple and user-friendly web application that provides real-time weather 
            updates. It allows users to search for any city and instantly view details 
            such as temperature, humidity, wind speed, and weather conditions.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>Javascript</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};