import { useEffect, useState } from 'react'
import './App.css'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, [])

   return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <motion.footer className="footer" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 0.6}}>
        <p>✉️ <b>Email:</b> prakbormey@gmail.com </p>
        <p>📞 <b>Phone:</b> 089 578 096</p>
        <p>&copy; 2025 Soeng Prakbormey. All rights reserved</p>
      </motion.footer>
    </div>
  )
}

export default App
